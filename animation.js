$(function() {
  $(".nav-link").hover(function(){
    $(this).addClass("is-active")
  }, 
  function(){
    $(this).removeClass("is-active")
  })

  // //ドロワーメニュー
  // const drawer = $("body").hasClass("drawer-open")

  // // console.log($("body").hasClass("drawer-open"))
  // console.log(drawer)

  // if(drawer) {
  //   $(".drawer-bg").addClass(".drawer-bg-open")
  // } else {
  //   $(".drawer-bg").removeClass("drawer-bg-open")
  // }

  // $(".nav-item").click(function(){
  //   let speed = 300;
  //   let id = $(this).attr("id")
  //   let target = $("#" == id ? "html" : id);
  //   let position = $(target).offset().top;
  //   $("html,body").animate({ scrollTop: position }, speed);
  // })

  // #から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
   // .headerクラスがついた要素の高さを取得
   let header = $("header").innerHeight(); 
  // 移動速度を指定（ミリ秒）
  let speed = 500;
  let speedBottom = 300;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  // let position = $(target).offset().top;

   // トップからの距離からヘッダー分の高さを引く
   let position = $(target).offset().top - header;
   let positionBottom = $(target).offset().top - header + 60;

  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate(
    {
      scrollTop: positionBottom
    },
    speedBottom
  );

  $("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

//スクロール検知
$(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < $(this).scrollTop()) {
    // is-showクラスをつける
    $(".totop").fadeIn(300);
  } else {
    // 100pxを下回ったらis-showクラスを削除
    $('.totop').fadeOut(300);
  }
});

// $(function() {
//   let pagetop = $('.totop');
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) { //windowの高さが80以上だったら
//       pagetop.show(300); //現れてね
//     } else {
//         pagetop.fadeOut(300);//消えてね
//       }
//       console.log($(window).scrollTop()) //これで確認可能
      
//     });
//         pagetop.click(function () {
//            $('body, html').animate({ scrollTop: 0 }, 500);
//               return false;//このとき処理はすべてが行われなくなります。return falseによって、これ以降の処理及び親要素へのイベントの伝達の両方を無効にするためです。
//    });
// });

$(".tab-menu-link").click(function(e){
  e.preventDefault();
  let tabNunmber = $(this).children("a").attr("data-tab")//data-tabの属性取得
  $(".tab-menu-link").removeClass("is-chosen");//今選ばれているところを消す。
  $(this).addClass("is-chosen")//そして表示
  $(".tab-content").removeClass("is-show-tab-content")//今選ばれているところを消す
  $(`.tab-content[data-tab="${tabNunmber}"]`).addClass("is-show-tab-content")//タブコンテンツのdata-tab属性がクリックしたリンクと一致している所を表示させる
  // console.log(tabNunmber)
})

  $(".q-and-a-question").click(function(e){
    e.preventDefault();
    let number = $(this).attr("data-q-and-a-no")
    let target = $(`.q-and-a-answer[data-q-and-a-no="${number}"]`)
    // $(".q-and-a-answer").slideUp();
    $(target).slideToggle();
    $(".q-and-a-question a::after").css("background","url(./ANSWER/img/minus.png)")
    
  })

  $(".q-a-question").click(function(e){
    e.preventDefault();

    $(this).next().slideToggle(300);
    $(this).toggleClass("is-clicked-answer")
    
  })

  $("#privacy-link").click(function(e){
    e.preventDefault();
    
    $(".modal-bg").fadeIn(500)
    $(".modal-wrap").fadeIn(500)
  })
  
  $(".modal-close").click(function(e){
    e.preventDefault()
    
    $(".modal-bg").fadeOut(500)
    $(".modal-wrap").fadeOut(500)
  })
  $(".modal-bg").click(function(e){
    e.preventDefault()
    
    $(".modal-bg").fadeOut(500)
    $(".modal-wrap").fadeOut(500)
  })

  

  // $(".p-a-question").click(function(e){
  //   e.preventDefault();
  //   $(this).next().slideToggle();
  // })
})


var mySwiper = new Swiper ('.swiper-container', {
  // ここからオプション
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// var mySwiper = new Swiper('.swiper-container', {
//   autoplay: {
//     delay: 1000,
//   },
// });

