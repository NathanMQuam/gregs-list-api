import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsServices.js"

function _draw() {
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(house => template += house.Template)
  // console.log(template)
  document.getElementById('jobs').innerHTML = template
  console.log(ProxyState.jobs)
}

export default class JobsController {
  constructor() {
    console.log("jobs controller working")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob(event) {
    event.preventDefault();
    console.log('creating job')
    let form = event.target
    console.log(form)
    let rawJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      wage: parseFloat(form.wage.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    console.log(rawJob)
    jobsService.createJob(rawJob)
  }

  apply(id) {
    console.log('bidding ' + id)
    jobsService.apply(id)
  }

  deleteJob(id) {
    console.log(id)
    jobsService.deleteJob(id)
  }
}