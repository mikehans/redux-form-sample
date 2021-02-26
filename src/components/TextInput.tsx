import React from 'react'
import { WrappedFieldProps } from "redux-form";

interface TextInputProps extends WrappedFieldProps {
    label: string;
    validate: Validator;
}

// this is part of Field.d.ts. How do I get it in here?
type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

export default function TextInput({meta, input, label}: TextInputProps) : JSX.Element {
    const {touched, error, warning} = meta;
    return (
        <div>
            <label>{label || 'A Label'}</label>
            <input type="text" {...input} />
            {touched && error && <span>{error}</span>}
            {touched && warning && <span>Warning: {warning}</span>}
        </div>
    )
}
