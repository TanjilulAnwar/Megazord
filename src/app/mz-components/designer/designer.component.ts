import { Component, EventEmitter, Output } from '@angular/core';
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
  form: any = {}
  showDdlParam = false;
  collapsed = true
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

  ]

  constructor(private utility: UtilityService) {

    this.form.groups = []

  }

  typeDdlChanged(event: any) {

    console.log(event)
    if (event === 'select') {
      this.showDdlParam = true;
    }
    else {
      this.showDdlParam = false;
    }

  }




  collapse(field: any) {
    field.collapsed = !field.collapsed
  }


  removeItemFromArray(array: [], item: any) {
    this.utility.removeFromArrayByAttr(array, 'id', item.id)

  }
  groupBorderSet(group: any, side: any) {
     group.border[side]= !group.border[side]
     var styleItem = `border-${side}: solid;`

//     border-top: solid;
//     border-color: #1c1c08;
//     border-width: 1px;

     if(group.border[side] === true){
      group.style += styleItem

     }
     else{
    group.style= group.style.replace(styleItem, '') ;
     }
 


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
    group.border.color = '#fff'
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
    field.caption = 'Caption'
    field.template = '3'
    field.collapsed = true
    // var row = this.groups.rows.find(x=>x.id === row.id)
    row.fields.push(field);

    // var jsonString =  JSON.stringify(this.field)
    // var obj =  JSON.parse(jsonString)
    // console.log("field",this.field);
    // console.log("jsonString",jsonString);
    // console.log("object",obj);

    this.emitChanges()
  }


  emitChanges() {
    this.layout.emit(this.form)
  }

}
