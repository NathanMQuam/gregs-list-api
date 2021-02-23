import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {


  constructor() {
    console.log("cars service");
    this.getCars()
  }

  async getCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch (error) {
      console.error(error)
    }
  }

  async createCar(rawCar) {
    try {
      await api.post('cars', rawCar)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id) {
    let car = ProxyState.cars.find(c => c.id === id)
    car.price += 100
    try {
      const res = await api.put('cars/' + id, car)
      // console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.cars = ProxyState.cars
    } catch (error) {
      console.error(error)
    }
  }

  async deleteCar(id) {
    try {
      const res = await api.delete(`cars/${id}`)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()