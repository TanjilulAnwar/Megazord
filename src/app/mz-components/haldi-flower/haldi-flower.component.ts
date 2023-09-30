import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-haldi-flower',
  templateUrl: './haldi-flower.component.html',
  styleUrls: ['./haldi-flower.component.scss']
})
export class HaldiFlowerComponent implements OnInit{
  ngOnInit(): void {
    this.setupGsap();
  }

  
  setupGsap(){
    gsap.set(".l001", { yPercent: 20, xPercent:-800 });
    gsap.set(".l002", { yPercent: 20, xPercent:-460 });
    gsap.set(".l003", { yPercent: 20, xPercent:-120 });
    gsap.set(".l004", { yPercent: 20, xPercent:180 });
    gsap.set(".l005", { yPercent: 20, xPercent:500 });
    gsap.set(".l006", { yPercent: 20, xPercent:800 });

    gsap.utils.toArray(".leaf").forEach((star:any, i) => {
      let maximum = 5
      let minimum =10
     var rando =  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
     //console.log(rando)
     
     gsap.from(star, {duration: rando, rotation: -1*rando, transformOrigin: '50% 0px', ease: 'elastic.out( 3, 0.1)', delay: 1, repeat: -1})
    });

  }
}
