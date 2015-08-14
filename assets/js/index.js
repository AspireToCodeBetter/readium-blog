/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });

        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });

        // Remove unecessary stuff from Gist embeds
        $("div.gist").siblings("link").remove();
        $("div.gist-meta").remove();
        $("div.gist .gist-data h1").remove();
        $(".spinner").remove();
        $("#content.hidden").fadeIn(1000);
        $("#content").removeClass('hidden');

    });

}(jQuery));
