import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() startSearchEvent = new EventEmitter<string>();
  ipAddress: string = '192.212.174.101';
  constructor() {}

  ngOnInit(): void {}

  startSearch() {
    this.startSearchEvent.emit(this.ipAddress);
  }
}
