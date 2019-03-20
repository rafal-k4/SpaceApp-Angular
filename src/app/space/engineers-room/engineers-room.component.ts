import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  @Output() shipProduced = new EventEmitter<SpaceShip>();

  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];

  isProducing = false;

  constructor(private spaceShipService: SpaceShipService) { }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({
          next: (ship) => this.shipProduced.emit(ship),
          complete: () => this.isProducing = false
        });
  }

  ngOnInit() {
  }

}
