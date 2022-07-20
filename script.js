
// var rect = canvas.parentNode.getBoundingClientRect();
// if(window.innerWidth <= 1035) {

// }
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

function changetobg(event) {
  event.target.classList.remove("gradientBorder");
  event.target.classList.add("gradientBg");
  event.target.classList.remove('py-2');
  event.target.classList.add('py-3');
  event.target.classList.remove('px-7');
  event.target.classList.add('px-8');
}
function changefrombg(event) {
  event.target.classList.remove("gradientBg");
  event.target.classList.add("gradientBorder");
  event.target.classList.remove('py-3');
  event.target.classList.add('py-2');
  event.target.classList.remove('px-8');
  event.target.classList.add('px-7');
}
function changetobg2(event) {
  event.target.classList.remove("callAction");
  event.target.classList.add("callAction2");
  event.target.classList.add('py-2');
}
function changefrombg2(event) {
  event.target.classList.remove("callAction2");
  event.target.classList.add("callAction");

}
function incEltNbr(id) {
  if (id == "nbr3") {
    speed = 10
  } else {
    speed = 15
  }
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i + "%";
    setTimeout(function () {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

var w = window.innerWidth;
if(10 >= 1000) {
  gsap.registerPlugin(ScrollTrigger)
  const timeline = gsap.timeline({ defaults: { duration: 1 } })
  // timeline.from('.titleHero', { x: '500%', ease: 'expo.inOut' })
  timeline
  .fromTo('.hello1', {x:'50%', y:'50%', opacity:0, duration:.5, delay:4},{x:'50%', y:'0%', opacity:1, duration:.5,ease:"back.out(2)"})
  .fromTo('.name', {x:'50%', y:'50%', opacity:0, duration:.5},{x:'50%', y:'0%', opacity:1, duration:.6,ease:"back.out(3)"})
  .to('.hello1', { x: '0%', ease: 'expo.inOut' , duration:1.5})
  .to('.name', { x: '0%', ease: 'expo.inOut' , duration:1.5}, '<')
  .from('.navbar', { y: '-100%', ease: 'expo.inOut', duration:1}, '<1')
  .fromTo('.description', {opacity:0}, {opacity:1})
  //.fromTo('.downarrow', {scaleX:.5,  scaleY:.5}, {scaleX:1, scaleY:1, duration:.1}, '<')
  .fromTo('.downarrow', {opacity:0}, {opacity:1,duration:.3}, '<', )
  .fromTo('.rocket', {opacity:0}, {opacity:1, ease:'power.in', duration:.9}, '<')
  .from('.left', {x:'-100%', y:'-50%',duration:.6}, '<')
  .from('.right', {x:'100%', y:'50%',duration:.6}, '<');
  
  gsap.utils.toArray(".pinthis").forEach((panel, i) => {
    if(i==1) {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        end: 'bottom',
        pin: true, 
        pinSpacing: false,
  
  
      });
    }else if(i==0){
      ScrollTrigger.create({
        trigger: panel,
        start: "top", 
        end: "bottom",
        pin: true, 
        pinSpacing: false,
  
  
  
        
      });
    }else {
      ScrollTrigger.create({
        trigger: panel,
        start: "top", 
        end: "bottom",
        pin: true, 
        end: "-=10%",
        start: "-=10%",
        pinSpacing: false,
  
        
      });
    }
  });
  
}

// ScrollTrigger.create({
//   trigger: '.stats',
//   onEnter: () => {
//     incEltNbr("nbr1");
//     incEltNbr("nbr2");
//     incEltNbr("nbr3");
//   } ,
//   onEnterBack: () => {
//     incEltNbr("nbr1");
//     incEltNbr("nbr2");
//     incEltNbr("nbr3");
//   }  
// });
// gsap.to('.stats', {
//   scrollTrigger: {
//     trigger: '.stats',
//     onEnter: () => {
//       incEltNbr("nbr1");
//       incEltNbr("nbr2");
//       incEltNbr("nbr3");
//     } ,
//     onEnterBack: () => {
//       incEltNbr("nbr1");
//       incEltNbr("nbr2");
//       incEltNbr("nbr3");
//     },
//   },
// })
// ScrollTrigger.create({
//   snap: 1/6 // snap whole page to the closest section!
// });
// const tl = gsap.timeline()
// tl.fromTo('.saroga', 
// {scrollTrigger: {
//   trigger: ".saroga",
//   pin: true,
//   scrub:1 ,
//   markers: true,
// end: "+=40%",
// },x:'100%'}, {x:'100%'})

// // let sections = gsap.utils.toArray(".panel");

// gsap.to('.lmm', {
//   scrollTrigger: {
//     trigger: ".lmm",
//     toggleActions: "restart",
//     pin: true,
//     scrub:1 ,
//     markers: true,
//   end: "+=50%",
//   onLeave: () => {
  
//     gsap.to('.saroga', {
      
//       x:'-100%'
//     });
//   },
//   onEnter: () => {
  
//     gsap.to('.saroga', {
      
//       x:'-0%'
//     });
//   },
//   }
// });
// $(document).ready(function() {
//   //variable for the 'stroke-dashoffset' unit
//   var $dashOffset = $(".path").css("stroke-dashoffset");
//   //on a scroll event - execute function
//   $(window).scroll(function() {
//     //calculate how far down the page the user is 
//     var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
//     //convert dashoffset pixel value to interger
//     var $newUnit = parseInt($dashOffset, 10);
//     //get the value to be subtracted from the 'stroke-dashoffset'
//     var $offsetUnit = $percentageComplete * ($newUnit / 50);
//     //set the new value of the dashoffset to create the drawing effect
//     $(".path").css("stroke-dashoffset", $newUnit - $offsetUnit);
    
// });
// });