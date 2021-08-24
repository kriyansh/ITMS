import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-type-list',
  templateUrl: './vehicle-type-list.component.html',
  styleUrls: ['./vehicle-type-list.component.css']
})
export class VehicleTypeListComponent implements OnInit {

  constructor(private vehicleRouter:Router) { }

  ngOnInit(): void {
  }
  addVehicleType(){
    this.vehicleRouter.navigateByUrl('/login/header/app-vehicle-type-form')
  }

}
