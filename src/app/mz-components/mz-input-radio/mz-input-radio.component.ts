import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-radio',
  templateUrl: './mz-input-radio.component.html',
  styleUrls: ['./mz-input-radio.component.scss']
})
export class MzInputRadioComponent {
  @Input() caption:any
}
