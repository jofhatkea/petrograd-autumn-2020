window.addEventListener("load", () => {
  copyArticle(6);
});

function copyArticle(amount) {
  const article = document.querySelector(".course");
  const sections = document.querySelectorAll("main > section");
  const classes = ["none", "soldout", "sale", "allergens"];
  for (let i = 0; i < amount; i++) {
    const copy = article.cloneNode(true);
    const className = getRandomItem(classes);
    if (className !== "sale") {
      copy.querySelector(".price-discount").remove();
    } else {
      copy.querySelector(".price-discount").textContent = "69,-";
      copy.querySelector(".price-full").textContent = "39,-";
    }
    copy.classList.add(className);
    const ps = copy.querySelectorAll(".info p");
    const amountToSave = Math.floor(Math.random() * 3);
    console.log(amountToSave);
    for (let i = 2; i >= 0; i--) {
      if (i > amountToSave) {
        ps[i].remove();
      }
    }

    getRandomItem(sections).appendChild(copy);
  }
  article.remove();
}
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
