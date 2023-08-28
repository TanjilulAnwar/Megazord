import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

const componentList =[
  TestComponent,
  FooComponent,
  BarComponent
]

@NgModule({
  declarations: [
    ...componentList,
    BarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...componentList
  ]
})
export class MzComponentsModule { }
