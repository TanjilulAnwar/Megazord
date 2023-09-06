import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
    const boxes = gsap.utils.toArray('.letter');

    boxes.forEach((box:any, i) => {
      const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1+(i*1), autoAlpha: 1, y: 0});
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });



  }


}
