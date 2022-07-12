import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() public data;
  title =''
  reference = '';
  // title = ''
  form = new FormGroup({
    amount: new FormControl(0, [
      Validators.min(1),
    ]),

    
   });
  constructor(
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }
  onCloseModal(){
    this.dialog.closeAll()
  }  

  paymentInit() {
   this.dialog.closeAll()
  }
  
  paymentDone(ref: any) {
    this.title = 'Payment successfull';
  }
  
  paymentCancel() {
    console.log('payment failed');
  }
  
}
