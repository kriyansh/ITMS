import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  constructor(private sectorRouter:Router) { }

  ngOnInit(): void {
  }
  addSector(){
this.sectorRouter.navigateByUrl('/login/header/app-sector-form')
  }

}
