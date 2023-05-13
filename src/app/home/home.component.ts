import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { ModalComponent } from './modal/modal.component';
var slidePosition = 0;

function SlideShow() {
  var i;
  let slides = document.getElementsByName('slidesCon')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block"

 setTimeout(SlideShow, 5000); // Change image every 2 seconds
} 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//Pagination variables
@ViewChild(MatPaginator) paginator: MatPaginator;

form = new FormGroup({
  name: new FormControl('', [
    Validators.required,
  ]),
  email: new FormControl('', [
    Validators.required,
  ]),
  country: new FormControl('', [
    Validators.required,
  ]),
  gender: new FormControl(''),
  status: new FormControl('', [
    Validators.required,
  ]),
  number: new FormControl('', [
    Validators.required,
  ]),

  place: new FormControl('', [
    Validators.required,
  ]),

  home: new FormControl('', [
    Validators.required,
  ]),
  state: new FormControl('', [
    Validators.required,
  ]),
  city: new FormControl('', [
    Validators.required,
  ]),
  category: new FormControl('Students', [
    Validators.required,
  ]),

  chapter: new FormControl('', [
    Validators.required,
  ]),
  level: new FormControl(''),

  amount: new FormControl(5000),

  donate: new FormControl(false),
  donateAmt: new FormControl(1,Validators.min(1)),
  spousename: new FormControl(''),
  spouseemail: new FormControl(''),
  spousephone: new FormControl(''),
  profession: new FormControl(''),
  mode: new FormControl(''),
  terms: new FormControl(false)
 });


 price:any = "0"
 checkoutUrl:any

 errorM: boolean = false

pageIndex: number = 0;
loading = false;
  countDownDate = new Date("Jul 27, 2022 00:00:00").getTime();
  days:any;
  hrs:any;
  mins:any;
  secs:any
  faqIndex = 0;
  reference = '';
  constructor(
    private router:Router,
    private dialog: MatDialog,
    private http: HttpClient,
    private domSanitizer: DomSanitizer

  ) {
    
    
   }
   ngOnInit() {
    window.onresize = this.resize;
    this.timer()
    this.form.get('gender').patchValue('f')
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;

  }
   paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.uploadData(ref)
    this.openModal()
  }
  disableBtn(){
    let sp:string = this.form.get('category').value
    if(sp.toLowerCase().includes('spouse')){
      console.log( this.form.get('spousename').value,this.form.get('spouseemail').value,this.form.get('spousephone').value)
      if(this.form.get('spousename').value == '' || this.form.get('spouseemail').value == '' || this.form.get('spousephone').value == ''){
     return true
      }else{
      return false
      }
 
    }else if(sp.toLowerCase().includes('non doctors')){
       return   this.form.get('profession').value == ''
    }
    else{
      return false
    }
  }
  registerDelegate(){
    this.loading = true
    this.uploadData({})
  }
 uploadData(ref){
    let url = "http://register.cmdanigeria.org/register.php"
    let sp:string = this.form.get('category').value
    
    let body = new  FormData()
  
    body.set('reference',ref?.reference)
    body.set('trans',ref?.trans)
    body.set('trxref', ref?.trxref)
    body.set('name', this.form.get('name').value)
    body.set('email',this.form.get('email').value)
    body.set('country',this.form.get('country').value)
    body.set('gender',this.form.get('gender').value)
    body.set('status',this.form.get('status').value)
    body.set('number',this.form.get('number').value)
    body.set('place',this.form.get('place').value)
    body.set('home',this.form.get('home').value)
    body.set('state',this.form.get('state').value)
    body.set('city',this.form.get('city').value)
    body.set('category',this.form.get('category').value)
    if(sp.toLowerCase().includes('non doctors')){
      body.set('profession',this.form.get('profession').value)
    }
    if(sp.toLowerCase().includes('spouse')){
      body.set('spousename',this.form.get('spousename').value)
      body.set('spouseemail',this.form.get('spouseemail').value)
      body.set('spousephone',this.form.get('spousephone').value)
    }
    body.set('chapter',this.form.get('chapter').value)
    body.set('level',this.form.get('level').value)
    body.set('amount',this.form.get('amount').value)
    body.set('donation', this.form.get('donateAmt').value)
    body.set('mode',  this.form.get('mode').value)
    this.http.post(url, body)
    .subscribe((value:any)=>{
      this.loading = false
      if(value?.status){

        if(this.form.get('category').value == 'International Delegates'){
          window.open('https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=WUQEWV3SM9VV8','_self')

        }

        if(this.form.get('category').value == 'Students'){
          window.open('https://paystack.com/pay/5thjnc_student','_self')

        }

        if(this.form.get('category').value == 'House officers & Corp Members'){
          window.open('https://paystack.com/pay/5thjnc_hc','_self')

        }

        if(this.form.get('category').value == 'Doctors'){
          window.open('https://paystack.com/pay/5thjnc_doctors','_self')

        }
        if(this.form.get('category').value == 'Doctor with Spouse'){
          window.open('https://paystack.com/pay/5thjnc_doctors_with_spouse','_self')

        }
        if(this.form.get('category').value == 'Non Doctors'){
          window.open('https://paystack.com/pay/5thjnc_non_doctors','_self')

        }
       
      }else{
        this.dialog.closeAll()
      }

    },
      (error)=>{
        this.loading = false
        if(this.loading){

        }else{
          this.dialog.closeAll()
        }
        
      })

 }
  paymentCancel() {
    console.log('payment failed');
  }


  onRegister() {
   this.scroll()
 }
 scroll() {
  this.router.navigateByUrl('/')
  let el = document.getElementById('main');
  
  window.scrollTo({
    top: 1200,
    behavior: 'smooth'
  });
}

