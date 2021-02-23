import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor({bedrooms, bathrooms, levels, year, price, description, imgUrl, _id, id}) {
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
    this.id = _id || id
  }

  get Template() {
    return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.bedrooms} bed, ${this.bathrooms} bath</h4>
      <p>Levels: ${this.levels}</p>
      <p>Year: ${this.year}</p>
      <p class="card-text">${this.description}</p>
      <p><small>$${this.price}</small></p>
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
  }

}
