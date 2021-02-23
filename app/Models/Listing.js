import { generateId } from "../Utils/generateId.js"

export default class Listing {
   constructor({img, price}) {
      this.img = img
      this.price = price
      this.id = generateId()
      console.log('Listing base class constructor');
   }

   get Template() {
      let template = /*html*/``
      return template
   }
}