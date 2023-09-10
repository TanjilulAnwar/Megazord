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

    gsap.timeline()
    .fromTo(".msg1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".msg2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    .fromTo(".msg3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    


    

  }
}
