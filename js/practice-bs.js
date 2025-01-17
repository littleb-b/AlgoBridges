// 侧边导航栏
let nav = document.querySelectorAll(".sidebar li");
function activeLink() {
  nav.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
nav.forEach((item) => item.addEventListener("click", activeLink));


// 二分查找算法题目
function submitQuiz() {

  // 清空之前的解析
  document.querySelectorAll('.explanation').forEach(el => el.innerHTML = '');

  // 单选题
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === 'a') {

    document.getElementById('q1').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。</p><p>解析：二分查找算法依赖于每次将查找范围分为两半，从而逐步排除不可能的部分。如果序列是无序的，就无法保证每次对中间元素的判断都是正确的。因此，二分查找要求数据必须是排序过的（无论是升序还是降序）。</p>`;


  } else {
    document.getElementById('q1').querySelector('.explanation').innerHTML =
    `<p class="incorrect">错误！答案为：A。二分查找算法只能应用于已排序的序列。</p><p>解析：二分查找算法依赖于每次将查找范围分为两半，从而逐步排除不可能的部分。如果序列是无序的，就无法保证每次对中间元素的判断都是正确的。因此，二分查找要求数据必须是排序过的（无论是升序还是降序）。</p>`;
  }
  document.getElementById('q1').querySelector('.explanation').style.display = 'block';


  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === 'b') {

    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。</p><p>解析：二分查找通过每次将查找区间分为两半来减少问题的规模，因此它的时间复杂度是 O(log n)。假设你有一个长度为n的序列，经过每一次的比较，查找区间的大小将减半。因此，最多需要进行 log₂n 次操作来找到目标元素。</p>`;
  } else {
    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B。二分查找算法时间复杂度是 O(log n)。</p><p>解析：二分查找通过每次将查找区间分为两半来减少问题的规模，因此它的时间复杂度是 O(log n)。假设有一个长度为n的序列，经过每一次的比较，查找区间的大小将减半。因此，最多需要进行 log₂n 次操作来找到目标元素。</p>`;
  }
 document.getElementById('q2').querySelector('.explanation').style.display = 'block';

  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === 'a') {

    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。</p><p>解析：采用递归方式，空间复杂度是 O(log n)，因为每次递归调用都会占用栈空间。而对于非递归实现，空间复杂度为 O(1)。</p>`;
  } else {
    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A。对于非递归方式实现的二分查找的空间复杂度是 O(1)。</p><p>解析：采用递归方式，空间复杂度是 O(log n)，因为每次递归调用都会占用栈空间。而对于非递归实现，空间复杂度为 O(1)。</p>`;
  }
  document.getElementById('q3').querySelector('.explanation').style.display = 'block';

  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === 'a') {

    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。</p><p>解析：二分查找的时间复杂度为 O(log n)，而线性查找则是 O(n)。因此，当数据量很大时，二分查找的效率比线性查找要高得多。例如，如果你有一个包含1000个元素的有序数组，二分查找只需要最多进行 log₂1000 ≈ 10 次比较，而线性查找则需要最多1000次比较。这个差异在数据量更大时会更加显著。
</p>`;
  } else {
    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A。二分查找相对于线性查找最大的优势是它的效率。</p><p>解析：二分查找的时间复杂度为 O(log n)，而线性查找则是 O(n)。因此，当数据量很大时，二分查找的效率比线性查找要高得多。例如，如果你有一个包含1000个元素的有序数组，二分查找只需要最多进行 log₂1000 ≈ 10 次比较，而线性查找则需要最多1000次比较。这个差异在数据量更大时会更加显著。</p>`;
  }
  document.getElementById('q4').querySelector('.explanation').style.display = 'block';

  // 多选题
  const q5Answers = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);
  if (q5Answers.includes('a') && q5Answers.includes('b') && q5Answers.includes('d') && q5Answers.length === 3) {

    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、D。</p><p>解析：二分查找不适用于链表，因为链表的访问速度是线性的，不像数组那样能够通过下标直接访问中间元素。</p><p>二分查找只能应用于已排序的数组，其时间复杂度为 O(log n)，若采用递归方式，二分查找算法的空间复杂度是 O(log n)。而对于非递归实现，空间复杂度为 O(1)。</p>`;
  } else {
    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、D。二分查找只能应用于已排序的数组，其时间复杂度为 O(log n)，若采用递归方式，二分查找算法的空间复杂度是 O(log n)。而对于非递归实现，空间复杂度为 O(1)。</p><p>解析：二分查找不适用于链表，因为链表的访问速度是线性的，不像数组那样能够通过下标直接访问中间元素。</p>`;
  }
  document.getElementById('q5').querySelector('.explanation').style.display = 'block';


  const q6Answers = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(el => el.value);
  if (q6Answers.includes('a') && q6Answers.includes('b') && q6Answers.includes('c') && q6Answers.length === 3) {

    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、C。</p><p>解析：“选项D、每次查找都减少一个元素。”是不正确的，因为二分查找并不是直接删除元素，而是缩小查找区间。</p>`;
  } else {
    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、C。</p><p>解析：“选项D、每次查找都减少一个元素。”是不正确的，因为二分查找并不是直接删除元素，而是缩小查找区间。</p>`;
  }
  document.getElementById('q6').querySelector('.explanation').style.display = 'block';


  // 判断题
  const q7 = document.querySelector('input[name="q7"]:checked');
  if (q7 && q7.value === 'true') {

    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：二分查找只能在已排序的序列中应用。</p>`;
  } else {
    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：二分查找只能在已排序的序列中应用。</p>`;
  }
  document.getElementById('q7').querySelector('.explanation').style.display = 'block';

  const q8 = document.querySelector('input[name="q8"]:checked');
  if (q8 && q8.value === 'false') {

    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：二分查找的平均查找次数是 O(log n)，而不是 O(n)。这是因为在每次查找过程中，查找区间都会减半。无论你是找到目标元素，还是没有找到目标元素，每一步都将问题的规模减少一半。因此，时间复杂度为 O(log n)，而不是 O(n)。</p>`;
  } else {
    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：二分查找的平均查找次数是 O(log n)，而不是 O(n)。这是因为在每次查找过程中，查找区间都会减半。无论你是找到目标元素，还是没有找到目标元素，每一步都将问题的规模减少一半。因此，时间复杂度为 O(log n)，而不是 O(n)。</p>`;
  }
  document.getElementById('q8').querySelector('.explanation').style.display = 'block';

  const q9 = document.querySelector('input[name="q9"]:checked');
  if (q9 && q9.value === 'true') {
    
    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：二分查找可以通过递归来实现。每次递归调用时，都将查找范围缩小为原来的一半，并通过与中间元素的比较决定接下来的查找方向。递归版的二分查找具有简洁的代码结构，但也有可能因为栈深度过深而造成性能问题。除递归方式外，二分查找还可以通过迭代实现。
</p>`;
  } else {
    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：二分查找可以通过递归来实现。每次递归调用时，都将查找范围缩小为原来的一半，并通过与中间元素的比较决定接下来的查找方向。递归版的二分查找具有简洁的代码结构，但也有可能因为栈深度过深而造成性能问题。除递归方式外，二分查找还可以通过迭代实现。
</p>`;
  }
  document.getElementById('q9').querySelector('.explanation').style.display = 'block';




}
