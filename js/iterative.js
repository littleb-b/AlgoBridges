// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`def find_factors(n):
    factors = []
    for i in range(1, n + 1):  # 枚举1到n之间的所有数字
        if n % i == 0:         # 如果i是n的因数
            factors.append(i)
    return factors

# 示例使用
number = 20
factors = find_factors(number)
print(f"{number} 的所有因数:", factors) #输出20的所有因数: [1, 2, 4, 5, 10, 20]`);

// 可视化部分
const nodes = [
  { id: 'A', x: 100, y: 25 },
  { id: 'B', x: 350, y: 25 },
  { id: 'C', x: 450, y: 25 },
  { id: 'D', x: 400, y: 100 },
  { id: 'E', x: 600, y: 50 }
];

const edges = [
  { from: 'A', to: 'B', weight: 5 },
  { from: 'A', to: 'D', weight: 9 },
  { from: 'B', to: 'C', weight: 3 },
  { from: 'B', to: 'D', weight: 2 },
  { from: 'D', to: 'E', weight: 6 },
  { from: 'C', to: 'E', weight: 1 }
];

const graphElement = document.getElementById('graph');
const logContent = document.getElementById('logContent');
const startNodeSelect = document.getElementById('startNode');
const endNodeSelect = document.getElementById('endNode');
let stepIndex = 0;
const steps = [];

let startNode = 'A'; // Default start node
let endNode = 'E';   // Default end node

const distances = {};
const previous = {};
const visited = new Set();
const unvisited = new Set();

function drawNode(node) {
  const nodeElement = document.createElement('div');
  nodeElement.className = 'node';
  nodeElement.id = `node-${node.id}`;
  nodeElement.style.left = `${node.x}px`;
  nodeElement.style.top = `${node.y}px`;
  nodeElement.innerText = node.id;
  graphElement.appendChild(nodeElement);
}

function drawEdge(edge) {
  const fromNode = document.getElementById(`node-${edge.from}`);
  const toNode = document.getElementById(`node-${edge.to}`);
  const x1 = fromNode.offsetLeft + fromNode.offsetWidth / 2;
  const y1 = fromNode.offsetTop + fromNode.offsetHeight / 2;
  const x2 = toNode.offsetLeft + toNode.offsetWidth / 2;
  const y2 = toNode.offsetTop + toNode.offsetHeight / 2;

  const edgeElement = document.createElement('div');
  edgeElement.className = 'edge';
  edgeElement.dataset.from = edge.from;
  edgeElement.dataset.to = edge.to;
  const length = Math.hypot(x2 - x1, y2 - y1);
  edgeElement.style.width = `${length}px`;
  edgeElement.style.left = `${x1}px`;
  edgeElement.style.top = `${y1}px`;
  edgeElement.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;

  const edgeLabel = document.createElement('div');
  edgeLabel.className = 'edge-label';
  edgeLabel.innerText = edge.weight;
  edgeLabel.style.left = `${(x1 + x2) / 2}px`;
  edgeLabel.style.top = `${(y1 + y2) / 2}px`;

  graphElement.appendChild(edgeElement);
  graphElement.appendChild(edgeLabel);
}

function drawGraph() {
  nodes.forEach(drawNode);
  edges.forEach(drawEdge);
  populateNodeSelect();
}

function populateNodeSelect() {
  const nodeIds = nodes.map(node => node.id);
  nodeIds.forEach(id => {
    const option1 = document.createElement('option');
    option1.value = id;
    option1.innerText = id;
    startNodeSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = id;
    option2.innerText = id;
    endNodeSelect.appendChild(option2);
  });
  startNodeSelect.value = startNode;
  endNodeSelect.value = endNode;
}

function log(message) {
  logContent.textContent += message.trimStart() + '\n';
  logContent.scrollTop = logContent.scrollHeight; // 自动滚动到最新日志
}

