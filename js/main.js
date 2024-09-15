const BASE_URL = "http://localhost:5050";

const con = document.querySelector(".container");

fetch(`${BASE_URL}/goods`)
    .then((response) => response.json())
    .then((data) => get(data));


function get(e) {
    e.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = `
        <img src="${item.media[0]}">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <p>${item.price}</p>
    `;
        con.appendChild(box);
    });
}
