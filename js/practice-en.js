// 侧边导航栏
let nav = document.querySelectorAll(".sidebar li");
function activeLink() {
  nav.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
nav.forEach((item) => item.addEventListener("click", activeLink));


// 枚举算法题目
function submitQuiz() {

  // 清空之前的解析
  document.querySelectorAll('.explanation').forEach(el => el.innerHTML = '');

  // 单选题
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === 'a') {

    document.getElementById('q1').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。枚举算法的核心思想是通过遍历所有可能的解或选项，逐一验证每个解是否符合问题的要求，直到找到符合条件的解或所有可能的解。</p><p>解析：选项B为贪心算法的特征，贪心算法是在每一步选择中都追求当前最优解，而不考虑后续的解。选项C是递归算法的核心思想。递归算法通过函数调用自身，分治问题，逐步简化问题的复杂度。选项D是二分查找算法的特征，二分查找是一个通过不断将搜索范围减半来查找某个元素的算法。</p>`;


  } else {
    document.getElementById('q1').querySelector('.explanation').innerHTML =
    `<p class="incorrect">错误！答案为：A。枚举算法的核心思想是通过遍历所有可能的解或选项，逐一验证每个解是否符合问题的要求，直到找到符合条件的解或所有可能的解。</p><p>解析：选项B为贪心算法的特征，贪心算法是在每一步选择中都追求当前最优解，而不考虑后续的解。选项C是递归算法的核心思想。递归算法通过函数调用自身，分治问题，逐步简化问题的复杂度。选项D是二分查找算法的特征，二分查找是一个通过不断将搜索范围减半来查找某个元素的算法。</p>`;
  }
  document.getElementById('q1').querySelector('.explanation').style.display = 'block';


  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === 'c') {

    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：C。通过枚举从 1 到 100 之间的所有整数，并检查每个数是否能被 3 和 5 整除。枚举算法适用于这种“逐一检查每一个可能解”的情况。</p><p>解析：选项A，适合用二分查找，通过不断地缩小搜索范围来快速定位目标。选项B，适合适合用线性查找算法来解决，逐个检查列表中的每个元素，找到目标元素。选项D，求解一元二次方程的根更适合使用代数方法或求根公式，不需要枚举。</p>`;
  } else {
    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：C。通过枚举从 1 到 100 之间的所有整数，并检查每个数是否能被 3 和 5 整除。枚举算法适用于这种“逐一检查每一个可能解”的情况。</p><p>解析：选项A，适合用二分查找，通过不断地缩小搜索范围来快速定位目标。选项B，适合适合用线性查找算法来解决，逐个检查列表中的每个元素，找到目标元素。选项D，求解一元二次方程的根更适合使用代数方法或求根公式，不需要枚举。</p>`;
  }
 document.getElementById('q2').querySelector('.explanation').style.display = 'block';

  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === 'b') {

    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。</p><p>解析：枚举算法找到一个符合条件的解后，通常不会立即停止，而是继续遍历所有可能的解。直到遍历完所有解后，才能得出最终的最优解。
</p>`;
  } else {
    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B。</p><p>解析：枚举算法找到一个符合条件的解后，通常不会立即停止，而是继续遍历所有可能的解。直到遍历完所有解后，才能得出最终的最优解。</p>`;
  }
  document.getElementById('q3').querySelector('.explanation').style.display = 'block';

  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === 'd') {

    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：D。</p><p>解析：枚举算法一般用于解空间较小或中等的问题，对于大规模数据集，其时间复杂度可能非常高，不适合用于处理大型数据集。</p>`;
  } else {
    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：D。</p><p>解析：枚举算法一般用于解空间较小或中等的问题，对于大规模数据集，其时间复杂度可能非常高，不适合用于处理大型数据集。</p>`;
  }
  document.getElementById('q4').querySelector('.explanation').style.display = 'block';

  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === 'c') {

    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：C。枚举算法通常用于一些可以穷举所有解的场景，但并不适用于所有计算问题，尤其是对于大规模或高维度问题，枚举算法可能会因时间复杂度过高而不适用。</p><p>解析：枚举算法通过穷举所有可能的解，可以保证找到所有可能的解，不会遗漏任何解，从而保证解的完整性。</p>`;
  } else {
    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：C。枚举算法通常用于一些可以穷举所有解的场景，但并不适用于所有计算问题，尤其是对于大规模或高维度问题，枚举算法可能会因时间复杂度过高而不适用。</p><p>解析：枚举算法通过穷举所有可能的解，可以保证找到所有可能的解，不会遗漏任何解，从而保证解的完整性。</p>`;
  }
  document.getElementById('q5').querySelector('.explanation').style.display = 'block';


  // 多选题

  const q6Answers = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(el => el.value);
  if (q6Answers.includes('b') && q6Answers.includes('c') && q6Answers.length === 2) {

    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B、C。</p><p>解析：选项A、图的遍历通过递归或迭代实现，而不是枚举算法。选项D、动态规划通过存储子问题的解来优化计算过程，而不是通过枚举所有解。</p>`;
  } else {
    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B、C。</p><p>解析：选项A、图的遍历通过递归或迭代实现，而不是枚举算法。选项D、动态规划通过存储子问题的解来优化计算过程，而不是通过枚举所有解。</p>`;
  }
  document.getElementById('q6').querySelector('.explanation').style.display = 'block';


  const q7Answers = Array.from(document.querySelectorAll('input[name="q7"]:checked')).map(el => el.value);
  if (q7Answers.includes('a') && q7Answers.includes('b') && q7Answers.includes('c') && q7Answers.length === 3) {

    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、C。</p><p>解析：枚举算法的计算效率通常较低，尤其是当解空间很大时，其时间复杂度会呈指数增长，因此不适用于大规模问题。</p>`;
  } else {
    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、C。</p><p>解析枚举算法的计算效率通常较低，尤其是当解空间很大时，其时间复杂度会呈指数增长，因此不适用于大规模问题。</p>`;
  }
  document.getElementById('q7').querySelector('.explanation').style.display = 'block';


  // 判断题

  const q8 = document.querySelector('input[name="q8"]:checked');
  if (q8 && q8.value === 'false') {

    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：枚举算法的时间复杂度通常是与解空间的大小呈指数或阶乘关系的，而不是线性关系。例如，在排列组合问题中，解空间的大小可能是O(n!)或O(2^n)。线性时间复杂度通常适用于像排序算法这样的算法，但枚举算法通常有较高的时间复杂度。</p>`;
  } else {
    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：枚举算法的时间复杂度通常是与解空间的大小呈指数或阶乘关系的，而不是线性关系。例如，在排列组合问题中，解空间的大小可能是O(n!)或O(2^n)。线性时间复杂度通常适用于像排序算法这样的算法，但枚举算法通常有较高的时间复杂度。</p>`;
  }
  document.getElementById('q8').querySelector('.explanation').style.display = 'block';

  const q9 = document.querySelector('input[name="q9"]:checked');
  if (q9 && q9.value === 'true') {
    
    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：枚举算法的时间复杂度通常与解空间的大小密切相关。解空间越小，算法需要遍历的可能解就越少，执行效率自然越高。相反，解空间越大，枚举算法的执行时间会呈指数级增长，导致效率大幅下降。所以，解空间小意味着算法的执行效率会更高。</p>`;
  } else {
    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：枚举算法的时间复杂度通常与解空间的大小密切相关。解空间越小，算法需要遍历的可能解就越少，执行效率自然越高。相反，解空间越大，枚举算法的执行时间会呈指数级增长，导致效率大幅下降。所以，解空间小意味着算法的执行效率会更高。</p>`;
  }
  document.getElementById('q9').querySelector('.explanation').style.display = 'block';




}
