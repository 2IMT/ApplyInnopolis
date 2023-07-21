'use client';

import '../globals.css'
import styles from '../styles/inputField.module.css'
import React from 'react'

export default class InputField extends React.Component {
    labelName: string;
    inputName: string;
    inputPlaceholder: string;
    inputType: string;

    constructor(props: Readonly<{
        labelName: string,
        inputName: string,
        inputPlaceholder: string,
        inputType: string
    }>) {
        super(props);
        this.setState({ value: "" });

        this.labelName = props.labelName;
        this.inputName = props.inputName;
        this.inputPlaceholder = props.inputPlaceholder;
        this.inputType = props.inputType;
    }

    render() {
        return (
            <div className={styles.inputField}>
                <label>{this.labelName}</label>
                <input type={this.inputType} name={this.inputName} placeholder={this.inputPlaceholder} />
            </div>
        )
    }
}