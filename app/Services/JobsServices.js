import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobsService {
  constructor() {
    console.log("Jobs service");
    this.getJobs()
  }

  async getJobs() {
    try {
      const res = await api.get('jobs')
      ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(rawJob) {
    try {
      await api.post('jobs', rawJob)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
  }

  async apply(id) {
    let job = ProxyState.jobs.find(c => c.id === id)
    job.status = "Application Pending"
    try {
      const res = await api.put('jobs/' + id, job)
      // console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.jobs = ProxyState.jobs
    } catch (error) {
      console.error(error)
    }
  }

  async deleteJob(id) {
    try {
      const res = await api.delete(`jobs/${id}`)
      this.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()