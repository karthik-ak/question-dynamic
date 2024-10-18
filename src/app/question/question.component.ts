import { Component, Input } from '@angular/core';
import { Question } from '../model/question';
import { DropdownQuestion } from '../model/dropdownquestion';
import { TextboxQuestion } from '../model/textboxquestion';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CheckboxQuestion } from '../model/checkboxquestion';
import { RadioQuestion } from '../model/radioquestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question<any>;
  @Input() form!: FormGroup;
  
  get isTextbox(): boolean {
    return this.question.controlType === 'textbox';
  }

  get isDropdown(): boolean {
    return this.question.controlType === 'dropdown';
  }

  get isRadio(): boolean {
    return this.question.controlType === 'radio';
  }

  get isCheckbox(): boolean {
    return this.question.controlType === 'checkbox';
  }

  get textboxType(): string {
    return (this.question as TextboxQuestion).type;
  }

  get dropdownOptions() {
    return (this.question as CheckboxQuestion | RadioQuestion).options;
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    const checked = event.target.checked;
    const formArray: FormArray = this.form.get(this.question.key) as FormArray;

    if (checked) {
      formArray.push(new FormControl(value));
    } else {
      const index = formArray.controls.findIndex(x => x.value === value);
      formArray.removeAt(index);
    }
  }
}
