import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  
    const leftLeaves = document.querySelectorAll('[href="#leftLeave"]');
    const rightLeaves = document.querySelectorAll('[href="#rightLeave"]');
    const smallLeaves = document.querySelectorAll('[href="#smallLeaf"]');
    const text = document.querySelector('.text');
    const letters = document.querySelectorAll('.text path');
    leftLeaves.forEach((leaf, i) => {
      const index = i/ (leftLeaves.length - 1);
      gsap.set(leaf, {
        rotate: index * -45 + 10,
        transformOrigin: 'right bottom'
      });
      gsap.to(leaf, {
        scrollTrigger: {
          trigger: ".r13",
          scrub: 1,
        //  start: `${index * 40}% top`,
         //  end: `${index * 60 + 40}% bottom`,
        },
        x: 150,
        y: 300,
        rotate: 15 - (Math.sin(index * Math.PI / 2 - (Math.PI / 2)) * 10),
        scale: 1.3
      });
    });
    rightLeaves.forEach((leaf, i) => {
      const index = i / (rightLeaves.length - 1);
      gsap.set(leaf, {
        rotate: index * 45 - 10,
        transformOrigin: 'left bottom'
      });
      gsap.to(leaf, {
        scrollTrigger: {
          trigger: ".r13",
          scrub: 1,
        //=   start: `${index * 40}% top`,
         //  end: `${index * 60 + 40}% bottom`,
        },
        x: -150,
        y: 300,
        rotate: -15 + (Math.sin(index * Math.PI / 2 - (Math.PI / 2)) * 10),
        scale: 1.3
      });
    });
    

    
    // Hack to hide the render of the SVG
    requestAnimationFrame(() => {
      const leftLeaves = document.querySelector('svg')  ;
      if(leftLeaves){
              leftLeaves.style.opacity = '1';
      }

    });
  }
}
