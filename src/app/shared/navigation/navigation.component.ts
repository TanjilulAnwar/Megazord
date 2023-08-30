import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public isCollapsed = true;
  model={
    title:'MEGAZORD',
    showTitle:true,
    showLogo:true,
    logo:"https://ih1.redbubble.net/image.1901381515.0635/st,small,507x507-pad,600x600,f8f8f8.jpg",
    logoWidth:60,
    logoHeight:60,
  }
  public navList =[
    {id:1, icons:'', useIcons:false ,name: 'Home',href:''},
    {id:2, icons:'', useIcons:false ,name: 'About Us',href:''},
    {id:3, icons:'', useIcons:false ,name: 'Our Services',href:''},
    {id:4, icons:'', useIcons:false ,name: 'Blog',href:''},
    {id:5, icons:'', useIcons:false ,name: 'Events',href:''},
    {id:6, icons:'', useIcons:false ,name: 'Contact Us',href:''}
  ]
}
