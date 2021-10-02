function openHome() {
    window.location = "index.html";
}
function openDetails() {
    window.location = "StoryDetails.html";
}
function openDetails2() {
    window.location = "StoryDetails2.html";
}


  function openDetails(productImage, productTitle) {
    localStorage.setItem('productTitle', productTitle)
    localStorage.setItem('productImage', productImage)
    window.location = 'StoryDetails.html';
  }

  let slidePosition = 0;
  const slides = document.getElementsByClassName("carousel__item");
  const totalSlides = slides.length;
  
  
  function updateSlidesPosition(){
      for(let slide of slides){
          slide.classList.remove("carousel__item--visible");
          slide.classList.add("carousel__item--hidden");
      }
      slides[slidePosition].classList.add("carousel__item--visible");
  }
  
  function moveToNextSlide(){
      
      if (slidePosition === totalSlides -1){
          slidePosition = 0;
      } else {
          slidePosition++;
      }
      updateSlidesPosition();
  }
  
  function moveToPrevSlide(){
      if (slidePosition === 0){
          slidePosition = 4;  
        } else {
            slidePosition--;
        }
      updateSlidesPosition();
  }
