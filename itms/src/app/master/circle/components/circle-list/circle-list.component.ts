import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.css']
})
export class CircleListComponent implements OnInit,AfterViewInit {

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
    console.log('working')
    this.router.navigateByUrl('/login/header/add-update-circle')
  }

}
