// 代码部分
var editor = CodeMirror.fromTextArea(document.getElementById("queuecode"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`from collections import deque

task_queue = deque() # 模拟任务队列
# 添加任务到队列
task_queue.append("任务1")
task_queue.append("任务2")
task_queue.append("任务3")
print("当前任务队列:", list(task_queue))  # 输出: 当前任务队列: ['任务1', '任务2', '任务3']

# 处理第一个任务
task_to_process = task_queue.popleft()
print("正在处理的任务:", task_to_process)  # 输出: 正在处理的任务: 任务1

print("剩余任务队列:", list(task_queue))  # 输出: 剩余任务队列: ['任务2', '任务3']`);

var editor = CodeMirror.fromTextArea(document.getElementById("stackcode"), {
  mode: "python",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true
});

// 设置代码内容
editor.setValue(`undo_stack = []  # 模拟一个简单的撤销操作栈

# 添加操作到栈
undo_stack.append("操作1")
undo_stack.append("操作2")
undo_stack.append("操作3")

print("当前操作历史:", undo_stack)  # 输出: 当前操作历史: ['操作1', '操作2', '操作3']

# 用户点击撤销
last_action = undo_stack.pop()
print("撤销的操作:", last_action)  # 输出: 撤销的操作: 操作3

print("剩余操作历史:", undo_stack)  # 输出: 剩余操作历史: ['操作1', '操作2']`);


// 可视化部分
document.addEventListener("DOMContentLoaded", () => {
  const enqueueButton = document.getElementById("enqueue");
  const dequeueButton = document.getElementById("dequeue");
  const pushButton = document.getElementById("push");
  const popButton = document.getElementById("pop");

  const queueElements = document.querySelector(".queue .elements");
  const stackElements = document.querySelector(".stack .elements");

  let queue = [];
  let stack = [];

  function updateQueue() {
    queueElements.innerHTML = queue
      .map((item, index) => {
        let classNames = "element";
        if (index === 0) classNames += " head";
        if (index === queue.length - 1) classNames += " tail";
        return `
              <div class="${classNames}">
                ${item}
                ${index === 0 ? '<div class="label head-label">队头</div>' : ""}
                ${index === queue.length - 1 ? '<div class="label tail-label">队尾</div>' : ""}
              </div>
            `;
      })
      .join("");
  }

  function updateStack() {
    stackElements.innerHTML = stack
      .map((item, index) => {
        let classNames = "element";
        if (index === stack.length - 1) classNames += " head";
        if (index === 0) classNames += " tail";
        return `
              <div class="${classNames}">
                ${item}
                ${index === stack.length - 1 ? '<div class="label head-label">栈顶</div>' : ""}
                ${index === 0 ? '<div class="label tail-label">栈底</div>' : ""}
              </div>
            `;
      })
      .join("");
  }


  // function updateQueue() {
  //   queueElements.innerHTML = queue
  //     .map((item) => `<div class="element">${item}</div>`)
  //     .join("");
  // }

  // function updateStack() {
  //   stackElements.innerHTML = stack
  //     .map((item) => `<div class="element">${item}</div>`)
  //     .join("");
  // }

  // 队列操作
  enqueueButton.addEventListener("click", () => {
    const value = Math.floor(Math.random() * 100) + 1;
    queue.push(value);
    updateQueue();
  });

  dequeueButton.addEventListener("click", () => {
    if (queue.length) {
      queue.shift();
      updateQueue();
    }
  });

  // 栈操作
  pushButton.addEventListener("click", () => {
    const value = Math.floor(Math.random() * 100) + 1;
    stack.push(value);
    updateStack();
  });

  popButton.addEventListener("click", () => {
    if (stack.length) {
      stack.pop();
      updateStack();
    }
  });
});
