import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverType: string, serverName: string, serverContent: string}>();
  // @Output() blueprintCreated = new EventEmitter<{serverType: string, serverName: string, serverContent: string}>();
  constructor() { }

  ngOnInit() {
  }
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContentInput: ElementRef;
  onAddServer(serverType, serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({serverType: serverType, serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverType: 'blueprint', serverName: this.newServerName, serverContent: this.newServerContent});
  // }
}
