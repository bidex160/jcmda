import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  selection = 'Physical'

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,

  ) { }

  ngOnInit(): void {
  }

  onProceed(){
   
      this.dialogRef.close(this.selection)
 
  }

  onCheckBox(event,g){
    this.selection = g
  }
}
