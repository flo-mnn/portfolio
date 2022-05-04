
// sections 
let assetsBox = document.getElementById('assets-preview');
let previewRow = assetsBox.querySelector('.row');
let assetsDetail = document.getElementById("item-details");
let hero = document.getElementById('hero');
let about = document.getElementById('about');



let allPreviewItems = document.querySelectorAll('.item-preview-element');
let assetsPreviewBox = document.getElementById('assets-preview');
let previewItems = assetsPreviewBox.querySelectorAll('.item-box');


// HOVER AND GENERAL STYLE EFFECTS AND SCREEN SIZE MANAGEMENT 

// check size screens
let smartphone = window.matchMedia("(max-width: 767px)");
let tablet = window.matchMedia("(max-width: 991px)");
let desktop = window.matchMedia("(min-width: 992px)");

// size screens

let body = document.querySelector('body');


let screenSize = () => {
    if (desktop.matches) {
        // console.log('desktop matches');
        // mouseenter/mouseleave hover effect
        for (let i = 0; i < previewItems.length; i++) {
            const el = previewItems[i];
            el.addEventListener("mouseenter",function(e){
                el.classList.add('hovered');
            });
            el.addEventListener("mouseleave",function(e){
                el.classList.remove('hovered');
            });
            // el.addEventListener('click',displayItem);
        };


    } else if (tablet.matches) {
        // tablet and mobile?
        // fake hover effect on touch screens (small sizes)
        for (let i = 0; i < previewItems.length; i++) {
            const el = previewItems[i];
            el.addEventListener("touchstart",function(e){
                if(!el.classList.contains('hovered')){
                    // e.stopPropagation();
                    // remove hovered from others
                    for (let a = 0; a < previewItems.length; a++) {
                        const element = previewItems[a];
                        element.classList.remove('hovered');
                    };
                    // add hovered to the one needed
                    el.classList.add('hovered');
                } else {
                    el.classList.remove('hovered');
                };
            });
            el.addEventListener('touchend',function(){
                el.classList.remove('hovered');
            });
        };


      if (smartphone.matches) {
        // smartphone
      } else { //tablet
        
      };
    };
  };
  
  
window.addEventListener('resize',function() {
    screenSize();
}) // Attach listener function on state changes (why this comment ? Check from "web dev portfolio template")

// !!!!!!!!!!!!!! ADD ON WINDOWN LOAD
window.onload = function(){
    screenSize();
};



