import React, { FormEvent } from 'react';
import { Field, formValues, reduxForm } from "redux-form";
import { alphaOnly, required } from "../validators";

import TextInput from './TextInput';
import SelectInput, { OptionListElement } from "./SelectInput";

interface UserFormProps{
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    invalid: boolean;
    validationEnforced: [{fieldName: string, validatorName: string}]
    validationWarning: [{fieldName: string, validatorName: string}]
}


const validationEnforced = {
    'firstNameField': 'required',
    'lastNameField': 'alphaOnly'
};
const validationWarning = {'firstNameField': 'alphaOnly'};


export function UserForm(props: UserFormProps): JSX.Element {
    const {handleSubmit, invalid} = props;


    const optionList: OptionListElement[] = [{ value: 'opt1', label: 'Option 1' }, { value: 'opt2', label: 'Option 2' }];

    return (
        <form onSubmit={handleSubmit}>
            <Field name='firstNameField'
                    label='Given Name'
                    component={TextInput}
                    validate={[required]}
                    warn={alphaOnly}
                />

            <Field name='lastNameField'
                    label='Last Name'
                    component={TextInput}
                    validate={[required, alphaOnly]} />

            <Field name='selectList'
                    label='Select List Test'
                    onChange={() => console.log('selectList onChange function')}
                    component={SelectInput}
                    optionList={optionList} />
            <button type="submit" disabled={invalid}>Submit</button>
        </form>
    )
}

export const ConnectedUserForm = reduxForm({
    form: 'userForm'
})(UserForm);
