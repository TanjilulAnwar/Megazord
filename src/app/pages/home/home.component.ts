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



// timeline appearence


    gsap.timeline()
    .fromTo(".r1", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 1})
    .fromTo(".r2", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r3", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.9})
    .fromTo(".r4", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r5", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r6", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r7", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r8", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r9", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r10", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r11", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r12", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r13", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r14", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r15", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r16", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r17", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
    .fromTo(".r18", { y: 10, opacity: 0}, {opacity: 1, y: 1, duration: 0.3})
  
   
//


//mandala rotation
    gsap.timeline({
      scrollTrigger:{
        pin: true,
        scrub:1,
        // start: 'top top',
        // end:'+=10000',
      }
    })
    .to('.mandala-img', {
      rotation:360*6,
      duration:1, ease:'none',
    })


//

//parallax

gsap.set(".couple", { yPercent: -2, xPercent:-5});
gsap.set(".coupleBackground", { yPercent: 0, xPercent:5});

gsap.to(".couple", {
  yPercent: -2,
  xPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


gsap.to(".coupleBackground", {
  yPercent: 0,
  xPercent:-5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster",
    scrub: 1
  }, 
});


//parallax





   ///end
  }



}

















