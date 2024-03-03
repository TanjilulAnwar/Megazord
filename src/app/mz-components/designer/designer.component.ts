import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent {

@Output() layout: EventEmitter<any> = new EventEmitter();
field:any={};


typeList=[
  {id:"text", name:"Text Input"},
  {id:"email", name:"Email Input"},
  {id:"password", name:"Password Input"},
  {id:"date", name:"Date Input"},
  {id:"check", name:"Check Input"},
  {id:"radio", name:"Radio Input"},
  {id:"textarea", name:"Text Area Input"},
  {id:"button", name:"Button"},
  {id:"select", name:"Dropdown"},

]

constructor() {

this.field.type = this.typeList[0].id;
}




showfieldValue(){
  var jsonString =  JSON.stringify(this.field)
  var obj =  JSON.parse(jsonString)
  console.log("field",this.field);
  console.log("jsonString",jsonString);
  console.log("object",obj);
  this.layout.emit(this.field)
}

}
