import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-button',
  templateUrl: './mz-input-button.component.html',
  styleUrls: ['./mz-input-button.component.scss']
})
export class MzInputButtonComponent {
  @Input() caption:any

  @Input() template:any
}