onMode(){
  let modalRef =  this.dialog.open(ModalComponent)
  // modalRef.componentInstance.data = true;
  modalRef.afterClosed()
  .subscribe(res=>{
    this.form.get('mode').patchValue(res)
    this.onNext()
  })
 
}

 onNext(){
   if(this.pageIndex < 2){

    this.pageIndex += 1
    return
   }


    if(this.pageIndex == 2 && !this.form.get('terms').value){
      this.errorM = true
    }else{
      this.errorM = false
      this.donationAmount()
      this.registerDelegate()

    }
  
 
   
 }
 onPrevios(){
  if(this.pageIndex > 1){
    this.pageIndex -= 1;
   }
 }
 stepOneValid(){
   return this.form.get('name').valid && this.form.get('email').valid && this.form.get('country').valid
    && this.form.get('status').valid && this.form.get('gender').valid && this.form.get('number').valid;
 }
 stepTwoValid(){
  return this.form.get('place').valid && this.form.get('home').valid && this.form.get('state').valid
   && this.form.get('city').valid && this.form.get('category').valid && this.form.get('chapter').valid
   && this.form.get('level').valid && this.form.get('donateAmt').valid;
}
 onCheckBox(event,g){
    this.form.get('gender').patchValue(g)
 }

 timer(){
  let d =  document.getElementById('desktop');
  let m =  document.getElementById('mobile');
 
  if(window.innerWidth > 767){
    m.remove()
    //main
    let main = document.getElementsByName('main')
       main[0].style.height = `${window.innerHeight-100}px`
   let slideCon = document.getElementsByName('slideMain')
    slideCon[0].style.height = `${window.innerHeight - 150}px`
    let mainLeft = document.getElementsByName('mainLeft')
    mainLeft[0].style.height = `${window.innerHeight - 150}px`
    let secregister = document.getElementsByName('secregister')
    secregister[0].style.minHeight = `${window.innerHeight}px`
    // 
  }else{
    d.remove()
  }
  SlideShow()
   setInterval(()=>{
    var now = new Date().getTime();
    var timeleft = this.countDownDate - now;
        
     this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    this.hrs = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
     this.secs = Math.floor((timeleft % (1000 * 60)) / 1000);
   },1000)
 }
 showIndex(index){
   if(this.faqIndex == index){
     this.faqIndex = 0;
   }else{
    this.faqIndex = index;
   }
   
 }
 previousConference(){
  // this.router.navigateByUrl('previous-conferences')
 }

  resize() {
    if(window.innerWidth > 800){
          location.reload();
    }
}

onRegistration(){
this.scrollToForm()
}
openModal(){
  let modalRef =  this.dialog.open(ConfirmationComponent)
  modalRef.componentInstance.data = false;
 }
 setAmount(){

 let cate =  this.form.get('category').value

 switch(cate){
   case 'Students' :
     this.form.get('donateAmt').patchValue(1)
      this.form.get('amount').patchValue(5037.5)
      this.price = "#5,037.5"
      break;
      case 'House officers & Corp Members' :
        this.form.get('amount').patchValue(20150)
        this.price = "#20,150"
        break;
        case 'Doctors' :
          this.form.get('amount').patchValue(30225)
          this.price = "#30,225"
          break;
          case 'Doctor with Spouse' :
            this.form.get('amount').patchValue(50375)
            this.price = "#50,375"
            break;
            case 'Non Doctors' :
            this.form.get('amount').patchValue(20150)
            this.price = "#20,150"
            break;
            case 'International Delegates' :
              this.form.get('amount').patchValue(59442.5)
              this.price = "#59,442.5"
              break;
              
              default:
                this.form.get('category').patchValue('Students')
                this.form.get('amount').patchValue(5037.5)
                this.price = "#5,037.5"
                break;



         
 }
  
 }
 
scrollToForm() {
  this.router.navigateByUrl('/')
  let el = document.getElementById('main');
  
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  });
}
showOthers(){
  let cat:string = this.form.get('category').value;
  if(cat.includes('Students') || cat.includes('Delegates')){
    return false
  }else{
 return true
  }
}
donationAmount(){
  let cat:string = this.form.get('category').value;
  if(cat.includes('Delegates')){
      if(this.form.get('donateAmt').value > 1) {
      let amt = this.form.get('donateAmt').value * 590;
      this.form.get('donateAmt').patchValue(amt) 
      }
      
  }
}
viewTerms(){

  let modalRef =  this.dialog.open(ConfirmationComponent)
    modalRef.componentInstance.data = true;
  
}

}

