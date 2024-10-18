export class Question<T> {
    value?: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    parentKey?: string;
    visibleWhen?: (parentValue: any, controlType: string) => boolean;
    cssClass?: string;
    styles?: { [key: string]: string };
  
    constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      parentKey?: string,
      visibleWhen?: (parentValue: any, controlType: string) => boolean,
      cssClass?: string,
      styles?: { [key: string]: string }
    } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.parentKey = options.parentKey;
      this.visibleWhen = options.visibleWhen;
      this.cssClass = options.cssClass || '';
      this.styles = options.styles || {};
    }
  }
  