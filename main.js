async function getPizzaType() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const count = data.count;
    const pizzas = data.recipes;
    const result = pizzas.map(function (ele) {
        return `
            <div class="pizza">
            <h2>Name : ${ele.title}</h2>
            <h2>The Meal Image : </h2>
            <img src='${ele.image_url}'>
            </div>
        `;
    }).join(``);
    document.querySelector(".Pizza-Type .count").textContent = "Number of Pizza recipes is : " + count;
    document.querySelector(".Pizza-Type").innerHTML += result;
}
getPizzaType();