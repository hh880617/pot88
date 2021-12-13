$(function(){
  // mobile gnb menu
  $('.header__trigger').click(function(){
    $(this).toggleClass('active')
    $('.header__gnb').toggleClass('active')
  })
  $('section, .header__gnb__menu a').click(function(){
    $('.header__gnb').removeClass('active')
    $('.header__trigger').removeClass('active')
  })
  
  $(window).resize(function(){
    if($(window).width() > 768) {    
      $('.header__gnb').removeClass('active')
      $('.header__trigger').removeClass('active')
    }
  })

  //project slick slide
  $('.project__photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dot:false
  })
});