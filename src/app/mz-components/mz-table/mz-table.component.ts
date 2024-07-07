import { Component } from '@angular/core';
import { Column } from 'src/app/mz-services/column';

@Component({
  selector: 'mz-table',
  templateUrl: './mz-table.component.html',
  styleUrls: ['./mz-table.component.scss']
})
export class MzTableComponent {
  get filteredColumns() {
    return this.columns.filter( x => x.isVisible).sort((a, b) => a.sortOrder - b.sortOrder);
  }
  get dataColumns() {
    return this.columns.filter( x => x.isVisible).sort((a, b) => a.sortOrder - b.sortOrder).map(x=>x.name);
  }


columns:any[]  =[
  {name:'id',caption:'Id', isPrimary: true,isVisible: false, sortOrder:1},
  {name:'name',caption:'Full Name', isPrimary: false,isVisible: true, sortOrder:2},
  {name:'address',caption:'Street Address', isPrimary: false,isVisible: true, sortOrder:3},
  {name:'phone',caption:'Phone', isPrimary: false,isVisible: true, sortOrder:4},
  {name:'salary',caption:'Salary Amount', isPrimary: false,isVisible: true, sortOrder:6},
  {name:'dob',caption:'Date of Birth', isPrimary: false,isVisible: true, sortOrder:5},
]

data:any[] = [

  {
    id:1,
    name :'Angur',
    address :'Dhaka',
    phone :'Angur Fol',
    dob :'2022-05-06',
    salary :50000,
  },
  {
    id:2,
    name :'Apel',
    address :'Dhaka',
    phone :'Angur Fol',
    dob :'2022-05-06',
    salary :70000,
  },
  {
    id:3,
    name :'Peyara',
    address :'Dhaka',
    phone :'Angur Fol',
    dob :'2022-05-06',
    salary :80000,
  },  
  {
    id:4,
    name :'Dalim',
    address :'Dhaka',
    phone :'Angur Fol',
    dob :'2022-05-06',
    salary :90000,
  }
]






}
