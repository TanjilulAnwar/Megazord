import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent {
//@Input() layout:any

private _layout: any;
    
@Input() set layout(value: any) {
   this._layout = value;
//   this.updateList();
  // console.log('ddl!')
 //  console.log( this['somList'] )
}

get layout(): any {
    return this._layout;
}


ddlList:any
somList = [{id:1, value:'Audi'},
{id:2, value:'BMW'},
{id:3, value:'Mercedes'},
{id:4, value:'Ulka'},
{id:5, value:'Segoe'},
{id:6, value:'Milan'},]
/**
 *
 */


constructor(private doms : DomSanitizer) {


}

ngOnChanges(changes: SimpleChanges) {
        
 // this.updateList()
  
}



ngDoCheck() {
        
  console.log("change detected!");
 // this.updateList()
  
}


safeCss(group:any) {
  return this.doms.bypassSecurityTrustStyle(group.style);
}

updateList(){

  if(this.layout){
    if(this.layout.type === 'select'){
      this.ddlList=   this['somList'] 
     }
  }
 
}





}
