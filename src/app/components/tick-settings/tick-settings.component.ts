import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Step, StepConstants } from '../../models/step.enum';
import { TickDirection } from '../../models/tick-direction.enum';
import { ITickSettings } from '../../models/tick-settings.model';
import { TickSpeed, TickSpeedConstants } from '../../models/tick-speed.enum';

@Component({
  selector: 'tick-settings',
  templateUrl: './tick-settings.component.html',
  styleUrls: ['./tick-settings.component.css'],
})
export class TickSettingsComponent {
  @Input() inputTickSettings: ITickSettings;
  @Output() tickSettingsChangedEvent = new EventEmitter<ITickSettings>();

  stepConstants = StepConstants;
  tickSpeed = TickSpeedConstants;
  tickDirection = TickDirection;

  ngOnInit() {
    
  }

  onIsTickingChanged(isTicking: boolean): void {
    console.log("isTicking", isTicking);

    this.inputTickSettings = {
      ...this.inputTickSettings,
      isTicking
    };

    this.tickSettingsChangedEvent.emit(this.inputTickSettings);
  }

  onTickSpeedChanged(tickSpeed: TickSpeed): void {
    console.log("tickSpeed", tickSpeed);
    this.inputTickSettings = {
      ...this.inputTickSettings,
      tickSpeed
    };

    this.tickSettingsChangedEvent.emit(this.inputTickSettings);
  }

  onTickDirectionChanged(tickDirection: TickDirection): void {
    console.log("tickDirection", tickDirection);
    this.inputTickSettings = {
      ...this.inputTickSettings,
      tickDirection
    };

    this.tickSettingsChangedEvent.emit(this.inputTickSettings);
  }
}
