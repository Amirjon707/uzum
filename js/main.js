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