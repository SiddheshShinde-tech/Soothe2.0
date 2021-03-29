import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "./components/Controls";
import { useForm, Form } from './components/useForm';
import * as employeeService from "./services/employeeService";
import { useHistory } from "react-router-dom";
import {db} from "../../../firebase";



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

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [age,setAge] = useState("");
    const [weight,setWeight] = useState("");
    const [gender,setGender] = useState("");
    const [bloodgroup,setBloodGroup] = useState("");
    const [diabetic,setDiabetic] = useState("");


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
        // if (validate()){
        //     console.log("Patient Validated");
        //     employeeService.insertEmployee(values)
        //     resetForm();
        //     history.push('/login');
        // }

        db.collection('patients').add({
            name:name,
            email:email,
            contact:contact,
            gender:gender,
            age:age,
            weight:weight,
            bloodgroup:bloodgroup,
            diabetic:diabetic,
        }).then(() => {
            alert("Form submitted");
            history.push('/login'); //pushing the new url
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setContact("");
        setAge("");
        setWeight("");
        setBloodGroup("");
        setDiabetic("");
        setGender("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Contact Number"
                        name="mobile"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <Controls.Input
                        label="Weight (in Kg)"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        error={errors.weight}
                    />
                    {/* <Controls.Input
                        label="Height"
                        name="height"
                        value={values.height}
                        onChange={handleInputChange}
                        error={errors.height}
                    /> */}

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        items={genderItems}
                    />
                    <Controls.RadioGroup
                        name="diabetic"
                        label="Diabetic"
                        value={diabetic}
                        onChange={(e) => setDiabetic(e.target.value)}
                        items={diabeticItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Blood Group"
                        value={bloodgroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.RadioGroup
                        name="medication"
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