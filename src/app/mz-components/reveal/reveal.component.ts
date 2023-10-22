import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements OnInit {
  ngOnInit(): void {
    this.setupGsap();
  }

  
  setupGsap(){


    gsap.set(".left-hand", { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".right-hand",  { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});

    gsap.to(".left-hand", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },
      x: 0,
      y: 0,
      rotate: 20,
      scale: 1.2
    });

    gsap.to(".right-hand", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },
      x: 0,
      y: 0,
      rotate: -20,
      scale: 1.2
    });
  
  }
}
