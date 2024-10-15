import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {

  @Input() appHilight !: string;
  constructor(
    private eleRef : ElementRef,
    private renderer : Renderer2
  ) { }

  @HostBinding('style.backgroundColor') bgColor !: string 

  @HostListener('mouseover')
  onMouseOver(){
   this.bgColor = 'yellow'
  }
  @HostListener('mouseout')
  onMouseOut(){
   this.bgColor = ''
  }
}
