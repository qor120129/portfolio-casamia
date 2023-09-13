$('.main_slides').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  draggable: true,
  infinite: true,
});

var header = $('body > header'),
  scrollAmt = 0,
  lastScroll = 0,
  quickMenu = $('.quick_menu');

$(window).scroll(function () {
  scrollAmt = $(window).scrollTop();
  if (lastScroll < scrollAmt && lastScroll >= 0) {
    header.addClass('scroll-down');
    header.removeClass('scroll-up');
  } else if (lastScroll > scrollAmt) {
    header.removeClass('scroll-down');
    header.addClass('scroll-up');
  }
  if (scrollAmt <= 0) {
    header.removeClass('scroll-up');
  }

  
  if ($(window).width() < 720) {   
    quickMenu.removeAttr( 'style' );
    if (lastScroll < scrollAmt ) {
      quickMenu.addClass('scroll-down');
    } else {
      quickMenu.removeClass('scroll-down');
    }
  
  } else {
    if ($(window).scrollTop() > 400) {
      quickMenu.addClass('click') 
    } else{
      quickMenu.removeClass('click') 
    }
  }
  console.log(scrollAmt)
  lastScroll = scrollAmt;
});

var img = $('.img_wrap'),
    hoverIco = $('.hover_ico');

    img.click(function(){
          img.removeClass('click');
          hoverIco.removeClass('click');
          $(this).addClass('click');
      })




var newItem = new Swiper('.new-wrapper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  // 슬라이드를 버튼으로 움직일 수 있습니다.
  navigation: {
    nextEl: '.bannerNext',
    prevEl: '.bannerPrev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    721: {
      slidesPerView: 3,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

var story = new Swiper('.story_wrapper', {
  pagination: { // 페이징 설정
    el: '.swiper-pagination',
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  loop: true,

  spaceBetween: 10,
  navigation: {
    nextEl: '.storyNext',
    prevEl: '.storyPrev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }
});


var tagging = $('.tg')
var taggingBtn = $('.story_button');
var taggingWrap = $('.tagging_wrap');
taggingBtn.click(function () {
  $(this).next(taggingWrap).toggleClass('click');
});


$('.event_banner').parallax({
  speed: .5,
  src: 'image/event_banner.jpg'
});

$('.top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 400);
  return false;
});


var categorywrapper = $('.mb_category_wrapper'),
  toggleBtn = $('.mobile_menu_toggle'),
  closeBtn = $('.close');

toggleBtn.click(function () {
  categorywrapper.stop().animate({ 'left': 0, 'display': 'block'}, 300);
  $('body').css({'overflow-y': 'hidden' });
});

closeBtn.click(function () {
  categorywrapper.stop().animate({ 'left': '-100%', 'display': 'none' }, 300);
  $('body').css({ 'overflow-y': 'auto' });
});


/*---------------sub---------------- */

// var categorytt = $('.category_menu .category_tt');
var  categoryOpen = $('.category_open'),
    list = $('.list');

categoryOpen.each(function () {
  $(this).click(function () {
    $(this).toggleClass('click')
    $(this).parent().parent().next(list).slideToggle();
  })
})

// var categoryList = $('.category_list');
var open = $('.category_list .open'),
  categoryLink = $('.category_menu .category_link'),
  categorySubList = $('.category_sub_list');


  open.each(function () {
    $(this).click(function () {

      categoryLink.removeClass('click');
      $(this).prev(categoryLink).addClass('click');
  
      if (!$(this).hasClass('click')) {
        open.parent().next(categorySubList).slideUp(400);
        $(this).parent().next(categorySubList).slideDown(400);
        open.removeClass('click');
        $(this).addClass('click');
      } else {
        $(this).parent().next(categorySubList).slideUp(400);
        $(this).removeClass('click');
        $(this).prev(categoryLink).removeClass('click');
      }
    })
  });

  

/*-------------------------------브랜드 필터-----------------------------------*/

var brandFilter = $('.category_brand_list input'),
  categoryItemList = $('.category_item li');


brandFilter.click(function () {
  var targetValue = [];
  brandFilter.filter(':checked').each(function () {
    targetValue.push('.' + $(this).val());
  });
  console.log(targetValue);
  var targetClass = targetValue.join(',');
  if (targetValue.length == 0) {
    categoryItemList.show()
  } else {
    categoryItemList.hide();
    $(targetClass).fadeIn(500);

  }

});
        
        
/* -----------------------모바일 필터----------------------- */

function modalOpen(){
var 
    sortsBtn = $('.sub_wrapper_sorts'),
    categoryModalWrap = $('.category_modal_wrapper'),
    categoryModal = $('.category_modal');

    var filterBtn = $('.filter'),
        categoryBrand = $('.category_brand'),  
        closeBtn = $('.close_btn_wrapper');
    

      sortsBtn.click(function () {
        categoryModalWrap.toggleClass('click')

      })

      filterBtn.click(function (){
        categoryBrand.toggleClass('click')
      })

      closeBtn.click(function (){
        categoryBrand.removeClass('click')
      })
    }
    modalOpen()
    

      // 쿠키
     let myPopup =$('.popup_box'),
     popupcloseBtn = $('.popup_close'),
      oneDayCheck = $('#oneday_close');
  
      if(!$.cookie('casamiaCookie')){
        PopupShow();
      }
      
      popupcloseBtn.click(function(){
        if(!oneDayCheck.is(":checked")){
          PopupHide(0);
        }else{
          PopupHide(1);
        }
      });
      
      //레이어팝업 노출
      function PopupShow(){
        myPopup.css({display : 'block'})
      }
      //레이어팝업 비노출
      function PopupHide(state){
          //닫기버튼 오늘하루보지않기 버튼 무관하계 레이어팝업은 닫는다.
          myPopup.css({display : 'none'})
      
          //오늘하루보지않기 버튼을 누른 경우
          if(state === 1){
            //'testCookie' 이름의 쿠키가 있는지 체크한다.
              if($.cookie('casamiaCookie') == undefined){
                  //쿠키가 없는 경우 testCookie 쿠키를 추가
                  $.cookie('casamiaCookie', 'Y', { expires: 1, path: '/' });
                  
              }        
          }
      }
