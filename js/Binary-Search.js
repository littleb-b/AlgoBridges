let array = [];
let low, high, target;
let stepDescriptions = [];
let stepIndex = 0;
let searchInterval;
let paused = false;
let steps = [];

function createArrayElements() {
  const arrayContainer = document.getElementById('array');
  arrayContainer.innerHTML = '';
  array.forEach((num, index) => {
    const element = document.createElement('div');
    element.classList.add('element');
    element.id = 'element-' + index;
    element.innerText = num;

    const indexLabel = document.createElement('div');
    indexLabel.classList.add('index-label');
    indexLabel.innerText = index;
    element.appendChild(indexLabel);

    const pointerLabel = document.createElement('div');
    pointerLabel.classList.add('pointer-label');
    pointerLabel.id = 'pointer-' + index;
    element.appendChild(pointerLabel);


    element.onclick = () => checkElement(index);
    arrayContainer.appendChild(element);
  });
}

function checkElement(index) {
  const num = array[index];
  const description = document.getElementById('description');
  if (num === target) {
    document.getElementById('element-' + index).classList.add('target');
    description.innerText = `元素 ${num} 是目标值 ${target}。`;
  } else {
    document.getElementById('element-' + index).classList.add('not-found');
    description.innerText = `元素 ${num} 不是目标值 ${target}。`;
  }
}

function highlightRange(low, high) {
  for (let i = 0; i < array.length; i++) {
    const element = document.getElementById('element-' + i);
    const indexLabel = element.querySelector('.index-label');
    const pointerLabel = document.getElementById('pointer-' + i);

    pointerLabel.innerText = '';

    if (i === low) {
      pointerLabel.innerText = 'low';
      pointerLabel.classList.add('low-pointer');
    }
    if (i === (Math.floor((low + high) / 2))) {
      pointerLabel.innerText = 'mid';
      pointerLabel.classList.add('mid-pointer');
      element.classList.add('mid-highlight');
    }
    if (i === high) {
      pointerLabel.innerText = 'high';
      pointerLabel.classList.add('high-pointer');
    }

    if (i >= low && i <= high) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
      indexLabel.classList.add('index-style')
    }
  }
}



function markFound(index) {
  document.getElementById('element-' + index).classList.add('found');
}

function markNotFound() {
  for (let i = 0; i < array.length; i++) {
    const element = document.getElementById('element-' + i);
    element.classList.add('not-found');
  }
}

async function startSearch() {
  array = document.getElementById('array-input').value.split(',').map(num => parseInt(num.trim()));
  low = 0;
  high = array.length - 1;
  target = parseInt(document.getElementById('target').value);

  if (array.length === 0 || isNaN(target)) {
    alert('请输入有效的数组和目标值。');
    return;
  }

  createArrayElements();
  highlightRange(low, high);
  stepDescriptions = [];
  steps = [];
  paused = false;
  await binarySearch();
  displaySteps();
  stepIndex = steps.length - 1;
  displayStep(stepIndex);
}

async function binarySearch() {
  const description = document.getElementById('description');
  let totalSteps = Math.log2(array.length);
  let stepCount = 0;

  while (low <= high) {
    if (paused) {
      await new Promise(resolve => {
        searchInterval = setInterval(() => {
          if (!paused) {
            clearInterval(searchInterval);
            resolve();
          }
        }, 100);
      });
    }

    const mid = Math.floor((low + high) / 2);
    const midElement = document.getElementById('element-' + mid);

    highlightRange(low, high);

    // 更新步骤描述
    stepDescriptions.push(`当前搜索范围: 左指针: ${array[low]}(索引 ${low}) -> 右指针: ${array[high]} (索引 ${high})\n
    中间元素: ${array[mid]} (索引 ${mid})\n
    比较中间元素 ${array[mid]} 和目标值 ${target}。`);


    steps.push({ low, high, mid });

    await sleep(1000);
    stepCount++;

    if (array[mid] === target) {
      midElement.classList.add('target');
      stepDescriptions.push(`当前搜索范围: 左指针: ${array[low]} (索引 ${low}) -> 右指针: ${array[high]} (索引 ${high})\n
        中间元素: ${array[mid]} (索引 ${mid})\n
        比较中间元素 ${array[mid]} 和目标值 ${target}。\n
        找到目标值 ${target}，目标值位于索引 ${mid}。\n
        结束搜索。`);
      steps.push({ low, high, mid }); // 添加最后一步到 steps 数组
      markFound(mid);
      description.innerText = `找到目标值：${target}，其索引号为 ${mid}。`;
      return;
    } else if (array[mid] < target) {
      low = mid + 1;
      stepDescriptions.push(`目标值 ${target} 大于中间元素 ${array[mid]}。\n
      移动左指针到 ${array[low]} (索引 ${low})，下一步搜索范围为 ${array[low]} ~ ${array[high]} (索引 ${low} 到 ${high})。`);
    } else {
      high = mid - 1;
      stepDescriptions.push(`目标值 ${target} 小于中间元素 ${array[mid]}。\n
      移动右指针到 ${array[high]} (索引 ${high})，下一步搜索范围为 ${array[low]} ~ ${array[high]} (索引 ${low} 到 ${high})。`);
    }

    steps.push({ low, high, mid });

    await sleep(700);
  }

  description.innerText = `目标值 ${target} 不在数组中。`;
  markNotFound();
  stepDescriptions.push(`搜索完成，但未找到目标值 ${target}。\n
  结束搜索。`);
}

function displaySteps() {
  const stepContainer = document.getElementById('step');
  stepContainer.innerHTML = '';
  stepDescriptions.forEach((desc, index) => {
    const div = document.createElement('div');
    div.classList.add('step-item');
    div.innerText = `${index + 1}. ${desc}`;
    stepContainer.appendChild(div);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pauseSearch() {
  paused = true;
}

function resumeSearch() {
  paused = false;
}

function prevStep() {
  if (stepIndex > 0) {
    stepIndex--;
    displayStep(stepIndex);
  }
}

function nextStep() {
  if (stepIndex < steps.length - 1) {
    stepIndex++;
    displayStep(stepIndex);
  }
}

function displayStep(index) {
  if (index < 0 || index >= steps.length) return;

  const { low, high, mid } = steps[index];
  highlightRange(low, high);
  document.getElementById('element-' + mid).classList.add('current');
  document.getElementById('step').innerText = `${index + 1}. ${stepDescriptions[index]}`;
}

createArrayElements();

// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`def binary_search(arr, target):
    # 初始化 low 和 high 为数组的起始和结束索引
    low = 0
    high = len(arr) - 1
    
    while low <= high:            # 当 low 小于或等于 high 时，继续搜索   
        mid = (low + high) // 2   # 计算中间索引 mid
        if arr[mid] == target:    # 检查中间值是否等于目标值          
            return mid            # 找到目标值，返回其索引      
        elif arr[mid] < target:   # 如果中间值小于目标值，忽略左半部分
            low = mid + 1
        else:                     # 如果中间值大于目标值，忽略右半部分
            high = mid - 1
    return -1                     # 未找到目标值，返回 -1`);
