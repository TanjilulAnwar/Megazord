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
    gsap.utils.toArray(".light").forEach((star:any) => {
      let maximum = 5
      let minimum =10
     var rando =  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
     console.log(rando)

     gsap.from(star, {duration: rando, rotation: -1*rando, transformOrigin: '50% 0px', ease: 'elastic.out( 3, 0.1)', delay: 1, repeat: -1})
    });

  }
}
