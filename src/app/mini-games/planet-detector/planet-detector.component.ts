import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit {

  private dimensions;
  private distanceFromPlanet: number;
  private planetCoordinates: { x: number, y: number };

  @ViewChild('detectionArea') detectionAreaElement: ElementRef;
  @ViewChild('planet') planetElement: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  onMouseMove(position: { x: number, y: number }): void {
    this.distanceFromPlanet = this.CalculateDistanceFromPlanet(position, this.planetCoordinates);
    console.log(this.distanceFromPlanet);
  }

  planetFound(): void{
    window.alert('found');
  }

  CalculateDistanceFromPlanet(mousePosition: { x: number, y: number }, planetPosition: { x: number, y: number }): number {
    const verticalDist = planetPosition.x - mousePosition.x;
    const horizontalDist = planetPosition.y - mousePosition.y;
    return Math.sqrt(Math.pow(verticalDist, 2) + Math.pow(horizontalDist, 2));
  }

  ngOnInit() {
    this.dimensions = this.detectionAreaElement.nativeElement.getBoundingClientRect();
    this.planetCoordinates = { x: this.dimensions.width * Math.random(), y: this.dimensions.height * Math.random() };
    // TODO: make sure planet isnt spawning over the border
    console.log(this.planetCoordinates);

    this.renderer.setStyle(this.planetElement.nativeElement, 'top', `${this.planetCoordinates.y}px`);
    this.renderer.setStyle(this.planetElement.nativeElement, 'left', `${this.planetCoordinates.x}px`);

  }

}
