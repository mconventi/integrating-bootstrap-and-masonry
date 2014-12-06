/**
 * Base js functions
 */

$(document).ready(function(){
    //Init jQuery Masonry layout
    init_masonry();

    //Select menu onchange
    $("#collapsed-navbar").change(function () {
        window.location = $(this).val();
    });
});


function init_masonry(){
    var $container = $('#content');

    $container.imagesLoaded( function(){
        $container.masonry({
          itemSelector: '.box',
          isAnimated: true
        });
    });
}
