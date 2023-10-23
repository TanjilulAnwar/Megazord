import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { wrapYoyo } from 'gsap/all';

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

var y = 200
    gsap.set(".left-hand", { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".right-hand",  { yPercent: 0, xPercent:0, rotate:0, transformOrigin: 'bottom center'});
    gsap.set(".lv1",  { yPercent: y, xPercent:0, rotate:20, transformOrigin: 'bottom center'});
    gsap.set(".lv2",  { yPercent: y, xPercent:0, rotate:10, transformOrigin: 'bottom center'});
    gsap.set(".lv3",  { yPercent: y, xPercent:0, rotate:5, transformOrigin: 'bottom center'});
    gsap.set(".lv4",  { yPercent: y, xPercent:0, rotate:-5, transformOrigin: 'bottom center'});
    gsap.set(".lv5",  { yPercent: y, xPercent:0, rotate:-10, transformOrigin: 'bottom center'});
    gsap.set(".lv6",  { yPercent: y, xPercent:0, rotate:-20, transformOrigin: 'bottom center'});


    gsap.to(".lv1", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: 30,
      scale: 1.2
    });
    gsap.to(".lv2", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: 20,
      scale: 1.2
    });
    gsap.to(".lv3", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: 10,
      scale: 1.2
    });
    gsap.to(".lv4", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: -10,
      scale: 1.2
    });

    gsap.to(".lv5", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: -20,
      scale: 1.2
    });
    gsap.to(".lv6", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },

      rotate: -30,
      scale: 1.2
    });
    gsap.to(".left-hand", {
      scrollTrigger: {
        trigger: ".trig-mehedi",
        scrub: 2
      },
      x: 0,
      y: 0,
      rotate: 10,
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
