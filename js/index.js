// Menu Br
$('.menu-toggle').on('click', function(){
  console.log('yay');
  $('.nav-main').toggleClass('active');
});

$('.nav-link').children('a').on('click', function(e){
  var section = $(this).data('section');
  $('.section').removeClass('active');
  e.preventDefault();

  $('.nav-main').addClass('loading').removeClass('active');
  //fake loading time
  setTimeout(function(){
    $('.nav-main').removeClass('loading');
    $('.section-' + section).addClass('active');
  }, 1000);
});

// Hide and show button

let show_hide_btn = document.getElementById("show-hide");
let target_btn = document.querySelector("#container .target");

let target = document.getElementById("target")

show_hide_btn.addEventListener("click", () => {
  if(document.querySelector('#container .target').style.display == "none") {
 		document.querySelector('#container .target').style.display = "block"; // targets the class "target" within id "container"
    show_hide_btn.innerHTML = "Hide";
  } else {
    document.querySelector('#container .target').style.display = "none";
    show_hide_btn.innerHTML = "Show";
  }
});

//Logo design page
;(function() {
  jQuery(function($) {

    var $imagesGroup,
        n = 0, // number of images
        c = 0, // current image index (counter 0-based)    

        $prevNext = $("<a id='darkbox_prev'/><a id='darkbox_next'/>").on("touchstart mousedown", function(e) {
          e.preventDefault();
          e.stopPropagation();
          var isNext = this.id === "darkbox_next";
          c = isNext ? ++c : --c;
          showImage();
        }),

        $darkbox = $("<div/>", {
          id: "darkbox",
          append: $prevNext,
          appendTo : "body"
        }),

        $darkboxClose = $("<a/>", {
          id: "darkbox_close",
          appendTo: $darkbox,
          on: {
            "touchstart mousedown" : function(e) {
              e.preventDefault();
              $darkbox.removeClass("show");
            }
          }
        }),

        $darkboxDescription = $("<div/>", {
          id: "darkbox_description",
          appendTo : $darkbox
        }),

        $darkboxStats = $("<div/>", {
          id: "darkbox_stats",
          appendTo : $darkbox
        });

    function showImage() {

      // Prevent counter going out of bounds
      c = c < 0 ? n - 1 : c % n;

      // Get size of window so that we can define if
      // background-size needs to be "contain" or "auto".
      var doc  = document.documentElement,
          docW = Math.max(doc.clientWidth,  window.innerWidth  || 0),
          docH = Math.max(doc.clientHeight, window.innerHeight || 0),
          $cur = $imagesGroup.eq(c),
          description = $cur.data("darkbox-description"),
          src = $cur.data("darkbox");
					
      $darkbox.addClass("show spinner");
      $darkboxDescription.html(description);
      $darkboxStats.html(n < 2 ? "" : (c+1) +"/"+ n);

      $("<img/>").on("load", function() {
        var bigger = (this.width > docW || this.height > docH),
				wwidth =  window.innerWidth ;
        $darkbox.removeClass("spinner").css({
          backgroundImage: "url('" + this.src + "')",
          backgroundSize: bigger ? "contain" : "auto", 
					backgroundPositionY: wwidth >= 415 ? "greater" : 0100
        });
      }).attr("src", src);
    }
		
    // Call darkbox
    $(document).on("click", "[data-darkbox],[data-darkbox-group]", function(e) {

      var src = $(this).data("darkbox"),
          isDummy = !src, // (is just a link calling a group)
          groupID = $(this).data("darkbox-group");

      $imagesGroup = !groupID ? $(this) : $('[data-darkbox-group="'+ groupID +'"]').filter("[data-darkbox]");
      n = $imagesGroup.length;
      c = isDummy ? 0 : $imagesGroup.index( this );

      $prevNext.toggle(n>1); // Hide prev/next if we have a single image
      $darkbox.css({backgroundImage:"none"});

      showImage(); // aand, ACTION!
    });

    // Keyboard navigation
    $(document).on("keyup", function (e) {

      var k = e.which;

      if (k === 27) /*ESC */ {
        $darkbox.removeClass("show");
      }
      if (k === 37) /*LEFT*/ {
        --c;
        showImage();
      }
      if (k === 39) /*RIGHT*/ {
        ++c;
        showImage();
      }
    });    
  });
}());

$(function() {
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
});

//view info buttons for animation-pge and web-design-pge
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.opacity === "0.03") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0.03";
  }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.opacity === "0.03") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0.03";
  }
}

//WEBSITE PAGE VIEW BTN
function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.opacity === "0.03") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0.03";
  }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.opacity === "0.03") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0.03";
  }
}

function myFunction5() {
    var x = document.getElementById("myDIV5");
    if (x.style.opacity === "0.03") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0.03";
  }
}