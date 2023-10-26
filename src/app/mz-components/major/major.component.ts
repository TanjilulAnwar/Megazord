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


   //middle string
    gsap.utils.toArray(".string1").forEach((star:any, i) => {
      var a=2
      var b=48
      var c=50
      var x=-2350+(i*200)
      var y = 90+(-(Math.pow(i,2))*a+(b*i)+c)// -ax^2+bx+c ; c adjust height
     gsap.set(star, { yPercent:y, xPercent: x});
    });



    gsap.utils.toArray(".string2").forEach((star:any, i) => {
      var a=4.3
      var b=100
      var c=50
      var x=-2350+(i*200)
      var y = 90+(-(Math.pow(i,2))*a+(b*i)+c)// -ax^2+bx+c ; c adjust height
     gsap.set(star, { yPercent:y, xPercent: x});
    });
  }


}
