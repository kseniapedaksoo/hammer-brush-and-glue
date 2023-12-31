

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

  for (let i = 0; i < menuOptions.length; i++) {
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
  window.onscroll = function () { scrollFunction() };

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
    if (e.pointerType == undefined || !e.pointerType === 'mouse') {
      //TOUCH
      mybutton.classList.add('can-touch-active')
      setTimeout(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 200)
    } else {
      //MOUSE
      setTimeout(function () {
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
      playPauseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 512 512\"><title>Pause</title><path d=\"M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z\" style=\"fill:#3a4887;stroke:#fff;stroke-miterlimit:10;stroke-width:32px\"/><line x1=\"208\" y1=\"192\" x2=\"208\" y2=\"320\" style=\"fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"/><line x1=\"304\" y1=\"192\" x2=\"304\" y2=\"320\" style=\"fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"/></svg>";
    }
    else {
      myVideo.pause();
      playPauseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 512 512\"><title>Play</title><circle cx=\"256\" cy=\"256\" r=\"192\" style=\"fill:#3a4887;stroke:#fff;stroke-miterlimit:10;stroke-width:32px\"/><polygon points=\"203 166 350 256 206 346 206 157\" style=\"fill:#fff;\"/></svg>";
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


  /* 
      Form
  */

  /* 
      This snippet adds an event listener to the form, listening to when submit action will be performed.
      Once submit button is pressed, the event will activate and the code will execute send-mail.php script
      It will then wait until the script has completed executed (it waits via 'await' keyword)
      Upon completion of send-mail.php we are parsing out the json response and checking whether
      or not an email has been sent successfully. If the email has been sent succesfully then we are 
      displaying successful notification, alternatively, we are displaying error notification. 
      We are also using setTimeout to remove notification and bring back the ENQUIRE button
  */

  document.addEventListener('DOMContentLoaded', function () {
    const enquireButton = document.getElementById('enquire-submit');
    const form = document.querySelector('.contact-form');
    const sentMessage = document.querySelector('.request-sent');
    const errorMessage = document.querySelector('.request-error');

    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const response = await fetch('send-mail.php', {
        method: 'POST',
        body: formData
      });

      const jsonResponse = await response.json();

      if (jsonResponse.is_email_sent) {
        enquireButton.style.display = 'none'
        sentMessage.style.display = 'block';
      } else {
        enquireButton.style.display = 'none'
        errorMessage.style.display = 'block';
      }
      setTimeout(function () {
        enquireButton.removeAttribute('style')
        sentMessage.style.display = 'none';
        errorMessage.style.display = 'none';
      }, 3000)
    });
  });


})();


