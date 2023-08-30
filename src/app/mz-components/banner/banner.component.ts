import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

public bannerImg="/assets/images/sample-london.jpg"
public model={
  imageSrc:"/assets/images/sample-london.jpg",
  width:1920,
  height:1280
}
constructor(){

}

ngOnInit(): void {
  this.model.width= window.innerWidth
}

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  //console.log(event.target.innerWidth);
  //this.model.width=event.target.innerWidth
  this.images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/${this.model.width}/480`);
}


images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1920/480`);

paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
pauseOnFocus = true;

@ViewChild('carousel', { static: true }) carousel: NgbCarousel | any;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (
    this.unpauseOnArrow &&
    slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  ) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}




}
