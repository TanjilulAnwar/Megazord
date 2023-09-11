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
    .fromTo(".msg1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    .fromTo(".msg2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    .fromTo(".msg3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
   
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
gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: 0});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 0,
  xPercent:-10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});



//paRALLAX


   
  }



}
