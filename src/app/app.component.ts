import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'TestServer', content:'abcdefghijklm'}];

  onServerAdded(serverData :{servername:string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData :{servername:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.servername,
      content: blueprintData.serverContent
    });
  }



  onChangeElement(){
    this.serverElements[0].name = 'changed!';
  }

  oddNumbers : number[] = [];
  evenNumbers : number[] = [];
  onIntervalFired(firedNumer : number){
    if(firedNumer % 2 === 0){
      this.evenNumbers.push(firedNumer);
    }else{
      this.oddNumbers.push(firedNumer);
    }

  }

  

}
