import { Injectable } from '@angular/core';
import { TickDirection } from '../models/tick-direction.enum';
import { ITickSettings } from '../models/tick-settings.model';
import { TickSpeedConstants } from '../models/tick-speed.enum';

@Injectable({
  providedIn: 'root',
})
export class TickSettingsService {
  private tickSettings: ITickSettings = {
    tickSpeed: TickSpeedConstants.FAST,
    tickDirection: TickDirection.Up,
    isTicking: false,
  };

  setTickSettings(tickSettings: ITickSettings): void {
    this.tickSettings = tickSettings;
  }

  getTickSettings(): ITickSettings {
    return this.tickSettings;
  }
}
