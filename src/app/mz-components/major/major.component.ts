import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);





@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent implements OnInit {

  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
// bismillah part
    gsap.timeline()
    .fromTo(".r1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r4", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r5", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r6", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r7", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r8", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r9", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    // .fromTo(".msg1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 2})
    // .fromTo(".msg2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    // .fromTo(".msg3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    // .fromTo(".mandala", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
   
//



//mandala part
    gsap.timeline({
      scrollTrigger:{
       // trigger: ".mandala-img'",
        pin: true,
        scrub:1,
        start: 'top top',
        end:'+=10000',
      }
    })
    .to('.mandala-img', {
      rotation:360*6,
      duration:1, ease:'none',
    })


    //

//parallax
/* ------Great Horned Owl Sequence------  */

gsap.set(".dotsBlue", { yPercent: -2, xPercent:-5});
gsap.set(".owlHorned", { yPercent: 0, xPercent:5});

gsap.to(".dotsBlue", {
  yPercent: -2,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 0,
  xPercent:-5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});





//paRALLAX


   
  }



}
