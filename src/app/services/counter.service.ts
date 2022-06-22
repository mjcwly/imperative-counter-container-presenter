import { Injectable } from '@angular/core';
import { TickSettingsService } from './tick-settings.service';
import { StepSettingsService } from './step-settings.service';
import { TickDirection } from '../models/tick-direction.enum';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = 0;

  private timerSubscription: Subscription;

  constructor(
    private readonly tickSettingsService: TickSettingsService,
    private readonly stepSettingsService: StepSettingsService
  ) {}

  getCounter(): number {
    return this.counter;
  }

  manualDecrement(): void {
    this.counter -= this.stepSettingsService.getStep();
  }

  manualIncrement(): void {
    this.counter += this.stepSettingsService.getStep();
  }

  manualSet(counter: number): void {
    this.counter = counter;
  }

  startCounter(callback: Function): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    const { tickSpeed, tickDirection } =
      this.tickSettingsService.getTickSettings();

    this.timerSubscription = interval(tickSpeed).subscribe(() => {
      const step = this.stepSettingsService.getStep();
      const increment = tickDirection === TickDirection.Up ? step : -step;
      this.counter += increment;
      callback();
    });
  }

  stopCounter(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
