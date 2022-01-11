import $ from 'jquery'
import jQuery from 'jquery'
import '../public/styles/_mixins.scss'
import '../public/styles/_variables.scss'
import '../public/styles/style.scss'
import '../public/styles/about.scss'
import '../public/styles/contact.scss'
import '../public/styles/landscape.scss'
import '../public/styles/fashion.scss'
import '../public/styles/mobileMenu.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import lightbox from '../node_modules/lightbox2/dist/js/lightbox'

jQuery(() => {
  
  // Lightbox functionality
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  })

  // OnLoad FadeIn website
  $('.hidden').fadeIn(1600).removeClass('hidden');
  
  // Show mobile navigation
  $(".burgerMenu").on("click", () => { 
    $('.mobileHeader').addClass("show");
    // Scroll lock when mobile menu open
    $('body').addClass("scrollLock");
  })

  // Exit mobile navigation
  $(".burgerMenuExit").on("click", () => { 
    $('.mobileHeader').removeClass("show");
    $('body').removeClass("scrollLock");
  })

}) // END jQuery

