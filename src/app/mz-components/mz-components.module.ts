import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BannerComponent } from './banner/banner.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const componentList =[
  TestComponent,
  FooComponent,
  BarComponent,
  BannerComponent
]

@NgModule({
  declarations: [
    ...componentList
    
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    FormsModule
  ],
  exports:[
    ...componentList
  ]
})
export class MzComponentsModule { }
