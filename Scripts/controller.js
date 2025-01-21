  const dataElement = document.querySelector('#card-container');
  cardData.forEach((item) => {
  console.log(item);
  const cardElement = document.createElement("div");
  cardElement.classList.add("card")
  cardElement.innerHTML =`<img src= ${item.photo}  class="card-img-top" alt=${item.name}>
  <div class="card-body">
    <h5  class="card-title">${item.name}</h5>
    <p  class="card-text">${item.desccription}</p>
    <a href="#" class="btn btn-primary">Book Now</a>
    </div>`
  dataElement.appendChild(cardElement);
  console.log(dataElement);
 })

  
 
