import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ButterflyComponent } from './butterfly/butterfly.component';
import { MandalaComponent } from './mandala/mandala.component';
import { MandalaReverseComponent } from './mandala-reverse/mandala-reverse.component';
import { MajorComponent } from './major/major.component';
import { RevealComponent } from './reveal/reveal.component';
import { HaldiComponent } from './haldi/haldi.component';
import { WalimaComponent } from './walima/walima.component';
import { NiqahComponent } from './niqah/niqah.component';
import { HaldiFlowerComponent } from './haldi-flower/haldi-flower.component';

const componentList =[
  TestComponent,
  ButterflyComponent,
  MandalaComponent,
  MandalaReverseComponent,
  MajorComponent,
  RevealComponent,
  HaldiComponent,
  WalimaComponent,
  NiqahComponent,
  HaldiFlowerComponent,

]

@NgModule({
  declarations: [
    ...componentList


    
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
