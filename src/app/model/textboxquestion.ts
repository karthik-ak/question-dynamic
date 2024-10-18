import { Question } from "./question";

export class TextboxQuestion extends Question<string> {
    override controlType = 'textbox';
    type: string;

    constructor(options: {
        value?: string,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: string, // Define the type property in the options
        cssClass?: string,
        styles?: { [key: string]: string }
    } = {}) {
        super(options); // Call the base constructor with options
        this.type = options.type || 'text'; // Default type can be 'text'
    }
}
