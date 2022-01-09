import $ from 'jquery'
import jQuery from 'jquery'
import '../public/styles/style.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import lightbox from '../node_modules/lightbox2/dist/js/lightbox'

jQuery(() => {
  // Code goes here
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  })

})

