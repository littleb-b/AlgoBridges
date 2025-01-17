// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`def hanoi(n, a, b, c):
    if n == 1:
        print(a, '-->', c,end ="；") 
    else:
        hanoi(n - 1, a, c, b) 
        print(a, '-->', c,end ="；") 
        hanoi(n - 1, b, a, c) 
# 调用 
hanoi(3, 'A', 'B', 'C')
#输出 A --> C；A --> B；C --> B；A --> C；B --> A；B --> C；A --> C；`);

//可视化部分
$(document).ready(function () {
  var towers = [[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]],
    moves = 0,
    discs = null,
    hold = null;
  function clear() {
    towers[0][1].empty();
    towers[1][1].empty();
    towers[2][1].empty();
  }

  function drawdiscs() {
    clear();
    for (var i = 0; i < 3; i++) {
      if (!jQuery.isEmptyObject(towers[i][0])) {
        for (var j = 0; j < towers[i][0].length; j++) {
          towers[i][1].append(
            $(
              "<li id='disc" +
              towers[i][0][j] +
              "' value='" +
              towers[i][0][j] +
              "'></li>"
            )
          );
        }
      }
    }
  }

  function init() {
    clear();
    towers = [[[], $(".line1")], [[], $(".line2")], [[], $(".line3")]];
    discs = document.getElementById("box").value;
    moves = 0;
    hold = null;
    for (var i = discs; i > 0; i--) towers[0][0].push(i);
    drawdiscs();
    $(".moves").text("现在移动了"+" "+moves+" "+"步");
  }

  function handle(tower) {
    if (hold === null) {
      if (!jQuery.isEmptyObject(towers[tower][0])) {
        hold = tower;
        towers[hold][1]
          .children()
          .last()
          .css("margin-top", "-170px");
      }
    } else {
      var move = moveDisc(hold, tower);
      moves += 1;
      $(".moves").text("现在移动了" + " " + moves + " " + "步");
      if (move == 1) {
        drawdiscs();
      } else {
        alert("大圆盘不能放在小圆盘上面。");
      }
      hold = null;
    }
    if (solved()) $(".moves").text("一共移动了 " + moves + " 步!");
  }

  function moveDisc(a, b) {
    var from = towers[a][0];
    var to = towers[b][0];
    if (from.length === 0) return 0;
    else if (to.length === 0) {
      to.push(from.pop());
      return 1;
    } else if (from[from.length - 1] > to[to.length - 1]) {
      return 0;
    } else {
      to.push(from.pop());
      return 1;
    }
  }

  function solved() {
    if (
      jQuery.isEmptyObject(towers[0][0]) &&
      jQuery.isEmptyObject(towers[1][0]) &&
      towers[2][0].length == discs
    )
      return 1;
    else return 0;
  }

  $(".t").click(function () {
    handle($(this).attr("value"));
  });

  $("#restart").click(function () {
    var discs = document.getElementById("box").value;
    init();
  });
  init();
});