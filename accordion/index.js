const headers = document.getElementsByClassName("accordion--header");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    const siblings = this.parentElement.children;
    for (let j = 0; j < siblings.length; j += 2) {
      if (siblings[j].classList.contains("current")) {
        // 펼쳐져있는 것을 누르면 닫힘
        if (siblings[j].innerHTML === this.innerHTML) {
          siblings[j].classList.toggle("current");
          return;
        }
        siblings[j].classList.remove("current");
        break;
      }
    }
    this.classList.add("current");
  });
}
