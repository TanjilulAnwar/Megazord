import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  //@Input() layout:any

  private _layout: any;

  @Input() set layout(value: any) {
    this._layout = value;
  }
  get layout(): any {
    return this._layout;
  }


   dataList : any ={}



  constructor(private doms: DomSanitizer) {


  }
  ngOnInit(): void {

   this.updateDataList()
  
  }


  updateDataList(){
    this.dataList.carList = [{ id: 1, value: 'Audi' },
      { id: 2, value: 'BMW' },
      { id: 3, value: 'Mercedes' },
      { id: 4, value: 'Ulka' },
      { id: 5, value: 'Segoe' },
      { id: 6, value: 'Milan' },]
    
      this.dataList.petList = [{ id: 1, value: 'Cat' },
      { id: 2, value: 'Dog' },
      { id: 3, value: 'Goldfish' },
      { id: 4, value: 'Snake' },
      { id: 5, value: 'Otter' },
      { id: 6, value: 'Tiger' },]
    
      this.dataList.foodList = [{ id: 1, value: 'Pasta' },
      { id: 2, value: 'Pizza' },
      { id: 3, value: 'Taco' },
      { id: 4, value: 'Burrito' },
      { id: 5, value: 'Burger' },
      { id: 6, value: 'Shakes' },]


      this.dataList.salaryData= [

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




  ngOnChanges(changes: SimpleChanges) {

    this.updateDataList()
  }


  ngDoCheck() {
    console.log("change detected!");
  }

  safeCss(group: any) {
    return this.doms.bypassSecurityTrustStyle(group.style);
  }


}
