import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private dimensions;
  @ViewChild('detectionArea') detectionAreaElement: ElementRef;

  onMouseMove(position: {x: number, y: number}): void{
    console.log(this.detectionAreaElement);
  }


  ngOnInit() {

    this.dimensions = this.detectionAreaElement.nativeElement.getBoundingClientRect();
    console.log(this.dimensions, this.dimensions.width, this.dimensions.height);

    const div = this.renderer.createElement('div');
    this.renderer.setStyle(div, 'height', '100px');
    this.renderer.setStyle(div, 'width', '100px');
    this.renderer.setStyle(div, 'background', 'white');
    this.renderer.setStyle(div, 'position', 'absolute');

    this.renderer.setStyle(div, 'top', `${this.dimensions.height * 0.5}px`);
    this.renderer.setStyle(div, 'left', `${this.dimensions.width * 0.5}px`);

    this.renderer.appendChild(this.detectionAreaElement.nativeElement, div);
  }

}
