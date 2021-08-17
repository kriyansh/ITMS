import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import * as $ from "jquery";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  showModalBox: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {  
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    //modalRef.componentInstance.lesson = lesson;
  }

 callModal(type:any) {  
   console.log('modal') 
  if(type){
    // Dont open the modal
    this.showModalBox = false;
  } else {
     // Open the modal
     this.showModalBox = true;
  }
}

}
