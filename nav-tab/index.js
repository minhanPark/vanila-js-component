const tabItems = document.getElementsByClassName("tab-items");
const tabContents = document.getElementsByClassName("tab-contents");

for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener("click", function () {
    const siblings = this.parentElement.children;
    for (let j = 0; j < siblings.length; j++) {
      if (siblings[j].classList.contains("current")) {
        siblings[j].classList.remove("current");
        continue;
      }
    }
    for (let k = 0; k < tabContents.length; k++) {
      if (tabContents[k].classList.contains("current")) {
        tabContents[k].classList.remove("current");
      }
    }

    const tabNum = this.dataset.tab;
    this.classList.add("current");
    document.getElementById(tabNum).classList.add("current");
  });
}
