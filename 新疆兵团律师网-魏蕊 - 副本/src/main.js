var jQuery, $;
jQuery = $ = require('jquery')
window.jQuery = jQuery;

// Share
var Slide = {
  init: function (e, op) {
    require(['jquery/dist/jquery', 'utils/jquery.SuperSlide.2.1.1'], function ($, slide) {
      $(e).slide(op)
    })
  }
}

exports.Slide = Slide
// exports.navPanel = navPanel