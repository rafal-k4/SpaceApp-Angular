import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];

  selectedPilot: Pilot = null;

  constructor() { }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

  ngOnInit() {
    this.pilots.push(new Pilot('Janina Rambo', '/assets/pilot1.jpg'));
    this.pilots.push(new Pilot('Janusz Tracz', '/assets/pilot2.png'));
  }

}
