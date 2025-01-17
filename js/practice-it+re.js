// 侧边导航栏
let nav = document.querySelectorAll(".sidebar li");
function activeLink() {
  nav.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
nav.forEach((item) => item.addEventListener("click", activeLink));


// 迭代与递归算法题目
function submitQuiz() {

  // 清空之前的解析
  document.querySelectorAll('.explanation').forEach(el => el.innerHTML = '');

  // 单选题
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === 'b') {

    document.getElementById('q1').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。</p><p>解析：在迭代算法中，循环通常是通过设定一个最大迭代次数来控制其终止，或者是条件判断来决定是否继续迭代。与递归不同，迭代没有递归基准条件，而是通过循环计数器或判断条件来决定何时结束。</p>`;


  } else {
    document.getElementById('q1').querySelector('.explanation').innerHTML =
    `<p class="incorrect">错误！答案为：B。迭代算法需要设置一个迭代次数用于跳出迭代的循环。</p><p>解析：在迭代算法中，循环通常是通过设定一个最大迭代次数来控制其终止，或者是条件判断来决定是否继续迭代。与递归不同，迭代没有递归基准条件，而是通过循环计数器或判断条件来决定何时结束。</p>`;
  }
  document.getElementById('q1').querySelector('.explanation').style.display = 'block';


  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === 'b') {

    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。迭代算法通过循环结构来处理问题，避免了递归算法对系统栈的依赖。</p><p>解析：迭代算法适用于那些具有重复子问题的问题，尤其是当计算的每一步都依赖于前一步的结果时。递归算法通常将一个问题分解为更小的子问题，然后调用函数自身解决，但如果涉及大量递归调用，可能导致栈溢出或性能下降。迭代算法通过显式的循环来避免了递归的开销。</p>`;
  } else {
    document.getElementById('q2').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B。迭代算法通过循环结构来处理问题，避免了递归算法对系统栈的依赖。</p><p>解析：迭代算法适用于那些具有重复子问题的问题，尤其是当计算的每一步都依赖于前一步的结果时。递归算法通常将一个问题分解为更小的子问题，然后调用函数自身解决，但如果涉及大量递归调用，可能导致栈溢出或性能下降。迭代算法通过显式的循环来避免了递归的开销。</p>`;
  }
 document.getElementById('q2').querySelector('.explanation').style.display = 'block';

  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === 'a') {

    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。迭代算法通常通过显式的循环（如 for 或 while）来解决问题，而递归算法是通过函数调用来实现的。</p><p>解析：在递归中，函数自己调用自己来解决子问题，而在迭代中，问题的每一步计算都在当前函数中完成。递归可能会导致栈溢出，尤其是递归深度较大时，而迭代算法则通过显式的循环来避免这一问题。</p>`;
  } else {
    document.getElementById('q3').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B。迭代算法通常通过显式的循环（如 for 或 while）来解决问题，而递归算法是通过函数调用来实现的。</p><p>解析：在递归中，函数自己调用自己来解决子问题，而在迭代中，问题的每一步计算都在当前函数中完成。递归可能会导致栈溢出，尤其是递归深度较大时，而迭代算法则通过显式的循环来避免这一问题。</p>`;
  }
  document.getElementById('q3').querySelector('.explanation').style.display = 'block';

  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === 'c') {

    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：C。迭代算法的优势之一是能够减少栈溢出的风险。</p><p>解析：递归算法在深度较大时，会不断在栈中压入函数调用，容易导致栈溢出。迭代算法通过显式的循环避免了递归调用，降低了栈空间的消耗。虽然递归算法在某些场景下非常直观，但对于大规模问题，迭代算法通常更加稳定。
</p>`;
  } else {
    document.getElementById('q4').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：C。迭代算法的优势之一是能够减少栈溢出的风险。</p><p>解析：递归算法在深度较大时，会不断在栈中压入函数调用，容易导致栈溢出。迭代算法通过显式的循环避免了递归调用，降低了栈空间的消耗。虽然递归算法在某些场景下非常直观，但对于大规模问题，迭代算法通常更加稳定。</p>`;
  }
  document.getElementById('q4').querySelector('.explanation').style.display = 'block';

  const q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === 'b') {

    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B。递归的本质是函数自身调用，而设置终止条件是递归能够停止并返回结果的关键。没有终止条件会导致无限递归，最终引发栈溢出错误。</p><p>解析：递归算法不仅用于数学问题，还能应用在数据结构和算法问题中，比如树的遍历、图的搜索等。递归调用需要在调用栈上保存每次函数调用的状态（包括局部变量和返回地址），所以通常递归算法会占用较多的内存空间。递归和迭代各有适用场景，递归更适合具有分治结构的问题（如快速排序、合并排序），但对于涉及大量重复计算或性能要求高的问题（动态规划），迭代通常更高效。</p>`;
  } else {
    document.getElementById('q5').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B。递归的本质是函数自身调用，而设置终止条件是递归能够停止并返回结果的关键。没有终止条件会导致无限递归，最终引发栈溢出错误。</p><p>解析：递归算法不仅用于数学问题，还能应用在数据结构和算法问题中，比如树的遍历、图的搜索等。递归调用需要在调用栈上保存每次函数调用的状态（包括局部变量和返回地址），所以通常递归算法会占用较多的内存空间。递归和迭代各有适用场景，递归更适合具有分治结构的问题（如快速排序、合并排序），但对于涉及大量重复计算或性能要求高的问题（动态规划），迭代通常更高效。</p>`;
  }
  document.getElementById('q5').querySelector('.explanation').style.display = 'block';

  const q6 = document.querySelector('input[name="q6"]:checked');
  if (q6 && q6.value === 'a') {

    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A。调用栈是保证递归能正常运行的关键。每次函数调用都会将当前函数的上下文信息压入栈顶；当函数返回时，调用栈会弹出栈顶，恢复到上一个函数的上下文。</p><p>解析：函数调用栈帧，用于保存以下信息：1、局部变量；2、返回地址；3、参数：函数调用时传递的参数值；4、执行上下文（记录函数的当前执行状态）。但是调用栈并并不直接优化效率和主动避免重复计算，反而在递归深度过大时可能导致栈溢出。若想要避免重复计算通常需要额外的优化手段，比如“记忆化”或“动态规划”。</p>`;
  } else {
    document.getElementById('q6').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A。调用栈是保证递归能正常运行的关键。每次函数调用都会将当前函数的上下文信息压入栈顶；当函数返回时，调用栈会弹出栈顶，恢复到上一个函数的上下文。</p><p>解析：函数调用栈帧，用于保存以下信息：1、局部变量；2、返回地址；3、参数：函数调用时传递的参数值；4、执行上下文（记录函数的当前执行状态）。但是调用栈并并不直接优化效率和主动避免重复计算，反而在递归深度过大时可能导致栈溢出。若想要避免重复计算通常需要额外的优化手段，比如“记忆化”或“动态规划”。</p>`;
  }
  document.getElementById('q6').querySelector('.explanation').style.display = 'block';

  const q7 = document.querySelector('input[name="q7"]:checked');
  if (q7 && q7.value === 'c') {

    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：C。递归算法未必比迭代算法效率更高。对于很多问题（如计算斐波那契数列、阶乘等），迭代算法通常在时间和空间效率上更优。递归算法在深度较大时还可能导致栈溢出。</p><p>解析：选项A，这是递归和迭代的本质区别。选项B，在具有递归性质的问题（如斐波那契数列、二叉树遍历）中，递归实现往往更加简洁和符合直觉。选项D，递归算法最适合解决具有递归结构的问题，比如分治、树形问题等。</p>`;
  } else {
    document.getElementById('q7').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：C。递归算法未必比迭代算法效率更高。对于很多问题（如计算斐波那契数列、阶乘等），迭代算法通常在时间和空间效率上更优。递归算法在深度较大时还可能导致栈溢出。</p><p>解析：选项A，这是递归和迭代的本质区别。选项B，在具有递归性质的问题（如斐波那契数列、二叉树遍历）中，递归实现往往更加简洁和符合直觉。选项D，递归算法最适合解决具有递归结构的问题，比如分治、树形问题等。</p>`;
  }
  document.getElementById('q7').querySelector('.explanation').style.display = 'block';

  // 多选题
  const q8Answers = Array.from(document.querySelectorAll('input[name="q8"]:checked')).map(el => el.value);
  if (q8Answers.includes('a') && q8Answers.includes('b') && q8Answers.includes('d') && q8Answers.length === 3) {

    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、D。迭代算法不像递归算法那样需要额外的栈空间来存储中间状态，因此内存消耗相对较低。迭代算法的执行过程非常明确，可以通过分析每次循环的条件和计算过程，来优化算法。而递归算法通常涉及到递归树，理解和优化较为复杂。</p><p>解析：迭代算法更适合具有规律性、线性或可分块解决的问题，而非常规问题可能需要递归、分治等方式更优雅地解决。迭代是通过重复执行某个操作来解决问题的算法。它通过不断地重复某个过程，直到满足某个条件为止。</p>`;
  } else {
    document.getElementById('q8').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、D。迭代算法不像递归算法那样需要额外的栈空间来存储中间状态，因此内存消耗相对较低。迭代算法的执行过程非常明确，可以通过分析每次循环的条件和计算过程，来优化算法。而递归算法通常涉及到递归树，理解和优化较为复杂。</p><p>解析：迭代算法更适合具有规律性、线性或可分块解决的问题，而非常规问题可能需要递归、分治等方式更优雅地解决。迭代是通过重复执行某个操作来解决问题的算法。它通过不断地重复某个过程，直到满足某个条件为止。</p>`;
  }
  document.getElementById('q8').querySelector('.explanation').style.display = 'block';


  const q9Answers = Array.from(document.querySelectorAll('input[name="q9"]:checked')).map(el => el.value);
  if (q9Answers.includes('b') && q9Answers.includes('c') && q9Answers.includes('d') && q9Answers.length === 3) {

    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：B、C、D。问题没有明显的重复子问题并不会显著降低迭代算法的效率，反而可能会简化问题的求解。</p><p>解析：选项B、如果每个子问题都需要较深的计算，而迭代算法需要显式管理复杂的状态，则效率可能较低。选项C、例如在处理树、图等复杂数据结构时，递归算法通常更自然且简洁，而迭代需要显式管理栈或队列等辅助结构，可能会降低效率。选项D、如果算法中存在大量的冗余计算，迭代算法未必能有效解决这个问题，而动态规划或记忆化递归可以通过缓存结果优化计算效率。</p>`;
  } else {
    document.getElementById('q9').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：B、C、D。问题没有明显的重复子问题并不会显著降低迭代算法的效率，反而可能会简化问题的求解。</p><p>解析：选项B、如果每个子问题都需要较深的计算，而迭代算法需要显式管理复杂的状态，则效率可能较低。选项C、例如在处理树、图等复杂数据结构时，递归算法通常更自然且简洁，而迭代需要显式管理栈或队列等辅助结构，可能会降低效率。选项D、如果算法中存在大量的冗余计算，迭代算法未必能有效解决这个问题，而动态规划或记忆化递归可以通过缓存结果优化计算效率。</p>`;
  }
  document.getElementById('q9').querySelector('.explanation').style.display = 'block';

  const q10Answers = Array.from(document.querySelectorAll('input[name="q10"]:checked')).map(el => el.value);
  if (q10Answers.includes('a') && q10Answers.includes('b') && q10Answers.includes('c') && q10Answers.includes('d') && q10Answers.length === 4) {

    document.getElementById('q10').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、C、D。</p><p>解析：递归算法的核心就是函数通过调用自身来解决问题的不同子问题，而其调用每进入一次函数，就会在调用栈上创建一个新的栈帧，保存该调用的局部变量、返回地址等。随着递归深度的增加，调用栈的使用也随之增加。如果递归深度过大，就会出现栈溢出的风险。若没有适当的终止条件（边界条件），将会导致无限递归，最终导致栈溢出。因此，设置明确的终止条件是递归算法的必要部分。</p>`;
  } else {
    document.getElementById('q10').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、C、D。</p><p>解析：递归算法的核心就是函数通过调用自身来解决问题的不同子问题，而其调用每进入一次函数，就会在调用栈上创建一个新的栈帧，保存该调用的局部变量、返回地址等。随着递归深度的增加，调用栈的使用也随之增加。如果递归深度过大，就会出现栈溢出的风险。若没有适当的终止条件（边界条件），将会导致无限递归，最终导致栈溢出。因此，设置明确的终止条件是递归算法的必要部分。</p>`;
  }
  document.getElementById('q10').querySelector('.explanation').style.display = 'block';

  const q11Answers = Array.from(document.querySelectorAll('input[name="q11"]:checked')).map(el => el.value);
  if (q11Answers.includes('a') && q11Answers.includes('b') && q11Answers.includes('c') && q11Answers.includes('d') && q10Answers.length === 4) {

    document.getElementById('q11').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！答案为：A、B、C、D。</p><p>解析：选项A、没有终止条件的递归会进入无限循环，导致程序永远无法结束，栈帧不断被创建，最终耗尽系统内存。选项B、未优化的递归（如斐波那契数列的简单递归实现）会对同一子问题多次重复计算，导致指数级的时间复杂度。选项C、递归的每次调用都需要一个栈帧，当递归深度过大时（如处理非常大的输入规模），调用栈可能耗尽内存并引发栈溢出错误。选项D、没有记忆化（或动态规划）优化的递归会浪费大量时间在重复计算上。通过记忆化，可以缓存子问题的计算结果，从而避免重复计算，提高效率。</p>`;
  } else {
    document.getElementById('q11').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！答案为：A、B、C、D。</p><p>解析：选项A、没有终止条件的递归会进入无限循环，导致程序永远无法结束，栈帧不断被创建，最终耗尽系统内存。选项B、未优化的递归（如斐波那契数列的简单递归实现）会对同一子问题多次重复计算，导致指数级的时间复杂度。选项C、递归的每次调用都需要一个栈帧，当递归深度过大时（如处理非常大的输入规模），调用栈可能耗尽内存并引发栈溢出错误。选项D、没有记忆化（或动态规划）优化的递归会浪费大量时间在重复计算上。通过记忆化，可以缓存子问题的计算结果，从而避免重复计算，提高效率。</p>`;
  }
  document.getElementById('q11').querySelector('.explanation').style.display = 'block';


  // 判断题
  const q12 = document.querySelector('input[name="q12"]:checked');
  if (q12 && q12.value === 'false') {

    document.getElementById('q12').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：在递归算法中，每次递归调用都会生成一个新的栈帧。这些栈帧用于存储局部变量、参数和返回地址等信息。当递归调用返回时，栈帧会被弹出（销毁），控制返回到上一层递归。若每次递归调用都使用同一个栈帧，这将导致数据覆盖和程序崩溃，因此不同层级的递归调用需要不同的存储空间来维护其局部变量和返回地址。</p>`;
  } else {
    document.getElementById('q12').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：在递归算法中，每次递归调用都会生成一个新的栈帧。这些栈帧用于存储局部变量、参数和返回地址等信息。当递归调用返回时，栈帧会被弹出（销毁），控制返回到上一层递归。若每次递归调用都使用同一个栈帧，这将导致数据覆盖和程序崩溃，因此不同层级的递归调用需要不同的存储空间来维护其局部变量和返回地址。</p>`;
  }
  document.getElementById('q12').querySelector('.explanation').style.display = 'block';

  const q13 = document.querySelector('input[name="q8"]:checked');
  if (q13 && q13.value === 'true') {

    document.getElementById('q13').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：递归算法每次调用都会创建一个新的栈帧，导致内存占用随着递归深度的增加而增加。迭代算法则使用固定的内存空间（循环变量和少量局部变量），不随数据集大小或迭代次数的增加而显著增加内存占用。</p>`;
  } else {
    document.getElementById('q13').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：递归算法每次调用都会创建一个新的栈帧，导致内存占用随着递归深度的增加而增加。迭代算法则使用固定的内存空间（循环变量和少量局部变量），不随数据集大小或迭代次数的增加而显著增加内存占用。</p>`;
  }
  document.getElementById('q13').querySelector('.explanation').style.display = 'block';

  const q14 = document.querySelector('input[name="q14"]:checked');
  if (q14 && q14.value === 'true') {
    
    document.getElementById('q14').querySelector('.explanation').innerHTML =
      `<p class="correct">正确！</p><p>解析：函数调用是有开销的，包括参数传递、栈帧创建和销毁等。对于大型数据集，递归算法可能会因为大量的函数调用而导致性能下降。迭代算法通过循环结构（如for、while）来重复执行代码块，不需要额外的函数调用开销。在处理大型数据集时，这通常会导致更高的效率。
</p>`;
  } else {
    document.getElementById('q14').querySelector('.explanation').innerHTML =
      `<p class="incorrect">错误！</p><p>解析：函数调用是有开销的，包括参数传递、栈帧创建和销毁等。对于大型数据集，递归算法可能会因为大量的函数调用而导致性能下降。迭代算法通过循环结构（如for、while）来重复执行代码块，不需要额外的函数调用开销。在处理大型数据集时，这通常会导致更高的效率。
</p>`;
  }
  document.getElementById('q14').querySelector('.explanation').style.display = 'block';




}
