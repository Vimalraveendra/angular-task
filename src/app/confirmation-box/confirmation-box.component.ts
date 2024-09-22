import {ChangeDetectionStrategy, Component, inject,Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-box',
  standalone: true,
   imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './confirmation-box.component.html',
  styleUrl: './confirmation-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationBoxComponent {
  private dialogRef = inject( MatDialogRef<ConfirmationBoxComponent>);
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,){}
  
  confirmOk(){
    console.log(this.data)
    this.dialogRef.close(true);
  }
}
