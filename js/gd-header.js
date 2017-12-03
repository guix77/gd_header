/**
 * @file
 * Set background image in JS.
 */

(function ($, Drupal) {
  Drupal.behaviors.gd_header = {
    attach: function (context, settings) {
      var url = drupalSettings.gd_header.block_img_url;
      if (drupalSettings.gd_header.node_img_url !== undefined) {
        url = drupalSettings.gd_header.node_img_url;
      }
      $('#block-gdheader').css('background-image', 'url(' + url + ')');
    }
  };
})(jQuery, Drupal);
