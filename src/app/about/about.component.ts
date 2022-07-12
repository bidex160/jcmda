import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageIndex = 1
  constructor() { }




  ngOnInit(): void {
  this.scroll()
  }
scroll() {
  let d =  document.getElementById('desktop');
  let m =  document.getElementById('mobile');

  if(window.innerWidth > 767){
    m.remove()
  }else{
    d.remove()
  }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  onNext(){
    if(this.pageIndex < 3){
     this.pageIndex += 1;
    }

  }
  onPrevios(){
   if(this.pageIndex > 1){
     this.pageIndex -= 1;
    }
  }



}
