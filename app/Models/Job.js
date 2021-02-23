import { generateId } from "../Utils/GenerateId.js"

export default class Job {
   constructor({jobTitle, company, wage, description, imgUrl}) {
      this.jobTitle = jobTitle
      this.company = company
      this.wage = wage
      this.description = description
      this.imgUrl = imgUrl
      this.status = "Hiring"
      this.id = generateId()
   }

   get Template() {
      let button = /*html*/`<button class="btn btn-success" onclick="app.jobsController.apply('${this.id}')">Apply</button>`
      if(this.status == 'Position Filled')
         button = ''
      return /*html*/ `
         <div class="card col-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                  <h4 class="card-title">${this.jobTitle} @ ${this.company}</h4>
                  <p class="card-text">${this.description}</p>
                  <p>Wage : ${this.wage}</p>
                  <p>${this.status}</p>
                  ${button}
            </div>
         </div>`
   }
}
