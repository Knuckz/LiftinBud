import { Component, OnInit, Input, TemplateRef, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() hideFooter: boolean = false;

  @Output() isOpenEmitter = new EventEmitter<boolean>();

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  openModal() {
    this.isOpen = true;
    this.isOpenEmitter.emit(this.isOpen)
  }

  closeModal() {
    this.isOpen = false;
    this.isOpenEmitter.emit(this.isOpen);
  }

}
