
function accessElement() {
  const index = parseInt(document.getElementById('accessIndex').value, 10);
  const numbers = [1, 2, 3, 4];
  if (index >= 0 && index < numbers.length) {
    document.getElementById('accessResult').innerText = `你访问的元素是: ${numbers[index]}`;
  } else {
    document.getElementById('accessResult').innerText = '索引超出范围。';
  }
}

function modifyElement() {
  const index = parseInt(document.getElementById('modifyIndex').value, 10);
  const newValue = document.getElementById('newValue').value;
  let fruits = ["apple", "banana", "cherry"];
  if (index >= 0 && index < fruits.length) {
    fruits[index] = newValue;
    document.getElementById('modifyResult').innerText = `修改后的列表是: ${JSON.stringify(fruits)}`;
  } else {
    document.getElementById('modifyResult').innerText = '索引超出范围。';
  }
}

function addElement() {
  let numbers = [1, 2, 3,5,9];
  numbers.push(7);
  document.getElementById('addResult').innerText = `添加元素后的列表是: ${JSON.stringify(numbers)}`;
}

function deleteElement() {
  const value = document.getElementById('deleteElement').value;
  let numbers = [1, 2, 3];
  const index = numbers.indexOf(parseInt(value, 10));
  if (index !== -1) {
    numbers.splice(index, 1);
    document.getElementById('deleteResult').innerText = `删除元素后的列表是: ${JSON.stringify(numbers)}`;
  } else {
    document.getElementById('deleteResult').innerText = '元素未找到。';
  }
}

function findElement() {
  const value = document.getElementById('findElement').value;
  let numbers = [1, 4, 9, 12];
  const index = numbers.indexOf(parseInt(value, 10));
  if (index !== -1) {
    document.getElementById('findResult').innerText = `元素 ${value} 的索引是: ${index}`;
  } else {
    document.getElementById('findResult').innerText = '元素未找到。';
  }
}

function countElement() {
  const value = document.getElementById('countElement').value;
  let numbers = [1, 2, 2, 3, 2, 3, 4];
  const count = numbers.filter(num => num == value).length;
  document.getElementById('countResult').innerText = `元素 ${value} 出现的次数是: ${count}`;
}

function sortList() {
  let numbers = [3, 1, 2, 10, 7, 4];
  numbers.sort((a, b) => a - b);
  document.getElementById('sortResult').innerText = `排序后的列表是: ${JSON.stringify(numbers)}`;
}

function reverseList() {
  let numbers = [1, 2, 3];
  numbers.reverse();
  document.getElementById('reverseResult').innerText = `反转后的列表是: ${JSON.stringify(numbers)}`;
}

function mergeLists() {
  let list1 = [1, 2, "信息"];
  let list2 = [3, 4, "技术"];
  list1 = list1.concat(list2);
  document.getElementById('mergeResult').innerText = `合并后的列表是: ${JSON.stringify(list1)}`;
}

function sliceList() {
  const range = document.getElementById('sliceRange').value.split(',').map(num => parseInt(num.trim(), 10));
  const numbers = [10, 20, 30, 40, 50];
  const sliced = numbers.slice(range[0], range[1]);
  document.getElementById('sliceResult').innerText = `切片结果是: ${JSON.stringify(sliced)}`;
}

