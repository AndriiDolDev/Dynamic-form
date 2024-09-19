export type FieldType = 'text' | 'longtext' | 'number' | 'dropdown';

export interface FieldConfig {
    type: FieldType;
    index: number;
    label?: string;
    default_value?: string | number | boolean;
    validation?: string;
    min_value?: number;
    max_value?: number;
    options?: (string | number)[];
}

