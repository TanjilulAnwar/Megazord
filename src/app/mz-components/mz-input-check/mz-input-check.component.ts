import { Component, Input } from '@angular/core';

@Component({
  selector: 'mz-input-check',
  templateUrl: './mz-input-check.component.html',
  styleUrls: ['./mz-input-check.component.scss']
})
export class MzInputCheckComponent {
  @Input() caption:any

  @Input() template:any
}
