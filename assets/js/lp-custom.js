jQuery(function($){
    $('.card-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
        responsive: [{ 
            breakpoint: 500,
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
            } 
        }]
    });

    //faq
    $(".faq-item").click(function() {
        $(".faq-inner-content").slideUp();
    
        if ($(this).find(".faq-inner-content").is(":visible")) {
            $(this).find(".faq-y").css("transform", "rotate(-90deg)")
            $(this).find(".faq-inner-content").slideUp();

        } else {

            $(this).find(".faq-inner-content").slideDown();
            $(this).find(".faq-y").css("transform", "rotate(0deg)")
        }
    });
    
});