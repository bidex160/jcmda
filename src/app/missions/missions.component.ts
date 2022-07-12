import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../components/popup/popup.component';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit,AfterContentInit {
  showOverlay:boolean = false
  constructor(
    private dialog: MatDialog

  ) { }
  ngAfterContentInit(): void {
  this.scroll()
  }


  ngOnInit(): void {
  }
  scroll() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
openVolunter(){
  window.open('http://bit.ly/GOSA22MISSIONS','_blank')
}
openDonate(){
  window.open('https://forms.gle/6JZD6kyHxqQ2BpRUA','_blank')

}
openModal(){
  this.showOverlay = !this.showOverlay
 }
 openamount(){
  let modalRef =  this.dialog.open(PopupComponent)
    modalRef.componentInstance.data = 'Support';
}
openPaypal(){
  this.dialog.closeAll()
  window.open('https://www.paypal.com/biz/fund?id=WUQEWV3SM9VV8','_blank')
}
closePop(){
  if(this.showOverlay){
    this.showOverlay = !this.showOverlay
  }
}
}
