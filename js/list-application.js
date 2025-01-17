function checkAnswers() {
  var step1 = document.getElementById("step1").value.trim();
  var step2 = document.getElementById("step2").value.trim();
  var step3 = document.getElementById("step3").value.trim();
  var step4 = document.getElementById("step4").value.trim();
  var step5 = document.getElementById("step5").value.trim();
  var step6 = document.getElementById("step6").value.trim();

  var correctAnswers = {
    step1: 'pet_list.append("Banana")',
    step2: 'pet_list.remove("Teddy")',
    step3: 'pop(choice - 1)',
    step4: 'pet_list[3] = "Bobby"',
    step5: 'count(pet_name)',
    step6: 'len(pet_list)'
  };

  function checkAnswer(stepId, correctAnswer, inputValue, feedbackId) {
    var feedbackElement = document.getElementById(feedbackId);
    if (inputValue !== correctAnswer) {
      feedbackElement.innerHTML = `
            <span class='incorrect'>答案错误</span><br>
            <span class='correct-answer'>正确答案：${correctAnswer}</span>
          `;
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
    } else {
      feedbackElement.innerHTML = "<span class='correct'>答案正确</span>";
      feedbackElement.classList.add("correct");
      feedbackElement.classList.remove("incorrect");
    }
  }

  // 检查每一题的答案，并分别显示反馈
  checkAnswer('step1', correctAnswers.step1, step1, 'feedback-step1');
  checkAnswer('step2', correctAnswers.step2, step2, 'feedback-step2');
  checkAnswer('step3', correctAnswers.step3, step3, 'feedback-step3');
  checkAnswer('step4', correctAnswers.step4, step4, 'feedback-step4');
  checkAnswer('step5', correctAnswers.step5, step5, 'feedback-step5');
  checkAnswer('step6', correctAnswers.step6, step6, 'feedback-step6');

  document.getElementById("vcontainer").style.display = "block";
}

