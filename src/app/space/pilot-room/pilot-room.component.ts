import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  @Output() selected = new EventEmitter<Pilot>();

  pilots: Pilot[] = [];

  selectedPilot: Pilot = null;

  constructor() { }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  ngOnInit() {
    this.pilots.push(new Pilot('Janina Rambo', '/assets/pilot1.jpg'));
    this.pilots.push(new Pilot('Janusz Tracz', '/assets/pilot2.png'));
  }

}
