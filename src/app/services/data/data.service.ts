import { Injectable } from '@angular/core';
import { ELEMENT_DATA } from '../../utils/data';
import { IPeriodicElement } from '../../model/data-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   elementData= ELEMENT_DATA;
  
     getElementData(){
    return [... this.elementData]
  }

  getElementDataIndex(data:IPeriodicElement){
    return this.elementData.findIndex((item)=>item.position===data.position)
  }
    updateElementData(data:IPeriodicElement,elementData:IPeriodicElement){
     const selectedIndex= this.getElementDataIndex(data);
     this.elementData[selectedIndex] = elementData

  }
  
}
