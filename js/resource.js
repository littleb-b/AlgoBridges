
const resources = [
  { title: "汉诺塔游戏", content: "对汉诺塔游戏进行介绍讲解，包括汉诺塔游戏概念、移动规则以及涉及的递归公式。</p><p>另外，附有汉诺塔游戏模拟以及相关的实现代码。", tags: ["算法", "编程"], url: "TowerOfHanoi.html" },
  { title: "递归算法", content: "对递归算法基本结构、优缺点进行剖析。</p><p>在分形树的控制模拟下，更好理解递归的原理与实现。", tags: ["算法"], url: "recursive.html" },
  { title: "队列与栈", content: "从队列和栈的概念、特性、应用场景等方面进行对比，更好区分二者区别。</p><p>通过可视化帮助用户直观理解队列的先进先出（FIFO）和栈的后进后出（LIFO）特点。", tags: ["数据结构"], url: "queue+stack.html" },
  { title: "列表", content: "介绍了 Python 列表的常见操作，包括如何访问、修改、添加、删除元素以及如何进行排序、切片等高级操作。", tags: ["数据结构"], url: "list.html" },
  { title: "列表的应用-宠物领养系统", content: "利用表格对列表应用进行简单总结梳理。</p><p>通过实际应用宠物领养系统让用户更好掌握列表的应用。", tags: ["编程"], url: "list-application.html" },
  { title: "迭代与递归算法对比", content: "利用表格对迭代和递归进行比较总结。</p><p>从优缺点、应用、代码等方面进行对比分析。", tags: ["算法","编程"], url: "iterative+recursive.html" },
];

const container = document.getElementById("resource-container");
const searchInput = document.getElementById("search");
const tagButtons = document.querySelectorAll(".tag-btn");

function renderCards(filterTag = "全部", searchQuery = "") {
  container.innerHTML = ""; // 清空内容
  const filteredResources = resources.filter((resource) => {
    const matchTag = filterTag === "全部" || resource.tags.includes(filterTag);
    const matchSearch = resource.title.includes(searchQuery) || resource.content.includes(searchQuery);
    return matchTag && matchSearch;
  });

  filteredResources.forEach((resource, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
          <h3>${resource.title}</h3>
          <p>${resource.content}</p>
          <div class="tags">
            ${resource.tags.map((tag) => `<span class="tag" data-tag="${tag}">${tag}</span>`).join("")}
          </div>
        `;

    // 添加点击事件监听到整个卡片
    card.addEventListener("click", () => {
      if (!event.target.classList.contains("tag")) {
        window.location.href = resource.url; // 跳转到对应的 URL
      }
    });

    // 为标签添加点击事件
    const tagElements = card.querySelectorAll(".tag");
    tagElements.forEach((tagElement) => {
      tagElement.addEventListener("click", (e) => {
        e.stopPropagation(); // 阻止事件冒泡，避免触发卡片跳转
        const selectedTag = e.target.dataset.tag;
        document.querySelector(".tag-btn.active")?.classList.remove("active");
        renderCards(selectedTag);
      });
    });

    container.appendChild(card);
  });
}

// 初次渲染
renderCards();

// 搜索功能
searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value.trim();
  const activeTag = document.querySelector(".tag-btn.active")?.dataset.tag || "全部";
  renderCards(activeTag, searchQuery);
});

// 标签过滤功能
tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".tag-btn.active")?.classList.remove("active");
    button.classList.add("active");

    const selectedTag = button.dataset.tag;
    const searchQuery = searchInput.value.trim();
    renderCards(selectedTag, searchQuery);
  });
});
