import React from 'react'

export interface ULProps {
    label: string;
    name: string;
    optionList: OptionListElement[];
}

export interface OptionListElement {
    value: string;
    label: string;
}

export default function ULInput({ label, name, optionList }: ULProps): JSX.Element {
    return (
        <>
            <h2>{label} {name}</h2>
            <ul>
                {optionList.map((option: OptionListElement) =>
                    <li key={option.value}>{option.label}</li>
                )}
            </ul>
        </>
    )
}
