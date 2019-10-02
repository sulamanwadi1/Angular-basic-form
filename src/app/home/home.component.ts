import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataset;
  constructor(private router:Router, private dataser:DataserviceService) {
    
   }
  
ngOnInit() {
  this.dataset = this.dataser.loadData()
}
onSelect(d){
  this.router.navigate(['/jobdetails',d.jobid])
}
priority(d){
  let priorityarray = ["high","medium","low"]
  return priorityarray[d-1]
}
status(d){
  let statusarray = ["Not started","Queued","Running","Done"]
  return statusarray[d-1]
}


sortDirectionStatus:boolean = false;
sortDirectionPriority:boolean = false;
sortDirectionName:boolean = true;
sortData(d){
  let data;
  
  if(d=='name'){
    let sortdata = this.dataset;
    data = sortByName(this.sortDirectionName, sortdata, d)
    this.sortDirectionName = !this.sortDirectionName;
  }
  if(d=='status'){
    let sortdata = this.dataset;
    data = sortBynumber(this.sortDirectionStatus, sortdata, d)
    this.sortDirectionStatus = !this.sortDirectionStatus;
  }
  if(d=='priority'){
    let sortdata = this.dataset;
    data = sortBynumber(this.sortDirectionPriority, sortdata, d)
    this.sortDirectionPriority = !this.sortDirectionPriority;
  }
  return this.dataset = data;
}



}


function sortBynumber(sort, sortdata, colName){
  return  sortdata.sort((p1,p2)=>{
    return sort ? p1[colName] - p2[colName] : p2[colName] - p1[colName]
  })
}


function sortByName(sort,sortdata,colName){
  return  sortdata.sort((p1,p2)=>{
    if(sort){
      if(p1[colName]>p2[colName]){
        return 1
      }else if(p1[colName]===p2[colName]){
        return 0
      }else{
        return -1
      }
    }else{
      if(p1[colName]<p2[colName]){
        return 1
      }else if(p1[colName]===p2[colName]){
        return 0
      }else{
        return -1
      }
    }
  })
}

