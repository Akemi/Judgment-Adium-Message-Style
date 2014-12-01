$( document ).ready(function() {

    function imagePreview(url) {
        $("<img>", {
            src: url,
            error: function() {

            },
            load: function() {
                var ele = $('#preview_image')
                ele.css('background-image', 'url(' + url + ')');
                ele.stop()
                ele.show( "slow" );
            }
        });
    }

    $( "#Chat" ).on("mouseenter", "a", function() {
        imagePreview($(this).attr('href'));
    });

    $( "#Chat" ).on("mouseleave", "a", function() {
        var ele = $('#preview_image')
        ele.stop()
        ele.hide( "hide" , function() {
            ele.css('background-image', '');
        });
    });

});