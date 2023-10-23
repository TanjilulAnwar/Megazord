import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  ngOnInit() {
   this.setupGsap();
  }

  setupGsap(): void {

    gsap.set(".mirror-frame", { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".mirror-glass",  { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".bride",  { yPercent: 190, xPercent:-50, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".groom",  { yPercent: 90, xPercent:50, rotate:0, transformOrigin: 'bottom center'});


    gsap.to(".bride", {
      scrollTrigger: {
        trigger: ".trig-niqah",
        scrub: 3
      },

      rotate: 20,
      scale: 1.2
    });

    gsap.to(".groom", {
      scrollTrigger: {
        trigger: ".trig-niqah",
        scrub: 3
      },

      rotate: -20,
      scale: 1.2
    });


  }
}

