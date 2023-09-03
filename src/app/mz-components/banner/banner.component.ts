import { Component, OnInit } from '@angular/core';

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

}


}
