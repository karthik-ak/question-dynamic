import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { QuestionService } from '../question/question.service';
import { QuestionGroup } from '../model/questiongroup';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent implements OnInit {
  form!: FormGroup;
  questionGroups: QuestionGroup[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {    
      this.questionGroups = this.questionService.getQuestionGroups();
      this.form = this.toFormGroup(this.questionGroups);    
  }

  toFormGroup(groups: QuestionGroup[]): FormGroup {
    const group: any = {};

    groups.forEach(qGroup => {
      qGroup.questions.forEach(question => {
        group[question.key] = new FormControl(question.value || '');
      });
    });

    return new FormGroup(group);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
