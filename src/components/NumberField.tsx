import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface NumberFieldProps {
    name: string;
    min_value?: number;
    max_value?: number;
    label: string;
}

const NumberField: React.FC<NumberFieldProps> = ({ name, min_value, max_value, label }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name} type="number" id={name} min={min_value} max={max_value} />
        <ErrorMessage name={name} component="div" className="error" />
    </div>
);

export default NumberField;
