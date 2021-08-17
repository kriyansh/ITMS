import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addUpdate(){    
    this.router.navigateByUrl('/login/header/add-update-role')
  }

}
