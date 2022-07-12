import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-dntpopup',
  templateUrl: './dntpopup.component.html',
  styleUrls: ['./dntpopup.component.scss']
})
export class DntpopupComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
openamount(){
  this.dialog.closeAll()
  let modalRef =  this.dialog.open(PopupComponent)
   modalRef.componentInstance.data = 'Volunter';
}

}
