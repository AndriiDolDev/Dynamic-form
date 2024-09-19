import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface LongTextFieldProps {
    name: string;
    validation?: string;
    label: string;
}

const LongTextField: React.FC<LongTextFieldProps> = ({ name, validation, label }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name} as="textarea" id={name} />
        <ErrorMessage name={name} component="div" className="error" />
    </div>
);

export default LongTextField;
