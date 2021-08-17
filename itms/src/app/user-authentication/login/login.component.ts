import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    let body = document.querySelector('body');
    if(body)
    body.style.backgroundImage = "url('assets/images/login-bg.jpg')"
  }

  authenticate(){
    this.router.navigateByUrl('/login/header/contacts')
  }

}
