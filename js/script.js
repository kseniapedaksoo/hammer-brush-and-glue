

(function () {

  'use strict'



  /* 
      Humburger menu
  */

  let hamburger = document.querySelector(".hamburger");
  let nav = document.querySelector("nav");
  hamburger.onclick = function () {
    nav.classList.toggle("active");
  }

  let menuOptions = document.querySelectorAll('nav > ul > li')

  for(let i=0;i<menuOptions.length; i++){
    menuOptions[i].onclick = function () {
      nav.classList.toggle("active");
    }
  }


  /*
    Go to the top button
  */
      // Get the button
      let mybutton = document.getElementById("myBtn");
        mybutton.addEventListener("click", topFunction)

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
          mybutton.classList.remove('can-touch-active')
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction(e) {
        if(e.pointerType == undefined || !e.pointerType === 'mouse'){
          //TOUCH
          mybutton.classList.add('can-touch-active')
          setTimeout(function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }, 200)
        }else{
          //MOUSE
          setTimeout(function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }, 100)
  
        }
       
      }


  /* 
    Play - Pause button for video 
  */
  

  let playPauseButton = document.getElementById("vidButton");
    playPauseButton.addEventListener("click", playPause);
    let myVideo = document.getElementById("myVideo");
    function playPause() { 
        if (myVideo.paused) {
            myVideo.play();
            playPauseButton.innerHTML = "<img alt=\"pause\" src=\"images/icons/pause.webp\">";
            }
        else  {
            myVideo.pause(); 
            playPauseButton.innerHTML = "<img alt=\"play\" src=\"images/icons/play.webp\">";
            }
    } 
  


  /* 
      Slider for the What Children say section
  */
    slider("children-say")

 /* 
      Slider for the Gallery section
  */
    slider("gallery")


  /* 
      Why choose us slider
  */   
    slider("why-choose-us")



  /* 
      Accordion for Expand Ditails 
  */

  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


 
 

})();


