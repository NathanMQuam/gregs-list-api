import { generateId } from "../Utils/GenerateId.js"

export default class Job {
   constructor({jobTitle, company, hours, rate, description, _id, id}) {
      this.jobTitle = jobTitle
      this.company = company
      this.hours = hours
      this.rate = rate
      this.description = description
      this.status = "Hiring"
      this.id = _id || id
   }

   get Template() {
      let button = /*html*/`<button class="btn btn-success" onclick="app.jobsController.apply('${this.id}')">Apply</button>`
      if(this.status == 'Application Pending')
         button = ''
      return /*html*/ `
         <div class="card col-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
            <div class="card-body">
                  <h4 class="card-title">${this.jobTitle} @ ${this.company}</h4>
                  <p class="card-text">${this.description}</p>
                  <p>Hours: ${this.hours}</p>
                  <p>Rate: ${this.rate}</p>
                  <p>${this.status}</p>
                  ${button}
            </div>
         </div>`
   }
}
