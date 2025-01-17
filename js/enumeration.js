
// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`def find_even_num():                   #自定义函数
    evens = []                         #创建空列表，用于存储所有的偶数
    for i in range(1, 101):            # 枚举1到100之间的数字
        if i % 2 == 0:                 # 如果这个数字是偶数
            evens.append(i)            #将偶数添加到列表evens中
    return evens                       #返回列表evens

# 调用函数
even_num = find_even_num()             # 调用find_even_num函数并保存结果
print("1到100之间的所有偶数:", even_num)`);

// 可视化部分
const material = [
  { name: '铅笔', price: 1 },
  { name: '橡皮擦', price: 2 },
  { name: '签字笔', price: 3 },
  { name: '修正液', price: 4 }
];

let combinations = [];
let index = 0;
let targetSum = 0;

function generateCombinations() {
  targetSum = parseInt(document.getElementById('target-sum').value);

  if (isNaN(targetSum) || targetSum <= 0) {
    alert("请输入有效的目标金额。");
    return;
  }

  combinations = [];
  const totalCombinations = 1 << material.length;

  for (let i = 0; i < totalCombinations; i++) {
    const combination = [];
    let sum = 0;
    for (let j = 0; j < material.length; j++) {
      if (i & (1 << j)) {
        combination.push(material[j].name);
        sum += material[j].price;
      }
    }
    combinations.push({ text: `{${combination.join(', ')}} （总计：¥${sum}）`, sum });
  }

  index = 0;
  document.getElementById('valid-container').innerHTML = '<h2>有效组合</h2>';
  document.getElementById('invalid-container').innerHTML = '<h2>无效组合</h2>';
  document.getElementById('comparison-text').textContent = '正在生成组合...';
  document.getElementById('next-btn').disabled = false;
  showCombination();
}

function showCombination() {
  const validContainer = document.getElementById('valid-container');
  const invalidContainer = document.getElementById('invalid-container');
  const comparisonText = document.getElementById('comparison-text');

  if (index < combinations.length) {
    const combination = combinations[index];
    const div = document.createElement('div');
    div.className = 'subset';
    div.textContent = combination.text;

    if (combination.sum === targetSum) {
      div.classList.add('en-highlight');
      validContainer.appendChild(div);
    } else {
      div.classList.add('normal');
      invalidContainer.appendChild(div);
    }
  } else {
    document.getElementById('next-btn').disabled = true;
    comparisonText.textContent = '所有组合已检查完毕。';
  }
}

function nextCombination() {
  index++;
  if (index < combinations.length) {
    showCombination();
  } else {
    document.getElementById('next-btn').disabled = true;
    document.getElementById('comparison-text').textContent = '所有组合已检查完毕。';
  }
}

function reset() {
  document.getElementById('target-sum').value = '';
  document.getElementById('valid-container').innerHTML = '<h2>有效组合</h2>';
  document.getElementById('invalid-container').innerHTML = '<h2>无效组合</h2>';
  document.getElementById('comparison-text').textContent = '';
  combinations = [];
  index = 0;
  document.getElementById('next-btn').disabled = true;
}