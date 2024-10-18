import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionGroup } from '../model/questiongroup';
import { TextboxQuestion } from '../model/textboxquestion';
import { DropdownQuestion } from '../model/dropdownquestion';
import { CheckboxQuestion } from '../model/checkboxquestion';
import { RadioQuestion } from '../model/radioquestion';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'https://api.example.com/question-groups'; // Replace with your API

  constructor(private http: HttpClient) {}

  getQuestionGroups(): QuestionGroup[] {
    return [
      new QuestionGroup({
        title: 'Personal Information',
        order: 1,
        questions: [
          new TextboxQuestion({
            key: 'firstName',
            label: 'First Name',
            required: true,
            order: 1,
            type: 'text'
          }),
          new TextboxQuestion({
            key: 'lastName',
            label: 'Last Name',
            required: true,
            order: 2,
            type: 'text'
          }),
          new DropdownQuestion({
            key: 'maritalStatus',
            label: 'Marital Status',
            options: [
              { key: 'single', value: 'Single' },
              { key: 'married', value: 'Married' },
              { key: 'divorced', value: 'Divorced' },
            ],
            required: true,
            order: 3
          }),
          new RadioQuestion({
            key: 'favoriteColor',
            label: 'What is your favorite color?',
            options: [
              { key: 'red', value: 'Red' },
              { key: 'blue', value: 'Blue' },
              { key: 'green', value: 'Green' },
            ],
            required: true,
            order: 1
          }),
          new CheckboxQuestion({
            key: 'hobbies',
            label: 'Select your hobbies',
            options: [
              { key: 'reading', value: 'Reading' },
              { key: 'traveling', value: 'Traveling' },
              { key: 'sports', value: 'Sports' },
            ],
            required: false,
            order: 2
          })
        ]
      }),
      // Add more question groups as needed
    ];

  }
}
