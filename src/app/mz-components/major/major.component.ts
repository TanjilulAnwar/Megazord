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

  ngOnInit(): void {
    this.setupGsap();
  }

  
  setupGsap(){


    gsap.utils.toArray(".string1").forEach((star:any, i) => {


     
     gsap.set(star, { yPercent: 120, xPercent: -10000+(i*1500)});
    });

  }


}
