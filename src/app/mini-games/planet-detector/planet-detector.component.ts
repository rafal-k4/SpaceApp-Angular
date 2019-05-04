import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit {

  constructor() { }


  onMouseMove(position: {x: number, y: number}): void{
    console.log(`${position.x} ${position.y}`);
  }


  ngOnInit() {
  }

}
