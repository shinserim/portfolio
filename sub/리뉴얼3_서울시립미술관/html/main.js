$(function () {
    let menuBtn = $('.left_menu li');
    menuBtn.click(function () {
        //클래스명 추가 -> addClass()
        //클래스명 삭제 -> removeClass();
        //menuBtn.addClass('on')
        menuBtn.removeClass('on');
        $(this).addClass('on') //내가 클릭한 곳만 on이 붙음

    })

    //내가 클릭한 요소만 클래스명 추가
    //모든 li는 클래스명 삭제

    let menu = $('nav li');
    menu.click(function () {
        let menuIndex = $(this).index();
        console.log(menuIndex)
        let contPage = $('.cont').eq(menuIndex);
        let contPageTop = contPage.offset().top;
        //.cont가 브라우저 상단에서 얼마만큼 떨어졌는지
        //값 구하기 = > offset().top;
        //scrollTop => 스크롤바의 수직값
        $('html, body').animate({
            scrollTop: contPageTop
        }, 700, easeOutBounce) //쉼표 찍고 원하는 시간, 속도 설정
    })//menu.click


    let hd = $('header');
    let leftM = $('.left_menu li');
    let headerTop = leftM.offset().top;
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
            leftM.removeClass('on')
            leftM.eq(0).addClass('on');
        }
        else {
            leftM.removeClass('on')

        }
        if ($('.cont01').offset().top <= scrollBar) {
            leftM.removeClass('on')
            leftM.eq(1).addClass('on');
        }

        if ($('.cont03').offset().top <= scrollBar) {
            leftM.removeClass('on')
            leftM.eq(2).addClass('on');
        }

        if ($('.cont04').offset().top <= scrollBar) {
            leftM.removeClass('on')
            leftM.eq(3).addClass('on');
        }

        if ($('.cont06').offset().top <= scrollBar) {
            leftM.removeClass('on')
            leftM.eq(4).addClass('on');
        }

    })//scroll()

    // let menuList = $('.cont03');
    // let bar = $('li');
    // let item = $('.list');

    // menu.click(function () {
    //     //1. bar의 위치이동
    //     //menu가 가지는 위치값 만큼
    //     //bar의 left값으로 적용

    //     let moveLeft = $(this).position().left;
    //     bar.animate({
    //         'left': moveLeft
    //     })

    //     //item에게 클래스명 제어
    //     //내가 클릭한 menu의 index순서값을 찾아서
    //     // 그 순서에 맞춰
    //     //item에게 클래스명 추가
    //     item.removeClass('on')
    //     item.eq($(this).index()).addClass('on');

    // })//menu.cilck end

})//jquery end

window.onload = function () {
    let cont03 = document.getElementsByClassName('cont03')[0];
    let menuBtn = cont03.getElementsByTagName('li');
    let cont03List = cont03.getElementsByClassName('list');

    for (let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].onclick = function () {

            cont03List[0].classList.remove('on');
            cont03List[1].classList.remove('on');
            cont03List[2].classList.remove('on');

            cont03List[i].classList.add('on');


            menuBtn[0].classList.remove('on');
            menuBtn[1].classList.remove('on')
            menuBtn[2].classList.remove('on')

            menuBtn[i].classList.add('on')
        }
    }
    let cont04 = document.getElementsByClassName('cont04')[0];
    let cont04Item = cont04.getElementsByClassName('item');
    let hd = document.getElementsByTagName('header')[0];
    let leftMenu = document.getElementsByClassName('left_menu')[0];
    let mainVisual = document.getElementsByClassName('main_visual')[0];
    let cont01 = document.getElementsByClassName('cont01')[0];
    let fxIcon = document.getElementsByClassName('fixed_icon')[0];
    fxIcon.style.display = 'none'

    window.onscroll = function () {
        let scrollBar = window.scrollY; // 스크롤되는 Y축값
        leftMenu.style.opacity = '-1';
        if (scrollBar > mainVisual.clientHeight - 1) {
            hd.style.display = 'none'
            leftMenu.style.opacity = '1'
            leftMenu.style.transition = '0.5s'
        } else {
            hd.style.display = 'block'
            leftMenu.style.opacity = '-1'

        }

        for (let i = 0; i < cont04Item.length; i++) {
            if (cont04.offsetTop - 500 <= scrollBar) {
                cont04Item[i].classList.add('on' + i);
            } else {
                cont04Item[i].classList.remove('on' + i);
            }
        }


        console.log(scrollBar);
        if (cont01.offsetTop - 500 <= scrollBar) {
            fxIcon.style.display = 'block'
        } else {
            fxIcon.style.display = 'none'
        }


    }//onscroll

    let menuIcon = document.getElementsByClassName('menu_icon')[0];
        let menuIcon2 = document.getElementsByClassName('close_menu')[0];
        let hdNav = document.getElementsByTagName('nav')[0];

        hdNav.style.display = 'none'
        menuIcon.onclick = function () {
            if (hdNav.style.display == 'none') {
                hdNav.style.display = 'block'
            }
            menuIcon2.onclick = function () {
                if (hdNav.style.display == 'block') {
                    hdNav.style.display = 'none'
                }
            }
        }//manu end

    // let cont01 = document.getElementsByClassName('cont01')[0];
    let cont01Item = cont01.getElementsByClassName('list');
    let cont01Prev = cont01.getElementsByClassName('arrow_left')[0];
    let cont01Next = cont01.getElementsByClassName('arrow_right')[0];
    let i = 0;


    cont01Next.onclick = function () {
        i++;
        if (i >= cont01Item.length) {
            i = cont01Item.length - 1
        }
        cont01Item[0].classList.remove('on');
        cont01Item[1].classList.remove('on');

        cont01Item[i].classList.add('on');
    }

    cont01Prev.onclick = function () {
        i--;
        if (i <= 0) {
            i = 0
        }
        cont01Item[0].classList.remove('on');
        cont01Item[1].classList.remove('on');

        cont01Item[i].classList.add('on');
    }
    let cont02 = document.getElementsByClassName('cont02')[0];
    let cont02Item = cont02.getElementsByClassName('list');

    let cont02Prev = cont02.getElementsByClassName('arrow_left')[0];
    let cont02Next = cont02.getElementsByClassName('arrow_right')[0];
    cont02Next.onclick = function () {
        i++;
        if (i >= cont02Item.length) {
            i = cont02Item.length - 1
        }
        cont02Item[0].classList.remove('on');
        cont02Item[1].classList.remove('on');

        cont02Item[i].classList.add('on');
    }

    cont02Prev.onclick = function () {
        i--;
        if (i <= 0) {
            i = 0
        }
        cont02Item[0].classList.remove('on');
        cont02Item[1].classList.remove('on');

        cont02Item[i].classList.add('on');
    }

}//window.onload