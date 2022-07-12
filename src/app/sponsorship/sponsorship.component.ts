import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit, AfterContentInit {

  constructor(
    private router: Router
  ) { }

  ngAfterContentInit(): void {
  this.scroll()
  }


  ngOnInit(): void {
   // this.scroll()
  }
scroll() {
    // let el = document.getElementById('main');
    // const offset = 300;
    // const bodyRect = document.body.getBoundingClientRect().top;
    // const elementRect = el.getBoundingClientRect().top;
    // const elementPosition = elementRect - bodyRect;
    // const offsetPosition = elementPosition - offset;
    // console.log(offsetPosition)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  downloadPDF(){
    let link = document.createElement("a");
        link.download = "Sponsorship-leaflet.pdf";
        link.href = "assets/Sponsorship-leaflet.pdf";
        link.click();
//    window.open('/assets/Sponsorship-leaflet.pdf', '_blank');

  //  window.document.
  }
  goBack(){
    this.router.navigateByUrl('/home')
  }
}
