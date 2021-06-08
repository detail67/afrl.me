$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#upupup').fadeIn();
            } else {
                $('#upupup').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#upupup').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
});
