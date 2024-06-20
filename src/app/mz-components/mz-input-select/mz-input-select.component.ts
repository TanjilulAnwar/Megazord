import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-select',
  templateUrl: './mz-input-select.component.html',
  styleUrls: ['./mz-input-select.component.scss']
})
export class MzInputSelectComponent {
  @Input() caption:any

  @Input() template:any

  @Input() dataList:any

constructor() {

  
}



  ddlValueChanged(event:any){
   console.log(event)
  }
}
