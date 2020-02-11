/*
1 fetch cats
2. create sections
<section id="drinks">
        <h2>Drinks</h2>

      </section>
3. assign id
4 assign products to correct section
*/

fetch("http://kea-alt-del.dk/t5/api/categories")
  .then(res => res.json())
  .then(createCategories)

function createCategories(data) {
  console.log(data)
  data.forEach(function (oneCat) {

    const section = document.createElement("section");
    section.id = oneCat;
    const h2 = document.createElement("h2");
    h2.textContent = oneCat;
    section.appendChild(h2);

    document.querySelector("main").appendChild(section);
  })
  getProducts();
}

function getProducts() {
  fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      showData(data)
    })
}

function showData(jsonData) {
  console.log(jsonData)
  jsonData.forEach(showSingleDish)
}

function showSingleDish(dish) {
  //console.log(dish)

  //1 grab the template
  const template = document.querySelector("#dishTemplate").content;

  //2 make copy
  const copy = template.cloneNode(true);
  // change some conetnt
  copy.querySelector("h3").textContent = dish.name;
  //append somewhere


  if (dish.discount) { //on sale
    copy.querySelector(".price-discount span").textContent = dish.price;
    const newPrice = Math.round(dish.price - dish.price * dish.discount / 100);

    copy.querySelector(".price-full span").textContent = newPrice;
    //calculate new price
    //49-49*10/100
    //dish.price-dish.price*price.discount/100
  } else { // not on discount
    copy.querySelector(".price-discount").remove()
    copy.querySelector(".price-full span").textContent = dish.price
  }

  console.log(`#${dish.category}`)
  document.querySelector(`#${dish.category}`).appendChild(copy);
}
