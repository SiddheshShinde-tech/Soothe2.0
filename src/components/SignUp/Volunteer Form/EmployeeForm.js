import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from "./components/Controls";
import { useForm, Form } from './components/useForm';
import * as employeeService from "./services/employeeService";
import {Link} from "react-router-dom";
import VolunteerHomePage from '../../VolunteerHomePage/VolunteerHomepage';
import { useHistory } from "react-router-dom";
import {db} from "../../../firebase";



const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function EmployeeForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [qualification,setQualification] = useState("");
    const [designation,setDesignation] = useState("");
    const [gender,setGender] = useState("");

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
        
        console.log("Form submitted");
        // if (validate()){
        //     console.log("Volunteer Validated");
        //     employeeService.insertEmployee(values)
        //     resetForm();
        //     history.push('/VolunteerHomePage'); //pushing the new url
        // }

        db.collection('volunteers').add({
            name:name,
            email:email,
            contact:contact,
            gender:gender,
            designation:designation,
            qualification:qualification,
        }).then(() => {
            alert("Form submitted");
            history.push('/VolunteerHomePage'); //pushing the new url
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setContact("");
        setQualification("");
        setDesignation("");
        setGender("");

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        // value={values.fullName}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        // error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        // value={values.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // error={errors.email}
                    />
                    <Controls.Input
                        label="Contact Number"
                        name="mobile"
                        // value={values.mobile}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        // error={errors.mobile}
                    />
                    <Controls.Input
                        label="Qualifications"
                        name="city"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        options={employeeService.getDepartmentCollection()}
                        // error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="DOB"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="No time restrictions"
                        value={values.isPermanent}
                        onChange={handleInputChange}
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
