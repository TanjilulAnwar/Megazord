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
    const leftLeaves = document.querySelectorAll(".left-finger");
    const rightLeaves = document.querySelectorAll(".right-finger");

    leftLeaves.forEach((leaf, i) => {
      const index = i/ (leftLeaves.length - 1);
      gsap.set(leaf, {
       rotate:   15- (Math.sin(index * Math.PI / 2 - (Math.PI / 2)) * 10), 
        transformOrigin: 'right bottom',
        x:50
      });
   

      gsap.to(leaf, {
        scrollTrigger: {
          trigger: ".trig-mehedi",
          scrub: 3
        },
     //  x: -150,
     //   y: 300,
        rotate: index * -45 + 10 ,
       //scale: 1.3
      });



    });


    
    rightLeaves.forEach((leaf, i) => {
      const index = i / (rightLeaves.length - 1);
      gsap.set(leaf, {
        rotate:-15 + (Math.sin(index * Math.PI / 2 - (Math.PI / 2)) * 10) ,
        transformOrigin: 'left bottom',
        x:800
      });
    

      gsap.to(leaf, {
        scrollTrigger: {
          trigger: ".trig-mehedi",
          scrub: 3
        },
    //    x: 150,
   //     y: 300,
        rotate: index * 45 - 10,
      //  scale: 1.3
      });



    });
  }
}

