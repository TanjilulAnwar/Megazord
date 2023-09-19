import { Component, OnInit } from '@angular/core';
import * as guestData from '../../../assets/guestList.json';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Title } from '@angular/platform-browser';

gsap.registerPlugin(ScrollTrigger, Draggable);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Guest[] = guestData;
  guestModel:Guest | undefined ;
  constructor(private route: ActivatedRoute, public title:Title) {
    let id = this.route.snapshot.paramMap.get('guestId');
    if(id){
      title.setTitle(id)
    }
    else{
      title.setTitle('Beautiful')
    }


  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('guestId');
    if(id){
          this.guestModel = Array.from(this.data).find(x=>x.id == id)

   // console.log('Data', this.data);
   console.log(this.guestModel);
    }

    this.setupGsap();
  }

  setupGsap(): void {



// bismillah part
    gsap.timeline()
    .fromTo(".r3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.9})
    .fromTo(".r4", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r5", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r6", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r7", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r8", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r9", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    // .fromTo(".msg1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 2})
    // .fromTo(".msg2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    // .fromTo(".msg3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
    // .fromTo(".mandala", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.5})
   
//



//mandala part
    gsap.timeline({
      scrollTrigger:{
       // trigger: ".mandala-img",
        pin: true,
        scrub:1,
        start: 'top top',
        end:'+=10000',
      }
    })
    .to('.mandala-img', {
      rotation:360*6,
      duration:1, ease:'none',
    })


//

//parallax
/* ------Great Horned Owl Sequence------  */

gsap.set(".dotsBlue", { yPercent: -2, xPercent:-5});
gsap.set(".owlHorned", { yPercent: 0, xPercent:5});

gsap.to(".dotsBlue", {
  yPercent: -2,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 0,
  xPercent:-5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


//parallax








// Create a GSAP timeline
let tl = gsap.timeline();

// Define a function to generate random coordinates and angles
function randomFly() {
let x = gsap.utils.random(0, window.innerWidth - 100);
let y = gsap.utils.random(0, window.innerHeight - 100);
let rotation = gsap.utils.random(-180, 180);
return {x: x, y: y, rotation: rotation};
}

// Animate the butterfly to fly randomly
tl.to(".butterfly", {
duration: 2,
motionPath: {
path: [randomFly(), randomFly(), randomFly(), randomFly()],
curviness: 2,
autoRotate: true
},
ease: "power1.inOut"
});

// Repeat the animation infinitely
tl.repeat(-1);
























   ///end
  }



}

















