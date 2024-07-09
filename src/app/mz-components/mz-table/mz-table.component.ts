import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mz-table',
  templateUrl: './mz-table.component.html',
  styleUrls: ['./mz-table.component.scss']
})
export class MzTableComponent implements OnInit {

  // @Input() dataList:any
  private _dataList: any;

  @Input() set dataList(value: any) {
    this._dataList = value;
    this.updateDataList();
  }
  get dataList(): any {
    return this._dataList;
  }

  ngOnInit(): void {

   // this.updateDataList();

  }

  updateDataList() {
    this.columns =[]
    if (this.dataList) {
      if (this.dataList.length > 0) {
        var props = Object.keys(this.dataList[0]);
        props.map((prop, i = 1) => {
          this.columns.push({ name: prop, caption: this.camelCaseToWords(prop), type: typeof (this.dataList[0][prop]), isPrimary: prop.toLowerCase() === 'id', isVisible: prop.toLowerCase() !== 'id', sortOrder: i++ })
        })
        console.log(this.columns)

      }
    }
  }
  get filteredColumns() {
    return this.columns.filter(x => x.isVisible).sort((a, b) => a.sortOrder - b.sortOrder);
  }
  get dataColumns() {
    return this.columns.filter(x => x.isVisible).sort((a, b) => a.sortOrder - b.sortOrder).map(x => x.name);
  }

  camelCaseToWords(s: any) {
    const result = s.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  columns: any[] = []
  //  =[
  //   {name:'id',caption:'Id', isPrimary: true,isVisible: false, sortOrder:1},
  //   {name:'name',caption:'Full Name', isPrimary: false,isVisible: true, sortOrder:2},
  //   {name:'address',caption:'Street Address', isPrimary: false,isVisible: true, sortOrder:3},
  //   {name:'phone',caption:'Phone', isPrimary: false,isVisible: true, sortOrder:4},
  //   {name:'salary',caption:'Salary Amount', isPrimary: false,isVisible: true, sortOrder:6},
  //   {name:'dob',caption:'Date of Birth', isPrimary: false,isVisible: true, sortOrder:5},
  // ]







}
