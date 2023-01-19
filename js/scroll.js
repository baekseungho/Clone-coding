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
      }else if((position1 - position2)==-969){
        $('#model').html('Model 3');
        $("#application").show();
        $('.order').show();
      }else if((position1 - position2)==-1938){
        $('#model').html('Model X');
        $("#application").show();
        $('.order').show();
      }else if((position1 - position2)==-2907){
        $('#model').html('Model S');
        $("#application").show();
        $('.order').show();
      }else if((position1 - position2)==-3876){
        $('#model').html('태양광과 Powerwall');
        $("#application").hide();
        $('.order').hide();
      }

    }, 800);
  }
  lastPoint = window.scrollY;
});