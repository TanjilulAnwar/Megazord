import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-date',
  templateUrl: './mz-input-date.component.html',
  styleUrls: ['./mz-input-date.component.scss']
})
export class MzInputDateComponent {
  @Input() caption:any
}
