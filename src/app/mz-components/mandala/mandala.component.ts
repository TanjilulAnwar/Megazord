import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-mandala',
  templateUrl: './mandala.component.html',
  styleUrls: ['./mandala.component.scss']
})
export class MandalaComponent implements OnInit {

  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
   // gsap.set('.mandala-img', {xPercent:-50});

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


  }
}
