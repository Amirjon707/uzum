<<<<<<< HEAD
fetch("db.json")
.then(function(res){
  return res.json()
})

.then(function(pr){
  let placeholder = document.getElementById('data');
  let out = "";
  for(let pr of prs){
    out += `
      <tr>
        <td>${pr.media}</td>
        <td>${pr.title}</td>
        <td>${pr.description}</td>
        <td>${pr.price}</td>
        <td>${pr.rating}</td>
      </tr>
    `
  }


  placeholder.innerHTML = out;
})
=======
let BASE_URL = "http://localhost:5050";

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data.products));
>>>>>>> e7fc9c7e68cccaf087099a17c137ce774609ba91
