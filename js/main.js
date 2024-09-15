const BASE_URL = "http://localhost:5050/goods";

const con = document.querySelector(".container");

fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => get(data));

function get(e) {
    e.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <p>${item.price}</p>
    `;
        con.appendChild(div);
    });
}
