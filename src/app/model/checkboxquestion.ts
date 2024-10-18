import { Question } from "./question";

export class CheckboxQuestion extends Question<string[]> {
    override controlType = 'checkbox';
    options: { key: string; value: string }[];
  
    constructor(options: {
      value?: string[];
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      options?: { key: string; value: string }[];
    } = {}) {
      super(options);
      this.options = options.options || [];
    }
  }
  