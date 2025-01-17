// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`arr = [5, 2, 4, 3, 1]
for i in range(len(arr)):
    for j in range(len(arr) - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
print(arr)`);

//可视化部分
const arrayContainer = document.getElementById('arrayContainer');
const currentComparison = document.getElementById('currentComparison');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const resetButton = document.getElementById('reset');
const arrayInput = document.getElementById('arrayInput');
const setArrayButton = document.getElementById('setArray');

let defaultArray = [5, 3, 8, 6, 2]; // 默认数组
let array = [...defaultArray]; // 当前操作的数组
let i = 0, j = 0, score = 0;
let maxScore = 10; // 满分设置
let totalComparisons = (defaultArray.length * (defaultArray.length - 1)) / 2; // 计算总比较次数

// 初始化柱状图
function initArray() {
  arrayContainer.innerHTML = '';
  array.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 20}px`;
    bar.textContent = value;
    arrayContainer.appendChild(bar);
  });
}

// 更新当前比较状态
function updateComparison() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.remove('active')); // 清除之前的高亮

  if (i < array.length - 1) {
    bars[j].classList.add('active');
    bars[j + 1].classList.add('active');
    currentComparison.textContent = `当前比较：数字 ${array[j]} 和数字 ${array[j + 1]}`;
  } else {
    currentComparison.textContent = '排序完成！🎉';
    yesButton.disabled = true;
    noButton.disabled = true;
  }
}

// 检查用户的猜测
function checkGuess(guess) {
  const bars = document.querySelectorAll('.bar');

  if (i >= array.length - 1) {
    feedback.textContent = '排序完成！🎉';
    return;
  }

  const needsSwap = array[j] > array[j + 1];

  if ((needsSwap && guess === 'yes') || (!needsSwap && guess === 'no')) {
    score += maxScore / totalComparisons; // 正确时按比例加分
    feedback.textContent = `正确！${array[j]} 和 ${array[j + 1]} ${needsSwap ? '需要交换' : '不需要交换'}`;
  } else {
    feedback.textContent = `错误！${array[j]} 和 ${array[j + 1]} ${needsSwap ? '需要交换' : '不需要交换'}`;
  }

  if (needsSwap) {
    [array[j], array[j + 1]] = [array[j + 1], array[j]];
    bars[j].style.height = `${array[j] * 20}px`;
    bars[j + 1].style.height = `${array[j + 1] * 20}px`;
    bars[j].textContent = array[j];
    bars[j + 1].textContent = array[j + 1];
  }

  j++;
  if (j >= array.length - 1 - i) {
    j = 0;
    i++;
  }

  scoreDisplay.textContent = `得分（满分10分）：${score.toFixed(0)}`;
  updateComparison();
}

// 设置自定义数组
function setCustomArray() {
  const input = arrayInput.value.trim();
  if (!input) return;

  const newArray = input.split(',').map(Number);
  if (newArray.some(isNaN)) {
    feedback.textContent = '输入无效，请输入有效的数字数组！';
    return;
  }

  defaultArray = [...newArray]; // 更新默认数组为用户输入的新数组
  array = [...defaultArray];
  totalComparisons = (defaultArray.length * (defaultArray.length - 1)) / 2; // 重新计算总比较次数
  reset();
}

// 初始化和绑定事件
function init() {
  initArray();
  updateComparison();

  yesButton.onclick = () => checkGuess('yes');
  noButton.onclick = () => checkGuess('no');
  resetButton.onclick = reset;
  setArrayButton.onclick = setCustomArray;
}

// 重置游戏
function reset() {
  i = 0;
  j = 0;
  score = 0;
  array = [...defaultArray]; // 恢复默认数组
  initArray();
  updateComparison();
  feedback.textContent = '';
  scoreDisplay.textContent = '得分(满分10分)：0';
  yesButton.disabled = false;
  noButton.disabled = false;
}

init();

