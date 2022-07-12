import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent implements OnInit , AfterContentInit{
  @ViewChild('buttonpay') buttonpay: ElementRef
  pageIndex = 1
  hotelIndex  = 1
  reference:any = ''
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    hotelname: new FormControl({value:'', disabled: true}, [
      Validators.required,
    ]),
    days: new FormControl({value: null, disabled: false}, [
      Validators.required,
      Validators.min(1)
    ]),
    checkin: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    phone: new FormControl('', [
      Validators.required,
    ]),
    code: new FormControl(null),
    amount: new FormControl({value:'', disabled: true}, [
      Validators.required,
    ])
 
   });
   showForm:boolean = false
   invalidReg:boolean = false
   bookingStat: any
  constructor(
    private router:Router,
    private dialog: MatDialog,
    private http: HttpClient
  ) { 
this.getStat()
  }


  ngAfterContentInit(): void {
  
  }
getStat(){
  this.http.get('http://register.cmdanigeria.org/stat.php')
  .subscribe((resp)=>{
     this.bookingStat = resp
  },
  (error)=>{
   this.getStat()
  })
}

  ngOnInit(): void {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;

  }
scroll() {
  let m =  document.getElementsByName('secregisterform');

  
    m[0].style.minHeight = `${window.innerHeight}px`
 
}

prevHotel(){

   if(this.hotelIndex > 1){
    this.hotelIndex -= 1;
   }
  
}
nextHotel(){
  if(this.hotelIndex < 2){
    this.hotelIndex += 1;
   }
}

onBook(){
  let amount = this.form.get('amount').value * this.form.get('days').value
  this.form.get('amount').patchValue(amount)
  let ca:String = this.form.get('category').value
  let table = ''
 if(ca.toLowerCase().includes('spouse')){
   table = 'doctor_spouse';
 }else if(ca.toLowerCase().includes('non doctors')){
   table  ='non_doctor'
 }else {
    table = 'users';
 }
  let url = `http://register.cmdanigeria.org/booking.php?bookingNum=${this.form.get('code').value}&table=${table}`
  this.http.get(url)
  .subscribe((value:any)=>{

   let st:boolean = value?.status
   if(st){
    this.invalidReg = false;
    this.buttonpay.nativeElement.click()

   }else{
    this.invalidReg = false;
    this.buttonpay.nativeElement.click()
   }
    
    


  },
    (error)=>{
    
     this.invalidReg = true
 
      
      
    })
}

paymentInit() {
  console.log('Payment initialized');
}

paymentDone(ref: any) {
   this.uploadData(ref)
   this.openModal()
}
paymentCancel() {
  console.log('payment failed');

}
uploadData(ref){
  let url = "http://register.cmdanigeria.org/booking.php"
  
  let body = new  FormData()

  body.set('reference',ref?.reference)
  body.set('trans',ref?.trans)
  body.set('trxref', ref?.trxref)
  body.set('name', this.form.get('name').value)
  body.set('email',this.form.get('email').value)
  body.set('hotelname',this.form.get('hotelname').value)
  body.set('checkin',this.form.get('checkin').value)
  body.set('regcode',this.form.get('code').value)
  body.set('phone',this.form.get('phone').value)
  body.set('amount',this.form.get('amount').value)
  body.set('days',this.form.get('days').value)

  this.http.post(url, body)
  .subscribe((value:any)=>{
    
      this.dialog.closeAll()

    //  this.showForm = false
     location.reload();
    //  this.getStat()
  },
    (error)=>{
    
 
        this.dialog.closeAll()
      
      
    })

}
closeForm(){
  this.showForm = !this.showForm
}
openModal(){

  this.dialog.open(ConfirmationComponent)
 }

bookNow(name, price){
   this.form.get('amount').patchValue(price)
   this.form.get('hotelname').patchValue(name)
   this.showForm = true;
   setTimeout(()=>{
    this.scroll()
   },300)

}

onDaysChange(){
  console.log("days changed")
}
// getRemaining(name){
//   switch()
//   return 70 - this.bookingStat?.candel;
// }
}
