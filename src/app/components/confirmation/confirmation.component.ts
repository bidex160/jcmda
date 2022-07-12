import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input() public data:boolean;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  closeModal(){
this.dialog.closeAll()
  }
}
