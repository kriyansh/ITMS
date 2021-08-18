import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.css']
})
export class CircleListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addUpdate(){
    console.log('working')
    this.router.navigateByUrl('/login/header/add-update-circle')
  }

}
