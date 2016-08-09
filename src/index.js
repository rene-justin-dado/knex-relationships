var wombleList = require('./templates/womble-list.hbs')
var headerTemplate = require('./templates/header.hbs')
var footerTemplate = require('./templates/footer.hbs')

document.addEventListener('DOMContentLoaded', () => {
  var headerElement = document.getElementById('header')
  var headerHTML = headerTemplate({
    title: 'Wombles',
    subtitle: 'They clean up'
  })
  headerElement.innerHTML = headerHTML


  var div = document.createElement('div')
  var data = {
    wombles: [
      { name: 'Orinocco', email: 'orinocco@wimbledoncommon.net' },
      { name: 'Tomsk', email: 'tomsk@wimbledoncommon.net' },
      { name: 'Bungo', email: 'bungo@wimbledoncommon.net' }
    ]
  }
  div.innerHTML = wombleList(data)
  document.body.appendChild(div)

  var footerElement = document.getElementById('footer')
  var footerHTML = footerTemplate({
    copyright: '&copy',
    contact: '555-3000'
  })
  footerElement.innerHTML = footerHTML
})
