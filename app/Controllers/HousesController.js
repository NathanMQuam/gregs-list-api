import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/housesService.js"

function _draw() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(house => template += house.Template)
  // console.log(template)
  document.getElementById('houses').innerHTML = template
  // console.log(ProxyState.houses)
}

export default class housesController {
  constructor() {
    console.log("houses controller working")
    // console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouse(event) {
    event.preventDefault();
    console.log('creating house')
    let form = event.target
    // console.log(form)
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    console.log(rawHouse)
    housesService.createHouse(rawHouse)
  }

  bid(id) {
    console.log('bidding on house:', id)
    housesService.bid(id)
  }

  deleteHouse(id) {
    console.log("deleting house:", id)
    housesService.deleteHouse(id)
  }

}