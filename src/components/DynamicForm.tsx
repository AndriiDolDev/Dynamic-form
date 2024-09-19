import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import LongTextField from './LongTextField';
import NumberField from './NumberField';
import DropdownField from './DropdownField';
import { FieldConfig } from '../types/FieldConfig';
import { generateValidationSchema } from '../utils/validationSchema';

interface DynamicFormProps {
    fields: FieldConfig[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
    const [submittedValues, setSubmittedValues] = useState<{ [key: string]: any } | null>(null);

    const initialValues = fields.reduce((values, field, index) => {
        values[`field_${index}`] = field.default_value ?? '';
        return values;
    }, {} as { [key: string]: string | number | boolean });

    const validationSchema = generateValidationSchema(fields);

    const renderField = (field: FieldConfig, index: number) => {
        const name = `field_${index}`;
        const label = field.label || name;
        switch (field.type) {
            case 'text':
                return <TextField key={index} name={name} validation={field.validation} label={label} />;
            case 'longtext':
                return <LongTextField key={index} name={name} validation={field.validation} label={label} />;
            case 'number':
                return <NumberField key={index} name={name} min_value={field.min_value} max_value={field.max_value} label={label} />;
            case 'dropdown':
                return <DropdownField key={index} name={name} options={field.options || []} label={label} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => setSubmittedValues(values)}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        {fields.map((field, index) => renderField(field, index))}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            {submittedValues && (
                <div>
                    <h2>Submitted Values</h2>
                    <div className="submitted-values">
                        {Object.entries(submittedValues).map(([key, value]) => (
                            <div key={key} className="submitted-value">
                                <strong>{fields.find(field => `field_${field.index}` === key)?.label || key}: </strong>
                                <span>{String(value)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DynamicForm;
