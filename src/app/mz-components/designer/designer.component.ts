import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent {

@Output() layout: EventEmitter<any> = new EventEmitter();
field:any={};
form: any[]=[];
group: any[]=[];
showDdlParam=false;
collapsed = true
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


}

typeDdlChanged(event:any){

console.log(event)
if(event === 'select'){
  this.showDdlParam = true;
}
else{
  this.showDdlParam = false;
}

}

 uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}


collapse(field:any){
field.collapsed = !field.collapsed
}


remove(field:any){
this.removeByAttr(this.form, 'id', field.id)

 }


   removeByAttr(arr:any, attr:any, value:any){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

showfieldValue(){

var field:any =  {};

field.id= this.uuidv4();
field.type = this.typeList[0].id;
field.caption = 'Caption'
field.template = '3'
field.collapsed = true
this.form.push(field);

  // var jsonString =  JSON.stringify(this.field)
  // var obj =  JSON.parse(jsonString)


  // console.log("field",this.field);
  // console.log("jsonString",jsonString);
  // console.log("object",obj);


  this.layout.emit(this.form)
}

}
