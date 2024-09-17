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

    $('.faq-title').on("click", function () {
        var $content = $(this).closest(".faq-item").find(".faq-content");
        var $faqplus = $(this).closest(".faq-item").find(".faq-plus");
        $(".faq-plus").removeClass("anime-add");
        $(".faq-plus").removeClass("anime-remove");
        $(".item-content").slideUp("200");
        if ($content.is(":hidden")) {
        $faqplus.addClass("anime-add");
        $content.slideDown("200");
        } else {
        $content.slideUp("200");
        $faqplus.removeClass("anime-add");
        $faqplus.addClass("anime-remove");
        }
    });

    $('.faq-item-title').on("click", function () {
        var $content = $(this).closest("li").find(".faq-item-content");
        $(".faq-item-content").slideUp("200");
        if ($content.is(":hidden")) {
        $("li").removeClass("active");
        $content.slideDown("200");
        $(this).closest("li").addClass("active");
        } else {
        $content.slideUp("200");
        $(this).closest("li").removeClass("active");
        }
    });

    var windowHeight = $(window).height();
  
        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
  
          $('.animated').each(function() {
            var elementPosition = $(this).offset().top;
            
            if (scrollPosition > elementPosition - windowHeight / 1.6) {
              $(this).addClass('run-animated');
            }
          });
        });

        function animatedFlash() {
          setInterval(function () {
            $('.animated-flash').addClass('run-animated');
          }, 2000);
          setInterval(function () {
            $('.animated-flash').removeClass('run-animated');
          }, 3000);
        }
  
        animatedFlash();
});
