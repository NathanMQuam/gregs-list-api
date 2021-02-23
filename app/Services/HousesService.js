import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {


  constructor() {
    console.log("Houses service");
    this.getHouses()
  }

  async getHouses() {
    try {
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawHouse) {
    try {
      await api.post('houses', rawHouse)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id) {
    let house = ProxyState.houses.find(h => h.id === id)
    house.price += 100
    try {
      await api.put('houses/' + id, house)
      // console.log(res.data)
      // NOTE this is another opportunity to go and fetch the data and make sure it is the most up to date with our database
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try {
      const res = await api.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()