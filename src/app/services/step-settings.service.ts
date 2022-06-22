import { Injectable } from '@angular/core';
import { Step } from '../models/step.enum';
import { StepConstants } from '../models/step.enum';

@Injectable({
  providedIn: 'root',
})
export class StepSettingsService {
  private step: Step = StepConstants.UNITS;

  setStep(step: Step) {
    this.step = step;
  }

  getStep(): Step {
    return this.step;
  }
}
