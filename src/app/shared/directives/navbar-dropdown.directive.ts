import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarDropdown]'
})
export class NavbarDropdownDirective {

   @Input() appNavbarDropdown !: string
  isExpanded :boolean=false
  constructor(
    private eleRef : ElementRef,
    private renderer : Renderer2
  ) { }

  
  @HostListener('click', ['$event'])
  onDropdownBtnClick(){
    console.log(this.eleRef.nativeElement);
    
    let nextSibDiv = this.eleRef.nativeElement.nextSibling as HTMLElement;
    if(!this.isExpanded){
      this.renderer.addClass(nextSibDiv, this.appNavbarDropdown)
      this.isExpanded=true
    }
    else{
      this.renderer.removeClass(nextSibDiv, this.appNavbarDropdown)
      this.isExpanded=false
    }
  }


  
  // @HostListener('click', ['$event'])
  // onDropdownBtnClick(){
  //   let nextSibling = this.renderer.nextSibling(this.eleRef.nativeElement)
  //   if(!this.isExpanded){
  //     nextSibling.style.display='block';
  //     this.isExpanded=true
  //   }
  //   else{
  //     nextSibling.style.display='none';
  //     this.isExpanded=false
  //   }
  // }
}
