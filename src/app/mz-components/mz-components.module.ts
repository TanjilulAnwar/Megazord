import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesignerComponent } from './designer/designer.component';
import { StructureComponent } from './structure/structure.component';
import { MzInputTextComponent } from './mz-input-text/mz-input-text.component';
import { MzInputEmailComponent } from './mz-input-email/mz-input-email.component';
import { MzInputDateComponent } from './mz-input-date/mz-input-date.component';
import { MzInputCheckComponent } from './mz-input-check/mz-input-check.component';
import { MzInputRadioComponent } from './mz-input-radio/mz-input-radio.component';
import { MzInputTextareaComponent } from './mz-input-textarea/mz-input-textarea.component';
import { MzInputSelectComponent } from './mz-input-select/mz-input-select.component';
import { MzInputButtonComponent } from './mz-input-button/mz-input-button.component';
import { MzInputPasswordComponent } from './mz-input-password/mz-input-password.component';

const componentList =[

  DesignerComponent,
  StructureComponent,
  MzInputTextComponent,
  MzInputEmailComponent,
  MzInputDateComponent,
  MzInputCheckComponent,
  MzInputRadioComponent,
  MzInputTextareaComponent,
  MzInputSelectComponent,
  MzInputButtonComponent,
  MzInputPasswordComponent,
]

@NgModule({
  declarations: [
    ...componentList,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ...componentList
  ]
})
export class MzComponentsModule { }
