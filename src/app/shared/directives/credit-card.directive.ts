import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]',
})
export class CreditCardDirective implements OnInit {

  errorContainer !: HTMLParagraphElement

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.errorContainer = document.createElement('p');
    this.errorContainer.innerHTML='please Enter Valid Card Number !!'
    this.errorContainer.className = 'alert alert-danger mt-2'
    this.renderer.parentNode(this.eleRef.nativeElement).append(this.errorContainer);
    this.errorContainer.style.display='none'
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(eve: Event) {
    let inputControl = eve.target as HTMLInputElement;
    let val = inputControl.value as string;
    // no space
    //length -16
    //only number
    //chunk arr

    val = val.replace(/\s+/g, '');
    if (val.length > 16) {
      val = val.substring(0, 16);
    }
    if(/[^\d]/.test(val)){
      this.errorContainer.style.display= 'block'
    }
    else{
      this.errorContainer.style.display= 'none'
    }

    val = this.formatChunk(val)



    inputControl.value=val
  }

  formatChunk(val:string){
    let chunkArr = [];

    for(let i=0; i<val.length; i+=4){
      chunkArr.push(val.slice(i, i+4))
    }
    return chunkArr.join(' ')
  }
}
