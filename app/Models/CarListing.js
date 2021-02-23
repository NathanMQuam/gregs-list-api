import { generateId } from "../Utils/generateId.js"


export default class CarListing {
   constructor({make, model, year, color, miles, img, price}) {
      this.make = make
      this.model = model
      this.year = year
      this.color = color
      this.miles = miles
      this.img = img
      this.price = price
      this.id = generateId()

      console.log('Hello from the CarListing constructor');
   }

   get Template() {
      let template = /*html*/``
      return template
   }
}