$('#open-sidebar-btn').on('click', function(){
  $('.sidebar').addClass('is-active');
  $('.overlay').fadeIn();
  $('.slide-item').css('filter','blur(5px)');
  $('.product').css('filter','blur(5px)');
  $('.gnb-nav').css('filter','blur(5px)');
  $('.order-box').css('filter','blur(5px)');
  $('.fnb-nav').css('filter','blur(5px)');
});
$('#close-sidebar-btn').on('click', function(){
  $('.sidebar').removeClass('is-active');
  $('.overlay').fadeOut('slow');
  $('.slide-item').css('filter','blur(0)');
  $('.product').css('filter','blur(0)');
  $('.gnb-nav').css('filter','blur(0)');
  $('.order-box').css('filter','blur(0)');
  $('.fnb-nav').css('filter','blur(0)');

});
$('.overlay').on('click', function(){
  $('.sidebar').removeClass('is-active');
  $('.overlay').fadeOut('slow');
  $('.slide-item').css('filter','blur(0)');
  $('.product').css('filter','blur(0)');
  $('.gnb-nav').css('filter','blur(0)');
  $('.order-box').css('filter','blur(0)');
  $('.fnb-nav').css('filter','blur(0)');
});