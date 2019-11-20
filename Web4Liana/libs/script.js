$(document).ready(function(){
  $(".image").click(function(){
    let imga = $(this);
    let srca = imga.attr('src');
    $("body").append("<div class='popup'>"+
      "<div class='popup_bg'>"+
      "<img src='"+srca+"' class='popup_img'/>"+
      "</div></div>");
    $(".popup").fadeIn(300);
    $(".popup_bg").click(function(){
      $(".popup").fadeOut(200);
      setTimeout(function(){
        $(".popup").remove();
      }, 100);
      });
    });

  $(".firstAcc").click(function(){
    $(".sliderInner").remove();
    $(".sliderInnerAfter").remove();
    $(".slider").append("<img class='sliderInnerAfter row'"+
      " src='libs/maket/slider1.jpg'>");
    $(".sliderInnerAfter").fadeIn(500);
  })

  $(".secondAcc").click(function(){
    $(".sliderInner").remove();
    $(".sliderInnerAfter").remove();
    $(".slider").append("<img class='sliderInnerAfter row'"+
      " src='libs/maket/slider2.jpg'>");
    $(".sliderInnerAfter").fadeIn(500);
  })

  $(".thirdAcc").click(function(){
    $(".sliderInner").remove();
    $(".sliderInnerAfter").remove();
    $(".slider").append("<img class='sliderInnerAfter row'"+
      " src='libs/maket/slider3.jpg'>");
    $(".sliderInnerAfter").fadeIn(500);
  })

  $(".fourAcc").click(function(){
      $(".sliderInner").remove();
      $(".sliderInnerAfter").remove();
      $(".slider").append("<img class='sliderInnerAfter row'"+
        " src='libs/maket/slider4.jpg'>");
      $(".sliderInnerAfter").fadeIn(500);
  })

  let btnTop = $(".btnTop");
  let headLine = $(".headLine")

  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 50){
      btnTop.fadeIn(200);
    }else{
      btnTop.fadeOut(200);
    }
  })

  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 140){
      headLine.fadeIn(100);
    }else{
      headLine.fadeOut(100);
    }
  })

  let dist1 = $(".dist1").offset().top;
  let dist2 = $(".dist2").offset().top;


  btnTop.click(function(){
    $("html,body").animate({scrollTop:0},400);
  })

  $(".btn0").click(function(){
    $("html,body").animate({scrollTop:0},400);
  })

  $(".btn1").click(function(){
    $("html,body").animate({scrollTop:dist1},400);
  })

  $(".btn2").click(function(){
    $("html,body").animate({scrollTop:dist2},400);
  })
  

});


