import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/types/location';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  @Input() locationInfo?: Location;

  constructor() {}

  ngOnInit(): void {}
}
