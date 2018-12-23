import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: "This is test server"}];

  onServerAdded(serverData: {serverType: string, serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    }); 
  }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
}
