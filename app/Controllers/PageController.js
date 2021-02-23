import { ProxyState } from "../AppState.js"
//import { pageService } from "../Services/PageService.js"

function _draw() {
   let template = ``
   ProxyState.listings.forEach(l => {
      template += l.Template
   })
   document.getElementById('app').innerHTML = template
}

export default class PageController {
   constructor () {
      ProxyState.on('listings', _draw)
      _draw()
   }

   /**
    * @param {string} page
    */
   changePage(page) {
      //pageService.changePage(page)
   }
}