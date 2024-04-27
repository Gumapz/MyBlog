const header = document.querySelector("header")

window.addEventListener('scroll', ()=>{
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navigation = document.querySelector('.navigation');

    menuIcon.classList.toggle('open');
    navigation.classList.toggle('open');
}


// blog

var dropdown2 = document.getElementById("dropdown2") 
var dropdown1 = document.getElementById("dropdown1")

function tonggleButton1(){
    
    if (dropdown1.classList.contains("tab-image")){
        dropdown1.classList.remove("tab-image")
        dropdown2.classList.add("tab-video")
        // adjust
        var image = document.getElementById("tab-image")
        dropdown1.style.top = (image.offsetTop + image.offsetHeight)+ "px";
        dropdown1.style.left = image.offsetLeft + "px";
    }else{
        dropdown1.classList.add("tab-image")
    }
}

function tonggleButton2(){
    
    if (dropdown2.classList.contains("tab-video")){
        dropdown2.classList.remove("tab-video")
        dropdown1.classList.add("tab-image")
        // adjust
        var video = document.getElementById("tab-video")
        dropdown2.style.top = (video.offsetTop + video.offsetHeight)+ "px";
        dropdown2.style.left = video.offsetLeft + "px";
    }else{
        dropdown2.classList.add("tab-video")
    }
}


// Event listener for section buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sectionBtn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Hide all sections
        document.querySelectorAll('.blog-page').forEach(function(section) {
          section.classList.remove('active');
        });
        // Display the selected section
        dropdown1.classList.add("tab-image")
        dropdown2.classList.add("tab-video")
        document.getElementById(this.getAttribute('data-section')).classList.add('active');
      });
    });
  });




  document.addEventListener('DOMContentLoaded', function () {
        var videos = document.querySelectorAll('.blo .vd video');
        var currentVideo = null;

        videos.forEach(function(video) {
            video.addEventListener('play', function () {
                // Pause the previously playing video
                if (currentVideo !== null && currentVideo !== video && !currentVideo.paused) {
                    currentVideo.pause();
                }
                currentVideo = video;
            });
        });
    });




    document.addEventListener('DOMContentLoaded', () => {
        const likeBtns = document.querySelectorAll('.like i.bx-like');
        const dislikeBtns = document.querySelectorAll('.like i.bx-dislike');
        const likeCounts = document.querySelectorAll('.likeCount');
        const dislikeCounts = document.querySelectorAll('.dislikeCount');
    
        likeBtns.forEach((likeBtn, index) => {
            let likeCounter = 0;
            let dislikeCounter = 0;
    
            likeBtn.addEventListener('click', () => {
                if (!likeBtn.classList.contains('clicked')) {
                    likeBtn.classList.add('clicked');
                    dislikeBtns[index].classList.remove('clicked');
                    likeCounter++;
                    dislikeCounter = Math.max(0, dislikeCounter - 1);
                    updateCounters(index);
                } else {
                    likeBtn.classList.remove('clicked');
                    likeCounter--;
                    updateCounters(index);
                }
            });
    
            dislikeBtns[index].addEventListener('click', () => {
                if (!dislikeBtns[index].classList.contains('clicked')) {
                    dislikeBtns[index].classList.add('clicked');
                    likeBtn.classList.remove('clicked');
                    dislikeCounter++;
                    likeCounter = Math.max(0, likeCounter - 1);
                    updateCounters(index);
                } else {
                    dislikeBtns[index].classList.remove('clicked');
                    dislikeCounter--;
                    updateCounters(index);
                }
            });
    
            function updateCounters(index) {
                likeCounts[index].textContent = likeCounter;
                dislikeCounts[index].textContent = dislikeCounter;
            }
        });
    });
    
   
    // Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("BLOG1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal1.style.display = "block";
    }
}
function closeModal1() {
    var modal1 = document.getElementById("myModal1");
    modal1.style.display = "none";
}


   // Get the modal
   var modal2 = document.getElementById("myModal2");

   // Get the button that opens the modal
   var buttons = document.getElementsByClassName("BLOG2");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close2")[0];
   
   // When the user clicks on a button, open the modal and populate form fields
   for (var i = 0; i < buttons.length; i++) {
       buttons[i].onclick = function () {
           var row = this.parentNode.parentNode; // Get the parent row of the clicked button
           modal2.style.display = "block";
       }
   }
   function closeModal2() {
       var modal2 = document.getElementById("myModal2");
       modal2.style.display = "none";
   }

      // Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("BLOG3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal3.style.display = "block";
    }
}
function closeModal3() {
    var modal3 = document.getElementById("myModal3");
    modal3.style.display = "none";
}

   // Get the modal
   var modal4 = document.getElementById("myModal4");

   // Get the button that opens the modal
   var buttons = document.getElementsByClassName("BLOG4");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close4")[0];
   
   // When the user clicks on a button, open the modal and populate form fields
   for (var i = 0; i < buttons.length; i++) {
       buttons[i].onclick = function () {
           var row = this.parentNode.parentNode; // Get the parent row of the clicked button
           modal4.style.display = "block";
       }
   }
   function closeModal4() {
       var modal4 = document.getElementById("myModal4");
       modal4.style.display = "none";
   }

      // Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("BLOG5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal5.style.display = "block";
    }
}
function closeModal5() {
    var modal5 = document.getElementById("myModal5");
    modal5.style.display = "none";
}

   // Get the modal
   var modal6 = document.getElementById("myModal6");

   // Get the button that opens the modal
   var buttons = document.getElementsByClassName("BLOG6");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close6")[0];
   
   // When the user clicks on a button, open the modal and populate form fields
   for (var i = 0; i < buttons.length; i++) {
       buttons[i].onclick = function () {
           var row = this.parentNode.parentNode; // Get the parent row of the clicked button
           modal6.style.display = "block";
       }
   }
   function closeModal6() {
       var modal6 = document.getElementById("myModal6");
       modal6.style.display = "none";
   }

      // Get the modal
var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("BLOG7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal7.style.display = "block";
    }
}
function closeModal7() {
    var modal7 = document.getElementById("myModal7");
    modal7.style.display = "none";
}

   // Get the modal
   var modal8 = document.getElementById("myModal8");

   // Get the button that opens the modal
   var buttons = document.getElementsByClassName("BLOG8");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close8")[0];
   
   // When the user clicks on a button, open the modal and populate form fields
   for (var i = 0; i < buttons.length; i++) {
       buttons[i].onclick = function () {
           var row = this.parentNode.parentNode; // Get the parent row of the clicked button
           modal8.style.display = "block";
       }
   }
   function closeModal8() {
       var modal8 = document.getElementById("myModal8");
       modal8.style.display = "none";
   }

  // Get the modal
  var modal9 = document.getElementById("myModal9");

  // Get the button that opens the modal
  var buttons = document.getElementsByClassName("BLOG9");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close9")[0];
  
  // When the user clicks on a button, open the modal and populate form fields
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
          var row = this.parentNode.parentNode; // Get the parent row of the clicked button
          modal9.style.display = "block";
      }
  }
  function closeModal9() {
      var modal9 = document.getElementById("myModal9");
      modal9.style.display = "none";
  }

  // Get the modal
  var modal10 = document.getElementById("myModal10");

  // Get the button that opens the modal
  var buttons = document.getElementsByClassName("BLOG10");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close10")[0];
  
  // When the user clicks on a button, open the modal and populate form fields
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
          var row = this.parentNode.parentNode; // Get the parent row of the clicked button
          modal10.style.display = "block";
      }
  }
  function closeModal10() {
      var modal10 = document.getElementById("myModal10");
      modal10.style.display = "none";
  }