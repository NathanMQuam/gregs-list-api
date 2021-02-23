import { ProxyState } from "../AppState.js";

class PageService {
   /**
    * @param {string} page
    */
   changePage(page) {
      //console.log('Hello from page service', page);
      //ProxyState.currentPage = [page, ProxyState.currentPage[0]]
   }

}

export const pageService = new PageService()