import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-niqah',
  templateUrl: './niqah.component.html',
  styleUrls: ['./niqah.component.scss']
})
export class NiqahComponent implements OnInit {
  ngOnInit(): void {
    this.setupGsap()
 }
 setupGsap(){


gsap.set(".red-quilt", { yPercent: 70, xPercent:200, rotate:20});
gsap.set(".kubool", { yPercent: 1480, xPercent:150, scale:0.8,rotate:0,opacity:0});
gsap.set(".duat", { yPercent: 520, xPercent:110});
gsap.set(".duat-x", { yPercent: 520, xPercent:110});
gsap.set(".papyrus", { yPercent: -30, xPercent:0});

// gsap.to(".red-quilt", {
//  yPercent: 50,
//  xPercent: 40,
//  rotate:80,
//  ease: "none",
//  scrollTrigger: {
//    start: "0% 50%",
//    end: "bottom 100%",
//    scrub: 2,
//    trigger: ".vluster"

//  }, 

// });



const tl = gsap.timeline({
  scrollTrigger: {
    start: "0% 50%",
    end: "bottom 100%",
    scrub:3,
    trigger: ".vluster"
    
  }
});
tl.add('scene1')
.to(".red-quilt", {
  yPercent: 30,
  xPercent: 50,
  rotate:0,
  ease: "none",
  duration:3
 })
.add("scene2")
//.call(() => console.log("call!")) // <-- here's the call
.to(".red-quilt", {
  yPercent: 10,
  xPercent: 80,
  rotate:5,
  ease: "none",
 })
 .add("scene3")
 //.call(() => console.log("call!")) // <-- here's the call
 .to(".red-quilt", {
   yPercent: 20,
   xPercent: 110,
   rotate:-5,
   ease: "none",
  })
  .add("scene4")
//.call(() => console.log("call!")) // <-- here's the call
.to(".red-quilt", {
  yPercent: 10,
  xPercent: 140,
  rotate:5,
  ease: "none",
 })
 .add("scene5")
 //.call(() => console.log("call!")) // <-- here's the call
 .to(".red-quilt", {
   yPercent: 20,
   xPercent: 170,
   rotate:-5,
   ease: "none",
  })
  .to(".kubool", {
    opacity:1,
      ease: "none",
     })
    
  .add("scene6")
//.call(() => console.log("call!")) // <-- here's the call
.to(".red-quilt", {
  yPercent: 10,
  xPercent: 200,
  rotate:5,
  ease: "none",
 })

// gsap.to(".papyrus", {
//  yPercent: 0,
//  xPercent: 0,
//  ease: "none",
//  scrollTrigger: {
//    start: "0% 50%",
//    end: "bottom 100%",
//    scrub: 2,
//    trigger: ".vluster"

//  }, 
// });

// gsap.to(".duat", {
//  yPercent: 0,
//  xPercent: 0,
//  ease: "none",
//  scrollTrigger: {
//    start: "0% 50%",
//    end: "bottom 100%",
//    scrub: 2,
//    trigger: ".vluster"

//  }, 
// });


//parallax
 }
}
