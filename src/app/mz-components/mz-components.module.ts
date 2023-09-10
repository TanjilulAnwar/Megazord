import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { ButterflyComponent } from './butterfly/butterfly.component';
import { MandalaComponent } from './mandala/mandala.component';
import { MandalaReverseComponent } from './mandala-reverse/mandala-reverse.component';
import { MajorComponent } from './major/major.component';

const componentList =[
  TestComponent,
  FooComponent,
  BarComponent,
  BannerComponent,
  ButterflyComponent,
  MandalaComponent,
  MandalaReverseComponent,
  MajorComponent
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
