import { Component } from '@angular/core';
import { Input } from '@angular/core';
/* Import Output and EventEmitter from @angular/core:  */
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
/* emit an event when the value of the notify property changes.  */
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}