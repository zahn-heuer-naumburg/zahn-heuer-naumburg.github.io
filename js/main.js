$(document).ready(function(){
    $('.header').height($(window).height());

    /* This code has to be executed after ".header" height is changed */
    var h = window.location.hash;
    if (h) {
        setTimeout(()=>{
            console.log("BIM", h, $(h).offset().top)
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top
            }, 1000);
        },1000);
    }

    /* Scroll functionality based on the offset of each #elementsection */
    $(".navbar a.nav-link").click(function(){
        if($(this).data('value')) {
            $("body,html").animate({
                scrollTop: $("#" + $(this).data('value')).offset().top
            },1000)
        }
    })

    /* for the image gallery */
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    /* to have a smooth fade in of the bordeaux overlay over image */
    $(".zoom").hover(function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });

    /* toggle oh-logo once it is hovered over */
    $(".oh").hover(
        /*function() {$(this).attr("src","/images/logo/logo_inverted.svg");},
        function() {$(this).attr("src","/images/logo/logo.svg");*/
        function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });

    /* toggle collapsed menuBar icon once it is hovered over */
    $(".myCollapsedMenuBarIcon").hover(
        function() {$(this).attr("src","/images/logo/menuBar_inverted.svg");},
        function() {$(this).attr("src","/images/logo/menuBar.svg");
    });

    /* enable click to zoom in on the map */
    $('#map').click(function(){
        $(this).find('iframe').addClass('clicked');
    })
    .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked');
    });
})

/* go back to main page from single reise page */
function goTo(url){
    window.location.href = url;
}

/* hide menu bar once an entry is clicked */
$(function() {
    var menuVisible = false;
    $('#myMenuBtn').click(function() {
        if (menuVisible) {
            $('#myMenu').css({'display':'none'});
            menuVisible = false;
            return;
        }
        $('#myMenu').css({'display':'block'});
        menuVisible = true;
    });
    $('#myMenu').click(function() {
        $(this).css({'display':'none'});
        menuVisible = false;
    });
});

/* filter for image gallery on index page */
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#maingalerie").fadeTo(100, 0.1);
        $("#maingalerie div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#maingalerie").fadeTo(300, 1);
    }, 300);
    });
});

/*
function formSubmitted() {
    $("form").html("Vielen Dank für Ihre Nachricht.");
}
*/