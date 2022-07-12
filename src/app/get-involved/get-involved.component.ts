import { AfterContentInit, Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../components/popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { DntpopupComponent } from '../components/dntpopup/dntpopup.component';

var slidePosition = 0;

function SlideShow() {
  var i;
  //let slides = document.getElementsByClassName("Containers");
  let slides = document.getElementsByName('slidesCon')
  // if (n > slides.length) {slidePosition = 1}
  // if (n < 1) {slidePosition = slides.length}


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
       // slides[i].style.display = "none";

  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block"
  //slides[slidePosition-1].style.display = "block";
 setTimeout(SlideShow, 7000); // Change image every 2 seconds
} 
@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit,AfterContentInit {

  showOverlay:boolean = false
  constructor(
    private dialog: MatDialog
    

  ){}
  ngAfterContentInit(): void {
    SlideShow()
  }
  loading:boolean = false

  ngOnInit(): void {
  this.scroll()

  }
scroll() {
    // let el = document.getElementById('main');
    // const offset = 300;
    // const bodyRect = document.body.getBoundingClientRect().top;
    // const elementRect = el.getBoundingClientRect().top;
    // const elementPosition = elementRect - bodyRect;
    // const offsetPosition = elementPosition - offset;
    // console.log(offsetPosition)
    console.log(window.innerWidth)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

openModal(){
this.showOverlay = !this.showOverlay
}
openamount(){
  this.loading = true
  this.dialog.closeAll()
  window.open('https://paystack.com/pay/5thjnc_donation','_self')
  this.loading= false
}

openPaypal(){
  this.dialog.closeAll()
  window.open('https://www.paypal.com/biz/fund?id=WUQEWV3SM9VV8','_self')
}
openVolunter(){
  window.open('http://bit.ly/GOSA22MISSIONS','_blank')
}
closePop(){
  if(this.showOverlay){
    this.showOverlay = !this.showOverlay
  }
}
}
