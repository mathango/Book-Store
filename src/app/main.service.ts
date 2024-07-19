import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

postregister(data: any){
    return this.http.post("http://localhost:8082/api/books",data);
      
}
getbooks(){
    return this.http.get("http://localhost:8082/api/books")
               
}
update(data: any){
    return this.http.put("http://localhost:8082/api/books/" + data._id,data)
       
}
deleteform(data:any){
    return this.http.delete("http://localhost:8082/api/books/" + data._id,data)
        
}
}
