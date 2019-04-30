import { SpaceShip } from "./space-ship";
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super("Viper", "./assets/ship-fighter.png", pilot);
  }
}
