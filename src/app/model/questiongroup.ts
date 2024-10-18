import { FormGroup } from "@angular/forms";
import { Question } from "./question";

export class QuestionGroup {
    title: string;
    order: number;
    questions: Question<any>[];
    parentGroupKey?: string | null; // The parent group's key if it's a child group
    visibleWhen?: ((parentValue: any, formGroup: FormGroup) => boolean) | null; // Visibility condition based on the parent group's value
  
    constructor(options: {
      title?: string,
      order?: number,
      questions?: Question<any>[],
      parentGroupKey?: string, // Optional property to define the parent group
      visibleWhen?: (parentValue: any, formGroup: FormGroup) => boolean // Function to determine visibility based on parent group
    } = {}) {
      this.title = options.title || '';
      this.order = options.order === undefined ? 1 : options.order;
      this.questions = options.questions || [];
      this.parentGroupKey = options.parentGroupKey || null;
      this.visibleWhen = options.visibleWhen || null;
    }
  }
  