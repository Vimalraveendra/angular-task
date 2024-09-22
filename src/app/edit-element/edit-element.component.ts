import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModules } from '../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../services/core/core.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-element',
  standalone: true,
  imports: [MaterialModules,ReactiveFormsModule],
  templateUrl: './edit-element.component.html',
  styleUrl: './edit-element.component.scss'
})
export class EditElementComponent  implements OnInit{
  elementForm!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private dataService:DataService,
    private dialogRef:MatDialogRef<EditElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private coreService:CoreService
  ){}

  ngOnInit() {
    this.elementForm= this.formBuilder.group({
      position:["",Validators.required],
      name:["",Validators.required],
      weight:["",Validators.required,],
      symbol:["",Validators.required],
    })
    this.elementForm.patchValue(this.data)
   
  }
  closeElementEditForm(){
    this.dialogRef.close();
  }
  onFormSubmit(){
    if(this.elementForm.valid){
      this.dataService.updateElementData(this.data,this.elementForm.value)
          this.coreService.openSnackBar("Employee updated!.","done")
        this.dialogRef.close(true);
     
  }
      }
    }
  
 

