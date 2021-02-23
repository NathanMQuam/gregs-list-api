import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsServices.js"

function _draw() {
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(house => template += house.Template)
  // console.log(template)
  document.getElementById('jobs').innerHTML = template
  // console.log(ProxyState.jobs)
}

export default class JobsController {
  constructor() {
    console.log("jobs controller working")
    // console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob(event) {
    event.preventDefault();
    console.log('creating job')
    let form = event.target
    // console.log(form)
    let rawJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: parseFloat(form.hours.value),
      rate: parseFloat(form.rate.value),
      description: form.description.value
    }
    console.log(rawJob)
    jobsService.createJob(rawJob)
  }

  apply(id) {
    console.log('applied to job:', id)
    jobsService.apply(id)
  }

  deleteJob(id) {
    console.log("deleting job:", id)
    jobsService.deleteJob(id)
  }
}