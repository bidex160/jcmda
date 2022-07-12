import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var header = document.getElementById("myHeader");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  menuItems: any[] = [
    {
        label: 'HOME',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
     
    {
      label: 'ABOUT CONFERENCE',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'PROGRAM',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
        label: 'ACCOMMODATION',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'MISSIONS',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'SPONSORSHIP',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'CONTACT',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'GET INVOLVED/DONATE',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      }
    
  ];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    window.onscroll = function() {myFunction()};
  }



onNavMobileClick(i){

  if(i == 0){
      this.router.navigateByUrl('/')
  }else if(i == 1){
   this.router.navigateByUrl('about-conference')
 
  }else if(i==2){
   this.router.navigateByUrl('program')
  }else if(i==3){
   this.router.navigateByUrl('accommodation')
  }
  else if(i==4){
    this.router.navigateByUrl('missions')
   }
   else if(i==5){
    this.router.navigateByUrl('sponsorship')
   }
   else if(i==6){
     console.log("clikcked")
   this.scrolltoBottom()
   }
   else if(i==7){
    this.router.navigateByUrl('get-involved')
   }

 

}
scrolltoBottom(){
  window.scrollTo(0, document.body.scrollHeight);


}
onRegister(){
  this.scroll()
}
scroll() {
  this.router.navigateByUrl('/')
  let el = document.getElementById('main');
  
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  });
}
}
