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
  $('.wrapper #top').on('inview', function() {
    $('.wrapper #top').addClass("active");
  });
  $('.wrapper #art').on('inview', function() {
    $('.wrapper #art').addClass("active");
  });
  $('.wrapper #about').on('inview', function() {
    $('.wrapper #about').addClass("active");
  });
  $('.wrapper #contact').on('inview', function() {
    $('.wrapper #contact').addClass("active");
  });
});

//ヘッダー コールバック ハンバーガー制御
$(window).on("load", function() {
  $(".header_inner").load("/header.html #header",   function (){
    $('#header .hum').click(function(){
      $("#header").toggleClass("open");
    });
    $('.header_list a').click(function(){
      $("#header").removeClass();
    });
  });
});