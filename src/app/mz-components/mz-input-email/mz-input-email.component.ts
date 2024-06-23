import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-email',
  templateUrl: './mz-input-email.component.html',
  styleUrls: ['./mz-input-email.component.scss']
})
export class MzInputEmailComponent {
  @Input() caption:any

  @Input() template:string = "4"
  
  col = "col-sm-"

}
