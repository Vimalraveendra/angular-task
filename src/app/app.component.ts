import { Component ,inject, OnInit} from '@angular/core';
import { MaterialModules } from './material/material.module';
import {MatDialog} from '@angular/material/dialog';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { CoreService } from './services/core/core.service';
import { IPeriodicElement } from './model/data-model';
import { DataService } from './services/data/data.service';
import { EditElementComponent } from './edit-element/edit-element.component';
import { RxState } from '@rx-angular/state';
import { DataSource } from '@angular/cdk/collections';





 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialModules,MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[RxState]
})
export class AppComponent  implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource<IPeriodicElement>();
 
  constructor(private dialog:MatDialog,private dataService:DataService,private coreService:CoreService){}


  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    setTimeout(()=>{
      this.dataSource.filter = filterValue.trim().toLowerCase();
    },2000)
  }



 openEditElementDetails(data:any){
   const dialogRef=this.dialog.open(EditElementComponent,{
    data
   })
   dialogRef.afterClosed().subscribe({
    next:(val:boolean)=>{
      if(val){
        this.dataSource=new MatTableDataSource(this.dataService.getElementData())
      }
  }
   })
 }
 

 ngOnInit() {
  this.dataSource =new MatTableDataSource( this.dataService.getElementData());
  // this.dataService.elementData$.subscribe((data)=>{
  //   this.dataSource=new MatTableDataSource(data)
  // })
 }
}

