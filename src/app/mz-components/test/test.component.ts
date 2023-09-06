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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=400', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.from('.box', {
      backgroundColor: '#28a92b',
      rotation: 360,
      scale: 0,
    });
  }
}

