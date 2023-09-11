import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-mandala-reverse',
  templateUrl: './mandala-reverse.component.html',
  styleUrls: ['./mandala-reverse.component.scss']
})

export class MandalaReverseComponent implements OnInit {

  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
   // gsap.set('.mandala-img2', {xPercent:100});

    gsap.timeline({
      scrollTrigger:{
       // trigger: ".mandala-img'",
        pin: true,
        scrub:1,
        start: 'top top',
        end:'+=10000',
      }
    })
    .to('.mandala-img2', {
      rotation:360*-6,
      duration:1, ease:'none',
    })


    


  }
}