window.addEventListener("load", () => {
  copyArticle(6);
});

function copyArticle(amount) {
  const article = document.querySelector(".course");
  const sections = document.querySelectorAll("main > section");
  const classes = ["none", "soldout", "sale", "allergens"];
  for (let i = 0; i < amount; i++) {
    const copy = article.cloneNode(true);
    copy.classList.add(getRandomItem(classes));
    getRandomItem(sections).appendChild(copy);
  }
  article.remove();
}
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
