import { Component, Input } from '@angular/core';
@Component({
  selector: 'mz-input-textarea',
  templateUrl: './mz-input-textarea.component.html',
  styleUrls: ['./mz-input-textarea.component.scss']
})
export class MzInputTextareaComponent {
  @Input() caption:any

  @Input() template:string = "4"

  col = "col-sm-"
}
