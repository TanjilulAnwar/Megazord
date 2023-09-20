import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.setupGsap();
  }
  title = 'megazord';

  setupGsap(): void {
  
// Animate the properties individually
gsap.utils.toArray(".box").forEach(star => {

  tweenProperty(star, "x", 100, window.innerWidth/1.8);
  tweenProperty(star, "y", 100, 2*(window.innerHeight-100));
});


function tweenProperty(target:any, prop:any, min:any, max:any) {
  
  var randomDur = gsap.utils.random(3, 6, 0.2, true);
  var randomDelay = gsap.utils.random(0.6, 2, 0.2, true);

  gsap.to(target,  {
    [prop]: gsap.utils.random(min, max),
    duration: randomDur(), 
    delay: randomDelay(), 
    ease: 'none',
    onComplete: tweenProperty,
    onCompleteParams: [target, prop, min, max]
  });

}

function background(){
  
  var next = gsap.utils.random(3, 6, 0.5, true);
  var opa = gsap.utils.random(0.2, 1, 0.1, true);
  
  gsap.to('#svg01', {opacity:opa, duration:3, ease:'none'});
  
  var delayedCall = gsap.delayedCall(next(), background);
  
}

background();
    
  }


  
}
