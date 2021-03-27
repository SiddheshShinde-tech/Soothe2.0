import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "./components/Controls";
import { useForm, Form } from './components/useForm';
import * as employeeService from "./services/employeeService";
import { useHistory } from "react-router-dom";



const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const diabeticItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    age: '',
    weight:'',
    height:'',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function PatientForm() {

    let history = useHistory();

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        if ('age' in fieldValues)
            temp.age = fieldValues.age.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Patient Form submitted");
        if (validate()){
            console.log("Patient Validated");
            employeeService.insertEmployee(values)
            resetForm();
            history.push('/login');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Contact Number"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Weight"
                        name="weight"
                        value={values.weight}
                        onChange={handleInputChange}
                        error={errors.weight}
                    />
                    <Controls.Input
                        label="Height"
                        name="height"
                        value={values.height}
                        onChange={handleInputChange}
                        error={errors.height}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.RadioGroup
                        name="diabetic"
                        label="Diabetic"
                        value={values.diabetic}
                        onChange={handleInputChange}
                        items={diabeticItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Blood Group"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.RadioGroup
                        name="diabetic"
                        label="Are you on any medication currently ?"
                        value={values.diabetic}
                        onChange={handleInputChange}
                        items={diabeticItems}
                    />
                    

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"/>
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}