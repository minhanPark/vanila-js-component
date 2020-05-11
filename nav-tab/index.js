const tabItems = document.getElementsByClassName("tab-items");

for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener("click", function () {
    // 항목중에서 loop를 돌아서 current를 없앤다.
    const siblings = this.parentElement.children;
    for (let j = 0; j < siblings.length; j++) {}
    // 그리고 이놈한테 current를 달아준다.
  });
}
