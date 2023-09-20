import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-fairy-lights',
  templateUrl: './fairy-lights.component.html',
  styleUrls: ['./fairy-lights.component.scss']
})
export class FairyLightsComponent implements OnInit {
  ngOnInit(): void {
    this.setupGsap();
  }
  setupGsap(){


    gsap.utils.toArray(".light").forEach(star => {
      let maximum = 20
      let minimum =19
     var rando =  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
     console.log(rando)
     swing(star, 10 ,rando);
    // swing(star, 6,1);
    });




   function swing(el:any , rotation:any, duration:any ){

      gsap.timeline({
        scrollTrigger:{
          scrub:0,
        }
      })
      .fromTo(el, {
          rotation: -1 * rotation,
    
        }, {  
          duration: duration,
          rotation: rotation,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        })

    }

  






    // let tl = gsap.timeline();
    // tl.fromTo('.light', {
    //   rotation: -2,

    // }, {  
    //   duration: 0.8,
    //   rotation: 2,

    //   ease: 'power1.inOut',
    //   repeat: -1,
    //   yoyo: true
    // })



  }
}
