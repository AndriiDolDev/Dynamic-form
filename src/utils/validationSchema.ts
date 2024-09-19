import * as Yup from 'yup';
import { FieldConfig } from '../types/FieldConfig';

export const generateValidationSchema = (fields: FieldConfig[]) => {
    const validationSchema: { [key: string]: Yup.AnySchema } = {};

    fields.forEach((field, index) => {
        let validator: Yup.AnySchema = Yup.mixed();
        const name = `field_${index}`;

        if (field.type === 'text' || field.type === 'longtext') {
            // Assert validator as Yup.StringSchema
            validator = Yup.string();
            if (field.validation) {
                validator = (validator as Yup.StringSchema).matches(new RegExp(field.validation), 'Invalid format');
            }
        }

        if (field.type === 'number') {
            // Assert validator as Yup.NumberSchema
            validator = Yup.number();
            if (field.min_value !== undefined) {
                validator = (validator as Yup.NumberSchema).min(field.min_value, `Minimum value ${field.min_value}`);
            }
            if (field.max_value !== undefined) {
                validator = (validator as Yup.NumberSchema).max(field.max_value, `Maximum value ${field.max_value}`);
            }
        }

        validationSchema[name] = validator;
    });

    return Yup.object().shape(validationSchema);
};
