import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  constructor(private areaRouter:Router) { }

  ngOnInit(): void {
  }
  AddArea(){
    this.areaRouter.navigateByUrl('/login/header/app-area-form')
  }

}
