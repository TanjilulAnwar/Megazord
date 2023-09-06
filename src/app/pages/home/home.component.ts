import { Component } from '@angular/core';
import * as guestData from '../../../assets/guestList.json';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Guest[] = guestData;
  model:Guest | undefined ;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('guestId');
    if(id){
          this.model = Array.from(this.data).find(x=>x.id == Number(id))

   // console.log('Data', this.data);
   console.log(this.model);
    }


  }


  // for public network
  // studentData:any;
  // url: string = '/assets/students.json';

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get(this.url).subscribe(res => {
  //     this.studentData = res;
  //     console.log(this.studentData);
  //   });
  // }
}
