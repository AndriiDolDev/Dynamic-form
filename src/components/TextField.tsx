import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextFieldProps {
    name: string;
    validation?: string;
    label: string; 
}

const TextField: React.FC<TextFieldProps> = ({ name, validation, label }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name} type="text" id={name} />
        <ErrorMessage name={name} component="div" className="error" />
    </div>
);

export default TextField;
