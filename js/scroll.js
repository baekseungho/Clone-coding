let lastPoint = 0;
let scrolling = false;

window.addEventListener('scroll', (e) => {
  e.preventDefault();
  if(scrolling == false) {
    console.log(scrolling);
    scrolling = true;

    let currStep = Math.round(window.scrollY / window.innerHeight);
    let forwStep = 0;

    if(window.scrollY > lastPoint) {
      forwStep = (currStep+1) *  Math.round(window.innerHeight);
    } else {
      forwStep = (currStep-1) *  Math.round(window.innerHeight);
    }
    window.scrollTo({top: forwStep, behavior: 'smooth'});

    setTimeout(() => {
      scrolling = false;

      let position1 = $('.slide-item').offset().top;
      // console.log(position1);
      let position2 = $(window).scrollTop();
      // console.log(position1 - position2);

      if((position1 - position2)==0){
        $('#model').html('Model Y');
        $("#application").show();
        $('.order').show();
      }else if(position1 - position2<0&&(position1 - position2)>=-969){
        $('#model').html('Model 3');
        $("#application").show();
        $('.order').show();
      }else if((position1 - position2)<=-969&&(position1 - position2)>=-1938){
        $('#model').html('Model X');
        $("#application").show();
        $('.order').show();
      }else if((position1 - position2)<=-1938&&(position1 - position2)>=-2907){
        $('#model').html('Model S');
        $("#application").html('시승 신청');
        $('#application').css('border-bottom','1px solid#333');
        $('.detail').css('background-color','rgba(255, 255, 255, 0.6)');
        $('.detail').css('color','#333');
        $('.order-box').css('bottom','125px')
        $('.order').show();
      }else if((position1 - position2)<=-2907&&(position1 - position2)>=-3876){
        $('#model').html('태양광과 Powerwall');
        $("#application").html('모든 전력을 공급');
        $('#application').css('border-bottom','none');
        $('.detail').css('background-color','rgba(0, 0, 0, .6)');
        $('.detail').css('color','#fff');
        $('.order-box').css('bottom','170px')
        $('.order').hide();
      }

    }, 800);
  }
  lastPoint = window.scrollY;
});