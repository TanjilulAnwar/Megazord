import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { UtilityService } from 'src/app/mz-services/utility.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent {

  @Output() layout: EventEmitter<any> = new EventEmitter();
  // field: any = {};
  // row: any = {};
  // group: any = {};
  // rows: any[] = [];
  // groups: any[] = [];
  undoStack:any [] =[]
  redoStack:any [] =[]
  form: any = {}
  showDdlParam = false;
  showTableParam = false;
  collapsed = true;
  sides =['top', 'bottom', 'left', 'right']
  typeList = [
    { id: "text", name: "Text Input" },
    { id: "email", name: "Email Input" },
    { id: "password", name: "Password Input" },
    { id: "date", name: "Date Input" },
    { id: "check", name: "Check Input" },
    { id: "radio", name: "Radio Input" },
    { id: "textarea", name: "Text Area Input" },
    { id: "button", name: "Button" },
    { id: "select", name: "Dropdown" },
    { id: "table", name: "Table" },

  ]

  constructor(private utility: UtilityService) {

    this.initForm();
  }


  initForm(){
    this.form.groups = []
  }

  typeDdlChanged(event: any, field:any) {

    //console.log(event)

    field.showDdlParam = event === 'select';
    field.showTableParam = event === 'table';

  }




  collapse(field: any) {
    field.collapsed = !field.collapsed
  }


  removeItemFromArray(array: [], item: any) {
    this.utility.removeFromArrayByAttr(array, 'id', item.id)

  }


  groupBorderSet(group: any, side?: any) {

    if(side){
        group.border[side]= !group.border[side]
    }

    group.style = ''

    this.sides.forEach(side=>{
    group.style+= group.border[side]? `border-${side}:${group.border.width}px solid ${group.border.color};`:''
    })
  }




  addGroup() {

    var group: any = {};

    group.id = this.utility.uuidv4();
    group.caption = ''
    group.template = '12'
    group.collapsed = true
    group.style = ''


    group.border = {}
    group.border.top = false
    group.border.bottom = false
    group.border.left = false
    group.border.right = false
    group.border.color = '#000'
    group.border.width = 0
    group.rows = []

    this.form.groups.push(group);

    // var jsonString =  JSON.stringify(this.field)
    // var obj =  JSON.parse(jsonString)


    // console.log("field",this.field);
    // console.log("jsonString",jsonString);
    // console.log("object",obj);


    this.emitChanges()
  }



  addRow(group: any) {

    var row: any = {};

    row.id = this.utility.uuidv4();
    row.caption = 'Caption'
    row.template = '12'
    row.collapsed = true
    row.fields = []
    row.tables = []
    //var group = this.groups.find(x=>x.id === group.id)
    group.rows.push(row);

    // var jsonString =  JSON.stringify(this.field)
    // var obj =  JSON.parse(jsonString)


    // console.log("field",this.field);
    // console.log("jsonString",jsonString);
    // console.log("object",obj);


    this.emitChanges()
  }



  addField(row: any) {

    var field: any = {};

    field.id = this.utility.uuidv4();
    field.type = this.typeList[0].id;
    field.caption = null
    field.template = '3'
    field.collapsed = true
    field.showDdlParam = field.type === 'select';
    field.showTableParam = field.type === 'table';
    row.fields.push(field);

    // var jsonString =  JSON.stringify(this.field)
    // var obj =  JSON.parse(jsonString)
    // console.log("field",this.field);
    // console.log("jsonString",jsonString); 
    // console.log("object",obj);

    this.emitChanges()
  }


  addTable(row: any){
    var table: any = {};
    table.id = this.utility.uuidv4();
    table.type = this.typeList[0].id;
    table.caption = 'Caption'
    table.columns = []
    table.template = '12'
    table.collapsed = true
    // var row = this.groups.rows.find(x=>x.id === row.id)
    row.tables.push(table);

    // var jsonString =  JSON.stringify(this.field)
    // var obj =  JSON.parse(jsonString)
    // console.log("field",this.field);
    // console.log("jsonString",jsonString);
    // console.log("object",obj);

    this.emitChanges()
  }

writeChangeLog(){
  // console.log('form',this.form)
  // console.log('undo',this.undoStack)
  // console.log('redo',this.redoStack)
}




ngDoCheck() {

 if( JSON.stringify(this.undoStack[this.undoStack.length - 1] ) == JSON.stringify(this.form)){
  console.log('no change')
 }
 else{
  this.undoStack.push(this.propy(this.form))
  console.log('yes change')
 }

  this.writeChangeLog()
}



propy(obj: any){
return JSON.parse(JSON.stringify(obj))
}
  emitChanges() {
    this.undoStack.push(this.propy(this.form))
    this.layout.emit(this.form)
    this.writeChangeLog();
  }


  undoChanges(){
    if(this.undoStack.length >0){
    this.redoStack.push(this.propy(this.undoStack[this.undoStack.length - 1]));
    
    this.undoStack.pop();

    if(this.undoStack.length >0){
      var item = this.propy(this.undoStack[this.undoStack.length - 1])
      this.form = item;
    }
    else{
      this.initForm()
    }
    this.layout.emit(this.form)
  
    }
    this.writeChangeLog();
  }


  redoChanges(){
    if(this.redoStack.length >0){
      this.undoStack.push(this.propy(this.redoStack[this.redoStack.length - 1]));
      
      this.redoStack.pop();
  
      if(this.undoStack.length >0){
       var item = this.propy(this.undoStack[this.undoStack.length - 1])
       this.form = item;
      }
      else{
        this.initForm()
      }
      this.layout.emit(this.form)
    
      }
      this.writeChangeLog();
  }


  saveChanges(){
    
  }
}
