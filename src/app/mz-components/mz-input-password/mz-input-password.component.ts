import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-password',
  templateUrl: './mz-input-password.component.html',
  styleUrls: ['./mz-input-password.component.scss']
})
export class MzInputPasswordComponent {
  @Input() caption:any

  @Input() template:string = "4"
  
  col = "col-sm-"

}
