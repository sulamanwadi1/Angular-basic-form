import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.sass']
})
export class JobdetailsComponent implements OnInit {
  datasetDetails:any;
  constructor(private route : ActivatedRoute, private dataser:DataserviceService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.datasetDetails = this.dataser.loadData().filter((res)=>{
      return res.jobid == id;
    })
  }
  
  

}
