import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    jsonData: any;
 
    constructor() {
 
        this.jsonData=[
      {"id":1,"label":"saw","name":"Prithivi","locatio":"Sofia, Bulgaria"},
      {"id":2,"label":"saw1","name":"Abimanyu","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"malliga","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"Gowdaman","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"Neethi","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"abirami1","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"abirami2","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"Harrish","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"Lokesh","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"Deepak","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"malliga","locatio":"Sofia, Bulgaria"},
      {"id":3,"label":"saw2","name":"malliga","locatio":"Sofia, Bulgaria"}

      ];
 
    }
 
    filterItems(searchTerm){
 
       return this.jsonData.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
 
}
