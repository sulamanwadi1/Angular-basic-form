import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  dataset:Data[] = [{
    "jobid":1,
    "name":"Home Page",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "status":3,
    "priority":1
},{
  "jobid":2,  
  "name":"About Page",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "status":1,
    "priority":2
},{
  "jobid":3,  
  "name":"Contact us Page",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "status":4,
    "priority":2
}]
  constructor() { }

  loadData(){
    return this.dataset;
  }
  
}
export interface Data {
  jobid:number;
  name: string;
  description: string;
  status: number;
  priority: number
  };
