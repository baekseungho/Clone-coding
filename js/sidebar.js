$('#open-sidebar-btn').on('click', function(){
  $('.sidebar').addClass('is-active');
  $('.overlay').fadeIn();
  $('.slide-item').css('filter','blur(5px)');
});
$('#close-sidebar-btn').on('click', function(){
  $('.sidebar').removeClass('is-active');
  $('.overlay').fadeOut('slow');
  $('.slide-item').css('filter','blur(0)');
});
$('.overlay').on('click', function(){
  $('.sidebar').removeClass('is-active');
  $('.overlay').fadeOut('slow');
  $('.slide-item').css('filter','blur(0)');
});