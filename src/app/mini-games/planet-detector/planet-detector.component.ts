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
  opacityValue = 1;
  invertedOpacityValue = 0;

  GameFinished = false;

  planetImgUrl: string;
  detectionAreaImage: string;

  @ViewChild('detectionArea') detectionAreaElement: ElementRef;
  @ViewChild('planet') planetElement: ElementRef;
  @ViewChild('aimX')  aimX: ElementRef;
  @ViewChild('aimY') aimY: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.planetImgUrl = './assets/planet.png';
    this.detectionAreaImage = './assets/noise.jpg';
  }

  onMouseMove(position: { x: number, y: number }): void {
    this.MoveAim(position);
    if (this.GameFinished) {
      return;
    }
    this.distanceFromPlanet = this.CalculateDistanceFromPlanet(position, this.planetCoordinates);
    this.invertedOpacityValue = (1 / (this.distanceFromPlanet * 0.02));
    this.opacityValue = 1 - this.invertedOpacityValue;
  }

  MoveAim(position: { x: number; y: number; }) {
    this.renderer.setStyle(this.aimX.nativeElement, 'top', `${position.y + this.dimensions.top}px`);
    this.renderer.setStyle(this.aimY.nativeElement, 'left', `${position.x + this.dimensions.left}px`);
  }

  planetFound(): void {
    this.GameFinished = true;
    this.opacityValue = 0;
    this.invertedOpacityValue = 1;
  }


  CalculateDistanceFromPlanet(mousePosition: { x: number, y: number }, planetPosition: { x: number, y: number }): number {
    const verticalDist = planetPosition.x - mousePosition.x + this.planetElement.nativeElement.width / 2;
    const horizontalDist = planetPosition.y - mousePosition.y + this.planetElement.nativeElement.height / 2;

    return Math.sqrt(Math.pow(verticalDist, 2) + Math.pow(horizontalDist, 2));
  }

  ngOnInit() {
    this.dimensions = this.detectionAreaElement.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.detectionAreaElement.nativeElement, 'background-image', `url(${this.detectionAreaImage})`);
    
    this.PrepareGame();
  }

  PrepareGame(): void {
    this.GameFinished = false;
    this.opacityValue = 1;
    this.invertedOpacityValue = 0;

    this.planetCoordinates = {
      x: (this.dimensions.width - this.planetElement.nativeElement.width) * Math.random(),
      y: (this.dimensions.height - this.planetElement.nativeElement.height) * Math.random()
    };

    this.renderer.setStyle(this.planetElement.nativeElement, 'top', `${this.planetCoordinates.y}px`);
    this.renderer.setStyle(this.planetElement.nativeElement, 'left', `${this.planetCoordinates.x}px`);
  }

}
