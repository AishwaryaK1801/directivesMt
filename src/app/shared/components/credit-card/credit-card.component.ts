import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @ViewChild('inputRef') inputRef!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onConfirm(){
    let val = (this.inputRef.nativeElement as HTMLInputElement).value as string;
    console.log(val);
    
  }
}
