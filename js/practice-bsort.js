// 侧边导航栏
let nav = document.querySelectorAll(".sidebar li");
function activeLink() {
  nav.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
nav.forEach((item) => item.addEventListener("click", activeLink));


// 冒泡算法题目
function submitQuiz() {

  // 清空之前的解析
  document.querySelectorAll('.explanation').forEach(el => el.innerHTML = '');

  // 单选题
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === 'b') {

    document.getElementById('q1').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。在最坏情况下，数据是逆序的，每次都需要进行大量的交换和比较，因此时间复杂度为O(n²)。</p><p>解析：冒泡排序的核心思想是每次通过相邻元素比较和交换，将一个元素“冒泡”到正确的位置。对于每一轮遍历，都会有一次完整的遍历，这样的比较和交换操作是平方级的。</p>`;


  } else {
    document.getElementById('q1').querySelector('.explanation').innerHTML =
    `<p class="incorrect">错误！答案为：B。在最坏情况下，数据是逆序的，每次都需要进行大量的交换和比较，因此时间复杂度为O(n²)。</p><p>解析：冒泡排序的核心思想是每次通过相邻元素比较和交换，将一个元素“冒泡”到正确的位置。对于每一轮遍历，都会有一次完整的遍历，这样的比较和交换操作是平方级的。</p>`;
  }
  document.getElementById('q1').querySelector('.explanation').style.display = 'block';


  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === 'a') {

    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。</p><p>解析：冒泡排序的核心思想是：通过相邻元素的比较和交换，将最大（或最小）元素逐步“冒泡”到数组的末尾（或开头）。</p><p>冒泡排序是稳定的排序算法，即相同的元素在排序后相对位置保持不变。泡排序的最坏时间复杂度是O(n²)，因此其排序效率较低，尤其在处理大规模数据时，并不适合大规模数据的排序。</p>`;
  } else {
    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A。冒泡排序的核心思想是：通过相邻元素的比较和交换，将最大（或最小）元素逐步“冒泡”到数组的末尾（或开头）。</p><p>解析：冒泡排序是稳定的排序算法，即相同的元素在排序后相对位置保持不变。泡排序的最坏时间复杂度是O(n²)，因此其排序效率较低，尤其在处理大规模数据时，并不适合大规模数据的排序。</p>`;
  }
 document.getElementById('q2').querySelector('.explanation').style.display = 'block';

 
  // 多选题
  const q3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(el => el.value);
  if (q3Answers.includes('a') && q3Answers.includes('b') && q3Answers.includes('c') && q3Answers.length === 3) {

    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、C。</p><p>解析：冒泡排序的最坏时间复杂度是O(n²)，特别是在数据完全逆序的情况下。冒泡排序是稳定的排序算法，相同元素的相对位置保持不变。冒泡排序可以用于任何类型的数据，只要这些数据可以进行大小比较。比如数字、字符串、布尔值等。</p><p>冒泡排序对于大规模数据集的排序不适用，因为它的时间复杂度是O(n²)，效率非常低。对于大数据量的排序，通常使用快速排序、归并排序等更高效的算法。
</p>`;
  } else {
    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、C。冒泡排序的最坏时间复杂度是O(n²)，特别是在数据完全逆序的情况下。冒泡排序是稳定的排序算法，相同元素的相对位置保持不变。冒泡排序可以用于任何类型的数据，只要这些数据可以进行大小比较。比如数字、字符串、布尔值等。</p><p>解析：冒泡排序对于大规模数据集的排序不适用，因为它的时间复杂度是O(n²)，效率非常低。对于大数据量的排序，通常使用快速排序、归并排序等更高效的算法。</p>`;
  }
  document.getElementById('q3').querySelector('.explanation').style.display = 'block';

  const q4Answers = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(el => el.value);
  if (q4Answers.includes('a') && q4Answers.includes('b') && q4Answers.length === 2) {

    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B。当数据量小且不超过100个时，冒泡排序的效率和其他排序算法相差不大，适合使用。如果数据已经部分有序，冒泡排序会有较好的表现，因为它能通过提前结束遍历来节省时间。</p><p>解析：冒泡排序不适合处理复杂的数据类型，尤其是混合数据类型。它通常适用于简单的数据类型，且所有数据类型都需要能够进行比较。当数据量非常大时，冒泡排序的效率较低。对于百万级的数据，通常应使用快速排序、归并排序等更高效的算法。</p>`;
  } else {
    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B。当数据量小且不超过100个时，冒泡排序的效率和其他排序算法相差不大，适合使用。如果数据已经部分有序，冒泡排序会有较好的表现，因为它能通过提前结束遍历来节省时间。</p><p>解析：冒泡排序不适合处理复杂的数据类型，尤其是混合数据类型。它通常适用于简单的数据类型，且所有数据类型都需要能够进行比较。当数据量非常大时，冒泡排序的效率较低。对于百万级的数据，通常应使用快速排序、归并排序等更高效的算法。</p>`;
  }
  document.getElementById('q4').querySelector('.explanation').style.display = 'block';

  const q5Answers = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);
  if (q5Answers.includes('b') && q5Answers.includes('c') && q5Answers.length === 2) {

    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为B、C。</p><p>解析：冒泡排序的时间复杂度为 O(n²)，对于百万级的数据，效率低下，处理起来非常慢。对于完全无序的数据，且要求排序速度很快，冒泡排序显然不合适，因为它的效率较低，通常会选择更高效的排序算法，如快速排序或归并排序。</p>`;
  } else {
    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为B、C。对于已经有序的数组，冒泡排序效率较高，甚至能通过优化提前结束排序。同样，冒泡排序可以有效处理重复元素，虽然效率较低，但它仍能正常工作。</p><p>解析：冒泡排序的时间复杂度为 O(n²)，对于百万级的数据，效率低下，处理起来非常慢。对于完全无序的数据，且要求排序速度很快，冒泡排序显然不合适，因为它的效率较低，通常会选择更高效的排序算法，如快速排序或归并排序。</p>`;
  }
  document.getElementById('q5').querySelector('.explanation').style.display = 'block';


  const q6Answers = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(el => el.value);
  if (q6Answers.includes('a') && q6Answers.includes('c') && q6Answers.length === 2) {

    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、C。</p><p>解析：冒泡排序是稳定的排序算法，与快速排序、归并排序等不同。虽然冒泡排序是原地排序算法，即不需要额外的存储空间，但这并不是其劣势。它的主要劣势在于其时间复杂度较高。</p>`;
  } else {
    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、C。</p><p>解析：冒泡排序是稳定的排序算法，与快速排序、归并排序等不同。虽然冒泡排序是原地排序算法，即不需要额外的存储空间，但这并不是其劣势。它的主要劣势在于其时间复杂度较高。</p>`;
  }
  document.getElementById('q6').querySelector('.explanation').style.display = 'block';


  // 判断题
  const q7 = document.querySelector('input[name="q7"]:checked');
  if (q7 && q7.value === 'false') {

    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：冒泡排序的最坏和平均时间复杂度是 O(n²)，远大于 O(n log n)，因此它的效率远低于快速排序、归并排序等 O(n log n) 的排序算法。</p>`;
  } else {
    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>冒泡排序的最坏和平均时间复杂度是 O(n²)，远大于 O(n log n)，因此它的效率远低于快速排序、归并排序等 O(n log n) 的排序算法。</p>`;
  }
  document.getElementById('q7').querySelector('.explanation').style.display = 'block';

  const q8 = document.querySelector('input[name="q8"]:checked');
  if (q8 && q8.value === 'true') {

    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：冒泡排序是原地排序算法，即它不需要额外的内存空间，只有少量的临时变量，适用于内存较为紧张的环境。</p>`;
  } else {
    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：冒泡排序是原地排序算法，即它不需要额外的内存空间，只有少量的临时变量，适用于内存较为紧张的环境。</p>`;
  }
  document.getElementById('q8').querySelector('.explanation').style.display = 'block';

  

}
