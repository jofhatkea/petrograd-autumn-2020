window.addEventListener("load", () => {
  copyArticle(6);
});

function copyArticle(amount) {
  const article = document.querySelector(".course");
  const sections = document.querySelectorAll("main > section");
  for (let i = 0; i < amount; i++) {
    const copy = article.cloneNode(true);
    sections[Math.floor(Math.random() * sections.length)].appendChild(copy);
  }
  article.remove();
}
