import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-text',
  templateUrl: './mz-input-text.component.html',
  styleUrls: ['./mz-input-text.component.scss']
})
export class MzInputTextComponent{
  @Input() caption:any

  @Input() template:string = "col-sm-4"

}
