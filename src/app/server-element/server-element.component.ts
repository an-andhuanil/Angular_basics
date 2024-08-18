import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent  implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {

  @Input('srvElement') element:{ type:string, name:string, content:string};
  @Input () name:string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentparagraph') paragraph:ElementRef;


  constructor (){
    // console.log('Constructor Called')
  }
  ngAfterViewInit(){
    // console.log(this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    // console.log('ngAfterContentChecked Called')
  }
  ngAfterContentInit(){
    // console.log('ngAfterContentInit Called')
    // console.log(this.paragraph.nativeElement.textContent);

  }
  ngDoCheck(){
    // console.log('ngDoCheck Called')
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called')
    // console.log(changes)
  }

  ngOnInit(){
    // console.log('Ng On it Called');

  }

}
