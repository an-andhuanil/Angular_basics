import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() highLightColor : string= 'blue';
  @Input() defaultColor : string= 'transparent';

  @HostBinding('style.backgroundColor') backgroundColor: string; 
  constructor(private elref:ElementRef,private renderer : Renderer2) { }
  ngOnInit() {

    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue',)
  }
  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue',)
    this.backgroundColor = this.highLightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent',)
    this.backgroundColor = this.defaultColor;

  }
}
