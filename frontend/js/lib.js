window.onscroll = function() {
  var
  scrolled = window.pageYOffset || document.documentElement.scrollTop,
  screenHeight = window.screen.height,
  downScreen = scrolled + screenHeight,
  partfolioArticle = document.querySelectorAll('.section--partfolio__article'),
  partfolioLength = partfolioArticle.length - 1;


  for(var i = 0; i < partfolioLength; i++){
    scrolledPartfolio(i);
  }

  function scrolledPartfolio(i){
    var doubleI = i;
    doubleI++;
    if( downScreen >= partfolioArticle[i].offsetTop + partfolioArticle[i].offsetHeight ){
      partfolioArticle[doubleI].style.marginTop = -screenHeight + 88 + 'px';
    }else{
        partfolioArticle[doubleI].style.marginTop = 0 + 'px';
    }
  }
  
}