function initializeAlgorithm() {
  startNode = startNodeSelect.value;
  endNode = endNodeSelect.value;

  distances[startNode] = 0;
  previous[startNode] = null;
  nodes.forEach(node => {
    if (node.id !== startNode) {
      distances[node.id] = Infinity;
      previous[node.id] = null;
    }
    unvisited.add(node.id);
  });

  log(`初始状态：起点 = ${startNode}，终点 = ${endNode}`);
  stepIndex = 0;
  steps.length = 0;
  steps.push({ type: 'init', message: `点击“详细步骤”可了解算法详情` });

  while (unvisited.size > 0) {
    let currentNode = Array.from(unvisited).reduce((minNode, node) => {
      return distances[node] < distances[minNode] ? node : minNode;
    });

    if (distances[currentNode] === Infinity) break;

    visited.add(currentNode);
    unvisited.delete(currentNode);

    steps.push({ type: 'visit', node: currentNode, message: `访问节点 ${currentNode}` });

    if (currentNode === endNode) break;

    const adjacentEdges = edges.filter(edge => edge.from === currentNode || edge.to === currentNode);

    adjacentEdges.forEach(edge => {
      const neighbor = edge.from === currentNode ? edge.to : edge.from;

      if (visited.has(neighbor)) return;

      const newDistance = distances[currentNode] + edge.weight;
      if (newDistance < distances[neighbor]) {
        const oldDistance = distances[neighbor];
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;

        // 构建更精确的路径描述，避免输出 null
        let updatedPath = [];
        let tempNode = neighbor;

        while (tempNode) {
          updatedPath.unshift(tempNode);
          tempNode = previous[tempNode];
        }

        steps.push({
          type: 'update',
          edge,
          node: neighbor,
          message: `从 ${currentNode} 到 ${neighbor} 的距离为 ${edge.weight}。路径为：${updatedPath.join(' -> ')}，路程距离为 ${newDistance}`
        });
      }
    });
  }

  // 在此处调用 highlightShortestPath 函数
  highlightShortestPath();

  stepIndex = 0;
}

function highlightShortestPath() {
  let path = [];
  let currentNode = endNode;
  while (currentNode) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }
  if (path.length > 1) {
    log(`找到从 ${startNode} 到 ${endNode} 的最短路径：${path.join(' -> ')}`);
    for (let i = 0; i < path.length - 1; i++) {
      const edge = document.querySelector(`.edge[data-from="${path[i]}"][data-to="${path[i + 1]}"]`) ||
        document.querySelector(`.edge[data-from="${path[i + 1]}"][data-to="${path[i]}"]`);
      if (edge) {
        edge.classList.add('highlight');
      }
    }
  } else {
    log(`未找到从 ${startNode} 到 ${endNode} 的路径。`);
  }
}

function startAlgorithm() {
  initializeAlgorithm();
  nextStep();
}

function nextStep() {
  if (stepIndex < steps.length) {
    const step = steps[stepIndex];
    log(step.message);

    if (step.type === 'visit') {
      document.getElementById(`node-${step.node}`).classList.add('active');
    } else if (step.type === 'update') {
      const edgeElement = document.querySelector(`.edge[data-from="${step.edge.from}"][data-to="${step.edge.to}"], .edge[data-from="${step.edge.to}"][data-to="${step.edge.from}"]`);
      edgeElement.style.backgroundColor = '#FFC107';
    }

    stepIndex++;
  } else {
    log("算法已结束");
    document.getElementById('next-step').disabled = true;
  }
}
function resetGraph() {
  // 重置节点样式
  document.querySelectorAll('.node').forEach(node => {
    node.classList.remove('active');
    node.classList.remove('shortest-path');
  });

  // 重置边样式
  document.querySelectorAll('.edge').forEach(edge => {
    edge.style.background = '#888';
    edge.classList.remove('highlight'); 
    // edge.classList.add('normaledge');
  });

  // 清空日志
  logContent.textContent = '';

  // 重置算法状态
  stepIndex = 0;
  steps.length = 0;
  visited.clear();
  unvisited.clear();
  document.getElementById('next-step').disabled = false;

  // log('图形已重置');
}

// 初始化图形
drawGraph();
