import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
  constructor() {
    console.log("Jobs service");
  }

  createJob(rawJob) {
    let temp = ProxyState.jobs
    temp.push(new Job(rawJob))
    ProxyState.jobs = temp
  }

  apply(id) {
    let temp = ProxyState.jobs
    let job = temp.find(h => h.id === id)
    job.status = 'Position Filled'
    ProxyState.jobs = temp
  }

  deleteJob(id) {
    let temp = ProxyState.jobs
    let jobIndex = temp.findIndex(job => job.id == id)
    temp.splice(jobIndex, 1)
    ProxyState.jobs = temp
  }
}

export const jobsService = new JobsService()