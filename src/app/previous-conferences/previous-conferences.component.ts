import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-conferences',
  templateUrl: './previous-conferences.component.html',
  styleUrls: ['./previous-conferences.component.scss']
})
export class PreviousConferencesComponent implements OnInit {
  page = 4
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  swichContent(index){
    this.page = index
  }
  goBack(){
    this.router.navigateByUrl('/')
  }
  onRegister(){
    this.scroll()
  }
  scroll() {
   this.router.navigateByUrl('/')
    
    
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  }
}
