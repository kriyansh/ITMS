import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit,AfterViewInit {

  constructor(private router: Router) { }
  @ViewChild('example2') table;
  dataTable: any;
  dtOptions: any;
  ngOnInit(): void {    
  }

  ngAfterViewInit(){   
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
          'copyHtml5',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5'
      ]     
  };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);    
  }

  addUpdate(){    
    this.router.navigateByUrl('/login/header/add-update-role')
  }

}
