import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements  OnInit{
  // serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentinput: ElementRef;

  @Output() serverCreated = new EventEmitter<{servername:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{servername:string, serverContent: string}>();
  constructor(){}
  ngOnInit() {
  }


  onAddServer(NameInput : HTMLInputElement) {
    this.serverCreated.emit({servername:NameInput.value, serverContent: this.serverContentinput.nativeElement.value});
    console.log(this.serverContentinput);
  }

  onAddBlueprint(NameInput : HTMLInputElement) {
    this.blueprintCreated.emit({servername:NameInput.value, serverContent:  this.serverContentinput.nativeElement.value});
  }

}
