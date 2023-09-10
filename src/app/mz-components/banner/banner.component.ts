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
      const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1+(i*0.3), autoAlpha: 1, y: 0});
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });

    gsap.timeline()
    .fromTo(".msg1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".msg2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    .fromTo(".msg3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
//.fromTo(".msg2", { y: -10, opacity: 0}, {opacity: 1, y: 0, duration: 1})
   // .fromTo(".msg3", { x: -10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
  //  .fromTo("#f", { x: 10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
   // .fromTo("#s2", { opacity: 0}, {opacity: 1, rotation:360, duration: 1})
   // .fromTo("#bracket", { x: -53}, {x:0, ease: "none", duration: 5}, 0)
    

  }


}
