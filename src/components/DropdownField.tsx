import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface DropdownFieldProps {
    name: string;
    options: (string | number)[];
    label: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ name, options, label }) => (
    <div>
        <label htmlFor={name}>{label}</label> {/* Use label here */}
        <Field as="select" name={name} id={name}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </Field>
        <ErrorMessage name={name} component="div" className="error" />
    </div>
);

export default DropdownField;
