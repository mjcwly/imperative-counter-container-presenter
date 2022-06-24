import { Component } from '@angular/core';
import { Step } from './models/step.enum';
import { ITickSettings } from './models/tick-settings.model';
import { TickSettingsService } from './services/tick-settings.service';
import { StepSettingsService } from './services/step-settings.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vm: {
    counter: number;
    tickSettings: ITickSettings;
    step: Step;
  } = null;

  constructor(
    private readonly counterService: CounterService,
    private readonly tickSettingsService: TickSettingsService,
    private readonly stepSettingsService: StepSettingsService
  ) {
    this.updateDisplay();
  }

  stepSelectedHandler(step: Step) {
    this.stepSettingsService.setStep(step);
  }

  manualDecrementHandler(): void {
    this.counterService.manualDecrement();
    this.updateDisplay();
  }

  manualIncrementHandler(): void {
    this.counterService.manualIncrement();
    this.updateDisplay();
  }

  manualSetHandler(counter: number): void {
    this.counterService.manualSet(counter);
    this.updateDisplay();
  }

  tickSettingsChangedHandler(tickSettings: ITickSettings): void {
    console.log("tickSettings", tickSettings);
    this.tickSettingsService.setTickSettings(tickSettings);
    // this.updateDisplay();

    if (tickSettings.isTicking) {
      this.counterService.startCounter(() => this.updateDisplay());
    } else {
      this.counterService.stopCounter();
    }
  }

  private updateDisplay() {
    this.vm = {
      counter: this.counterService.getCounter(),
      step: this.stepSettingsService.getStep(),
      tickSettings: this.tickSettingsService.getTickSettings(),
    };
  }
}
