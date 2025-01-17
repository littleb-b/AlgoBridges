// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`#阶乘的递归实现
  def factorial(n):
    if n == 0:  # 基本情况
        return 1
    else:
        return n * factorial(n - 1)  # 递归调用自身`);

// 可视化部分
const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');
const angleSlider = document.getElementById('angleSlider');
const lengthSlider = document.getElementById('lengthSlider');
const depthSlider = document.getElementById('depthSlider');
const resetButton = document.getElementById('resetButton');
const angleValue = document.getElementById('angleValue');
const lengthValue = document.getElementById('lengthValue');
const depthValue = document.getElementById('depthValue');
const stepExplanation = document.getElementById('stepExplanation');
const morandiHues = [30, 60, 120, 180, 210, 240]; 

function drawBranch(x, y, length, angle, depth) {
  if (depth === 0) return;

  const xEnd = x + length * Math.cos(angle);
  const yEnd = y + length * Math.sin(angle);
  const hue = morandiHues[depth % morandiHues.length]; 
  const saturation = 40; // 低饱和度
  const lightness = 70; // 中等亮度

  
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(xEnd, yEnd);
ctx.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  ctx.lineWidth = depth / depthSlider.max * 5 + 1;
  ctx.stroke();

  drawBranch(xEnd, yEnd, length * 0.7, angle - angleSlider.value * Math.PI / 180, depth - 1);
  drawBranch(xEnd, yEnd, length * 0.7, angle + angleSlider.value * Math.PI / 180, depth - 1);
}

function updateFractalTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBranch(canvas.width / 2, canvas.height - 50, lengthSlider.value, -Math.PI / 2, depthSlider.value);
}

function updateExplanation() {
  const depth = depthSlider.value;
  const angle = angleSlider.value;

  let depthExplanation = '';
  let angleExplanation = '';

  if (depth > 1) {
    depthExplanation = `当递归深度为${depth}时，每一层的分支角度依次增减 ${angle}°。每个分支将产生两个新的分支，角度依次递增和递减。`;
  } else {
    depthExplanation = '递归深度为1时，只有根部的树枝，没有进一步的分支。';
  }

  if (angle > 0) {
    angleExplanation = `目前分支角度为${angle}°。在每一层中，分支将从当前角度分别向左和向右偏转 ${angle}°。`;
  } else {
    angleExplanation = '分支角度为0°时，所有分支将保持直线。';
  }

  stepExplanation.innerHTML = `
        <p>观察分形树在不同参数下的递归生成过程。</p>
        <p>${depthExplanation}</p>
        <p>${angleExplanation}</p>
    `;
}

angleSlider.addEventListener('input', () => {
  angleValue.textContent = angleSlider.value;
  updateFractalTree();
  updateExplanation();
});

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
  updateFractalTree();
});

depthSlider.addEventListener('input', () => {
  depthValue.textContent = depthSlider.value;
  updateFractalTree();
  updateExplanation();
});

function resetVisualization() {
  angleSlider.value = 30;
  lengthSlider.value = 100;
  depthSlider.value = 10;
  angleValue.textContent = angleSlider.value;
  lengthValue.textContent = lengthSlider.value;
  depthValue.textContent = depthSlider.value;
  updateFractalTree();
  updateExplanation();
}

resetButton.addEventListener('click', resetVisualization);

updateFractalTree();
updateExplanation();