$( document ).ready(function() {

    function imagePreview(url) {
        $('<img>', {
            src: url,
            error: function() {

            },
            load: function() {
                $('<img/>').attr('src', url).load(function() {
                    $(this).remove();
                    var ele = $('#preview_image');
                    ele.show();
                    ele.css('background-image', 'url(' + url + ')');
                });
            }
        });
    }

    function changeColor(ele) {
        var colorBG = ele.attr('back');
        var colorText = ele.attr('color');
        if(typeof colorBG !== 'undefined') {
            ele.css('background-color', colorBG);
        }
        if(colorText == '#00ac00') {
            ele.css('color', '#c0c0c0');
            ele.css('background-color', '#c0c0c0');
            ele.addClass('spoiler');
        }
    }

    $('#Chat').on('mouseenter', 'a', function() {
        var url = $(this).attr('href');
        var ext = url.split('.').pop();;
        if(ext != 'pdf') imagePreview(url);
    });

    $('#Chat').on('mouseleave', 'a', function() {
        var ele = $('#preview_image');
        ele.hide();
    });

    $('#preview_image').on('mouseleave', function() {
        $(this).hide();
    });

    $('#Chat').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
        console.log(event.target.innerHTML);
        var ele = $(event.target).find('.message_content > font');
        $.each(ele, function(key, value) {
            changeColor($(this));
        });
    });

    var ele = $('#Chat > .message_wrapper > .message_content > font');
    $.each(ele, function(key, value) {
        changeColor($(this));
    });

});