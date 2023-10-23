import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  this.setupGsap();
  }

  setupGsap(): void {



// timeline appearence


    gsap.timeline()
    .fromTo(".r1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".r2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".r3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".r4", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r5", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r6", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r7", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r8", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r9", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r10", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r11", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r12", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r13", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r14", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r15", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r16", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r17", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r18", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r19", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r20", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r21", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r22", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
   




//mandala rotation
    gsap.timeline({
      scrollTrigger:{
        pin: true,
        scrub:1,
        // start: 'top top',
        // end:'+=10000',
      }
    })
    .to('.mandala-img', {
      rotation:360*3,
      duration:1, ease:'none',
    })


//

//parallax

gsap.set(".couple", { yPercent: -2, xPercent:-5});
gsap.set(".coupleBackground", { yPercent: 0, xPercent:5});

gsap.to(".couple", {
  yPercent: -2,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


gsap.to(".coupleBackground", {
  yPercent: 0,
  xPercent:-5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


//parallax





   ///end
  }



}

















