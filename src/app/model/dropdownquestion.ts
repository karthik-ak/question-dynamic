import { Question } from "./question";

export class DropdownQuestion extends Question<string> {
    override controlType = 'dropdown'; // Default control type
    options: { key: string; value: string }[]; // Define the options structure
  
    constructor(options: {
      value?: string;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      options?: { key: string; value: string }[]; // Define the options in the constructor
      cssClass?: string;
      styles?: { [key: string]: string };
    } = {}) {
      super(options); // Call the base constructor with options
      this.options = options.options || []; // Default to an empty array if not provided
    }
  }
  