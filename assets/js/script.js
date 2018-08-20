//アンカーリンク スムーズに
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(document).ready( function(){
  $('.clip_left').addClass("on");
});

$(function(){
  $('.more .btn').click(function(){
    $(this).fadeOut();
    $('.more .detail').fadeIn(1000).css('display','flex');
  });
});

$(function(){
  $('.wrapper #top').on('inview', function() {
    $('.wrapper #top').addClass("active");
  });
  $('.wrapper #art').on('inview', function() {
    $('.wrapper #art').addClass("active");
    $('#art li').each(function(i) {
      $(this).delay(500 * i).animate({opacity:1,top:0});
    });
  });
  $('.wrapper #about').on('inview', function() {
    $('.wrapper #about').addClass("active");
    $('#about').delay(4000).queue(function(){
      $('#about').addClass("slide");
    });
    $('#about .skill').delay(6000).queue(function(){
      $('#about .skill').addClass("on");
    });
  });
  $('.wrapper #contact').on('inview', function() {
    $('.wrapper #contact').addClass("active");
  });
});

$(document).ready( function(){
  $('#loding').addClass("active");
  $('#loding .text02').delay(4000).queue(function(){
    $('#loding').addClass("on");
  });
  $('#loding').delay(8000).queue(function(){
    $('#loding').css({'opacity':'0','transition':'all 3s ease'});
    $('.main').fadeIn(1000);
  });
});

$(function(){
  $('#header .hum').click(function(){
    $("#header").toggleClass("open");
  });
});