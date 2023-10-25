import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  componentLoading= true;


  




ngOnInit(): void {
    this.setupGsap();
  }



  setupGsap(): void {

    // Animate the properties individually
    gsap.utils.toArray(".flyers").forEach(star => {

      tweenProperty(star, "x", 100, window.innerWidth / 1.8);
      tweenProperty(star, "y", 0, (4* (window.innerHeight))-100);
    });


    function tweenProperty(target: any, prop: any, min: any, max: any) {

      var randomDur = gsap.utils.random(3, 6, 0.2, true);
      var randomDelay = gsap.utils.random(0.6, 2, 0.2, true);

      gsap.to(target, {
        [prop]: gsap.utils.random(min, max),
        duration: randomDur(),
        delay: randomDelay(),
        ease: 'none',
        onComplete: tweenProperty,
        onCompleteParams: [target, prop, min, max]
      });

    }



  }



}
