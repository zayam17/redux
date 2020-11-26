import React, { Component } from 'react';
import {Field, withFormik,Form} from 'formik';
import * as Yup from 'yup';

const UserForm =({touched}) =>(
    <div>
        <h1>User Form</h1>
        <Form>
            <div>
                <Field type="text" name="username" />
            </div>
            <div>
                <label>
                    <Field type="text"  name="userloc"/>
                    Manager
                </label>
            </div>
            <br/>
            <button type="submit" >Submit</button>
        </Form>
    </div>
)

const FormikUserForm = withFormik({
    mapPropsToValues({username,userlocation}){
        return{
           username:'',
           userloc:userlocation||''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(3,"Name must be atleast 3 character").required("Name is required"),
        userloc: Yup.string().min(3,"Name must be atleast 3 character").required("Name is required")
    })
})(UserForm)

export default FormikUserForm;