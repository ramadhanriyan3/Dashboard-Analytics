export enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phoneInput",
  SELECT = "select",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
  CHECKBOX = "checkbox",
  COMBOBOX = "combobox",
}

export type Option = {
  id: string;
  name: string;
  value: string;
};
