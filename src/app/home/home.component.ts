import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public receivedData:any;
  constructor(private _service: DataServiceService) { }
  
  ngOnInit(){
    this.get();
  }
    get(){
      this._service.getData().subscribe(res=>{
        this.receivedData =res;
        console.log("dataReceived",res);
      })
    }
}
