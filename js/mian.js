$(function () {

    
 //스플래시 화면(로딩페이지)
 let loadingPage = document.getElementById('loading');
 //일정시간 뒤에 실행 -> setTimeout()
 setTimeout(function () {
     loadingPage.style.opacity = '0';
     loadingPage.style.transition = '1.5s';
     // loadingPage.style.transform = 'translateX(-100%)';
     loadingPage.style.transform = 'scale(0)';
     // loadingPage.style.zIndex = '-1';

 }, 1000)//2초뒤에 실행
    let bar = $('.bar img');
    let bar1 = $('.bar');


    let menu = $('nav li');
    let hd = $('header');
    let headerTop = hd.offset().top;
    console.log(headerTop) //0
    $(window).scroll(function () {

        let scrollBar = $(window).scrollTop();
        //스크롤바의 y축값(세로로 움직이는 값)

        //화면을 스크롤했을 때 실행
        //header가 가지는 값보다
        //스크롤바가 가지는 값이 더 클 떄
        //header에게 클래스면 on추가
        if (headerTop < scrollBar) {
            hd.addClass('on');
        }
        else {
            hd.removeClass('on');
        }
        //스크롤 했을 때 각 cont에게 스크롤이 들어오면
        //nav li 에게 클래스명 제어

        if ($('.main_visual').offset().top <= scrollBar) {
            // menu.removeClass('on')
            // menu.eq(0).addClass('on');

            bar1.stop().animate({
                //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
                'left': menu.eq(0).position().left
            })

        }
        /*  else {
             menu.removeClass('on')
 
         } */
       
        if ($('.intro').offset().top -50 <= scrollBar) {

            // menu.removeClass('on')
            // menu.eq(1).addClass('on');
            bar1.stop().animate({
                //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
                'left': menu.eq(1).position().left
            })

        } else if (0 == scrollBar - 200){
            bar1.stop().animate({
                //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
                'left': menu.eq(1).position().left
            })
        }

        if ($('.work').offset().top - 150 <= scrollBar) {
            bar1.stop().animate({
                //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
                'left': menu.eq(2).position().left
            })
            bar.css({
                'width': menu.eq(2).outerWidth()
            })
        }

        if ($('.contact').offset().top <= scrollBar + 200) {
            bar1.stop().animate({
                //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
                'left': menu.eq(3).position().left
                
               
            })
            bar.css({
                'width': menu.eq(3).outerWidth()
            })
        }

        let aniMate = $('.progress-moved');
        let prosessTop = aniMate.offset().top - 800;
        console.log(scrollBar) //0


        if (prosessTop < scrollBar) {
            aniMate.addClass('on');
        }
        else {
            aniMate.removeClass('on');
        }

    })//scroll()



       

        //li의 넓이값
        let tabMenuWidth = menu.outerWidth();
        bar.css({
            'width': tabMenuWidth,
            // 'height' : '40px'
        })

        bar1.stop().animate({
            //자식으로 선택자 만들어서 첫화면에서 동그라미 볼 수 있게 함
            'left': menu.eq(0).position().left
        })

        menu.click(function () {
            let moveLeft = $(this).position().left;
            console.log($(this).position().left)

            $('.bar').stop().animate({
                //animate 이용시 tranitions 없이도 부드럽게 움직임
                //stop() 사용시 중간중간에 멈춰줌
                'left': moveLeft
            })
            let thisWidth = $(this).outerWidth();
            console.log($(this).outerWidth())
            bar.css({
                'width': thisWidth
            })

        }); //menu.click


        //slide
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

        });
        AOS.init();


})//jquery end

