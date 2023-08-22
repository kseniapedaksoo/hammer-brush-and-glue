

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
       
        // setTimeout(function() {
        //   mybutton.classList.remove('can-touch-active')
        // }, 1000);
      }

  




      /*;(function(){
        let isTouch = false //var to indicate current input type (is touch versus no touch) 
        let isTouchTimer 
        let curRootClass = '' //var indicating current document root class ("can-touch" or "")
    
        function addtouchclass(e){
            clearTimeout(isTouchTimer)
            isTouch = true
            if (curRootClass != 'can-touch'){ //add "can-touch' class if it's not already present
                curRootClass = 'can-touch'
                document.documentElement.classList.add(curRootClass)
            }
            isTouchTimer = setTimeout(function(){isTouch = false}, 500) //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
        }
    
        function removetouchclass(e){
            if (!isTouch && curRootClass == 'can-touch'){ //remove 'can-touch' class if not triggered by a touch event and class is present
                isTouch = false
                curRootClass = ''
                document.documentElement.classList.remove('can-touch')
            }
        }
    
        document.addEventListener('touchstart', addtouchclass, false) //this event only gets called when input type is touch
        document.addEventListener('mouseover', removetouchclass, false) //this event gets called when input type is everything from touch to mouse/ trackpad
    })();*/

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
      Slider for the Our Tutors say section
  */
  

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


