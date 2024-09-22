import { Injectable,inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string="OK") {
    this._snackBar.open(message, action,{duration:1000,verticalPosition:'top'});
  }
}
