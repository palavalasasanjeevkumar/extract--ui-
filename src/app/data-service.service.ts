import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http: HttpClient) { }
   public Url = "../imageProject/db.json";
  
  getData(){
    console.log("",this.Url)
    return this._http.get(this.Url);

    }
  }

