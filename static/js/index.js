
function onClickMenu() {

  var display = $(".navbar").css("display")
  var yellow = "none"
  var show = $('.mobile-nav-icon[name="close"]').css("display")



  if (display !== yellow) {
    $('.navbar').css({
      'display': 'none',

    });

  } else {
    $('.navbar').css({
      'display': 'flex',

    });

  }
  if (show == yellow) {


    $('.mobile-nav-icon[name="close"]').css({
      'display': 'flex',
      "color": "white",

    });

    $('.mobile-nav-icon[name="menu"]').css({
      'display': 'none',
    });

  } else {
    $('.mobile-nav-icon[name="close"]').css({
      'display': 'none',

    });
    $('.mobile-nav-icon[name="menu"]').css({
      'display': 'flex',
    });
  }

};


// for modal 


$(document).ready(function() {
  $("#homeModalBtn").click(function() {
    $("#reviewsModal").modal("hide");
    $("#aboutModal").modal("hide");
    $("#shopModal").modal("hide"); // Close the home modal if already open
    window.location.href = "/index.html"; // Navigate to the home page
  });
  
  $("#reviewsModalBtn").click(function() {
    $("#shopModal").modal("hide");
    $("#aboutModal").modal("hide");
    $("#reviewsModal").modal("show");
  });
  
  $("#aboutModalBtn").click(function() {
    $("#shopModal").modal("hide");
    $("#reviewsModal").modal("hide");
    $("#aboutModal").modal("show");
  });
  
  // Event listener for when any modal is closed
  $(".modal").on("hidden.bs.modal", function () {
    // Show the next modal in the queue, if any
    if ($("#homeModal").hasClass("show")) {
      $("#reviewsModal").modal("show");
    } else if ($("#reviewsModal").hasClass("show")) {
      $("#aboutModal").modal("show");
    } else if ($("#aboutModal").hasClass("show")) {
      $("#homeModal").modal("show");
    }
  });
});





// // shop
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button/link, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
//   mySwiper.update(); // Update the swiper object
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   shopmodal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     shopmodal.style.display = "none";
//   }
// }

















// // for cart 
// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");

// cartIcon.onclick = () => {
//   cart.classList.add("active");
// };

// closeCart.onclick = () => {
//   cart.classList.remove("active");
// }



// // Cart working js

// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);

// } else {
//   ready();
// }

//   // making function
//   function ready(){
//     var removeCartButtons = document.getElementsByClassName("cart-remove");
//     console.log(removeCartButtons)
//     for (var i= 0; i < 'removeCardButtons.length' ; i++){
//       var button = removeCartButtons[i]
//       button.addEventListener('click', removeCartItem)
//     }
//    }

//   //  Remove Items From Cart
//   // function removeCartItem(event){
//   //   var buttonClicked = event.target;
//   //   buttonClicked.parentElement.remove();

//   // }

//   $('#product').on('click','.cart-remove',function(){
//     $(this).closest('li').remove();// remove the closest li item row
// });

//   // update total 
//   function updatetotal(){
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     var c
//   }