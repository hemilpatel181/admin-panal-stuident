$(document).ready(function () {
    $('.r-icon').on('click', function () {
        $('.sub-header').addClass('ander');
        $(".main-body").addClass("ml-0");
        $('.clickable').addClass('visible')
        $('.logo-2').addClass('visible')

    })

    $('.clickable').on('click', function () {
        $('.sub-header').removeClass('ander')
        $('.main-body').removeClass('ml-0')
        $('.clickable').removeClass('visible')
        $('.logo-2').removeClass('visible')
    })

    $('.sun-logo').on('click',function(){
        $('.white-bg').toggleClass('dark-mode')
        $('body').toggleClass('body-dark-mode')
        $('.main-body header').toggleClass('dark-header')
        $('.sub-header').toggleClass('dark-header')
        $('body').toggleClass('color88')
        $('.logo-d').css('color','var(--white-color)')
        $('.sub-header .r-icon').css('color','var(--white-color)')
        $('.sun-logo').toggleClass('ri-moon-fill ri-sun-line')
        $('svg').css('color','#ffffff80')

        $('.last-svg').on('click',function(){
            $('html').animate({scrollTop:0},1000)
        })

        
    })
})

$(document).ready(function () {
    $('.svg-2').on('click', function () {
        $answer = $(this).next('.acc-down');
        // $('.acc-down li').not($answer).slideUp();
        $answer.slideToggle();
        $('.acc-down').not($answer).slideUp();

        selectedIcon= $(this).children(".icon-right");
        selectedIcon.toggleClass('rotate');
       $(".icon-right").not(selectedIcon).removeClass('rotate');
    })
    if($(window).width() > 768){
        $('.r-icon').on('click', function () {
            $('.sub-header').addClass('ander');
            $(".main-body").addClass("ml-0");
            $('.clickable').addClass('visible')
            $('.logo-2').addClass('visible')
        })
    
        $('.clickable').on('click', function () {
            $('.sub-header').removeClass('ander')
            $('.main-body').removeClass('ml-0')
            $('.clickable').removeClass('visible')
            $('.logo-2').removeClass('visible')
        })
    } else {
        console.log("object");
        $('.r-icon').on('click', function () {
            $('.sub-header').removeClass('andar');
            $('.clickable').addClass('visible')
            $('.logo-2').addClass('visible')
        })
    
        $('.clickable').on('click', function () {
            $('.sub-header').addClass('andar')
            $('.clickable').removeClass('visible')
            $('.logo-2').removeClass('visible')
        })
    }
    // $('.noti').on('click', function () {
    //    $('.noti-div').toggleClass('c3')
      
    // })
    // $('.mail').on('click', function () {
    //     $('.mail-div').toggleClass('c3')
    // })
    // $('.eng').on('click', function () {
    //     $('.eng-div').toggleClass('c3')
    // })
    // $('.pro').on('click', function () {
    //     $('.pro-div').toggleClass('c3')
    // })

    $('.pop').on('click',function(){
        clickedpop=$(this).children(".popup");
        clickedpop.toggleClass('c3');
        $('.pop').children('.popup').not(clickedpop).addClass('c3');
    })
})
$(document).ready(function () {
    $('.svg-3').on('click', function () {
        $answer = $(this).next('.acc-down');
        $answer.slideToggle();
        // $('.acc-down').not($answer).slideUp();
    })

})

$(window).resize(function(){
    
})