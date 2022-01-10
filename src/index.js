import $ from 'jquery'
import jQuery from 'jquery'
import '../public/styles/_mixins.scss'
import '../public/styles/_variables.scss'
import '../public/styles/style.scss'
import '../public/styles/about.scss'
import '../public/styles/contact.scss'
import '../public/styles/landscape.scss'
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

  // OnLoad FadeIn website
  $(document).ready(function () {
    $('.hidden').fadeIn(1600).removeClass('hidden');
  });


  // Active link

// $(document).ready(function(){
//   $('ul li a').click(function(){
//     $('li a').removeClass("active");
//     $(this).addClass("active");
// })
// })


}) // END jQuery

