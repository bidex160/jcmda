import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit ,AfterContentInit{
  @ViewChild('main') main: HTMLElement
  constructor(
    private router: Router
  ) { }



  ngAfterContentInit(): void {
    this.scroll()
  }


  ngOnInit(): void {
   // this.scroll()
  }
// scroll() {
//     let el = document.getElementById('main');
//     const offset = 300;
//     const bodyRect = document.body.getBoundingClientRect().top;
//     const elementRect = el.getBoundingClientRect().top;
//     const elementPosition = elementRect - bodyRect;
//     const offsetPosition = elementPosition - offset;
//     console.log(offsetPosition)
//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
// }

scroll() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
}
 downloadPDF(){
   let link = document.createElement("a");
       link.download = "Conference-programme.pdf";
       link.href = "assets/Conference-programme.pdf";
       link.click();
 }
 goBack(){
   this.router.navigateByUrl('/home')
 }
}


