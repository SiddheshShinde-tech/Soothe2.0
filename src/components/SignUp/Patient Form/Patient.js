import React from 'react'
import PatientForm from "./PatientForm";
import PageHeader from "./components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Patients() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Patient Registration"
                subTitle="Register yourself to enter a new world!"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <PatientForm />
            </Paper>
        </>
    )
}