interface Form {
  formId: number;
  name: string;
  type: string;
  description: string;
  copyright: string;
  deletedFields: string[];
  fields: Fields[];
  feature: string;
}

interface Fields {
  id: number;
  form: Form;
  fieldOrder: number;
  inputType: string;
  option: string;
  defalultValue: string;
  name: string;
  dependencyDetails: DependencyDetails;
  fieldOptions?: string[] | number[];
}

interface DependencyDetails {
  exists: boolean;
  type: string;
  dependencies: Dependencies[];
}

interface Dependencies {
  id: number;
  dependencyType: string;
  dependencyEvent: string;
  field: number;
  condition: string;
  conditionValue?: string | number;
  formula?: string;
}
