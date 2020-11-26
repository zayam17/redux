import React, { Component } from 'react';
import {Field, withFormik,Form} from 'formik';
import * as Yup from 'yup';



const EmployeeForm =({errors,touched,isSubmitting}) =>(
    <div>
        <h1>Employee Form</h1>
        <Form>
            <div>
                <Field type="text" name="empname" />
                {touched.empname && errors.empname && <span style={{color: 'red'}}>{errors.empname}</span>}
            </div>
            <div>
                <label>
                    <Field type="checkbox"  name="manager"/>
                    Manager
                </label>
            </div>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({employeename,bManager}){
        return{
            empname:employeename ||'',
            manager:bManager|| false
        }
    },
    validationSchema: Yup.object().shape({
        empname: Yup.string().min(3,"Name must be atleast 3 character").required("Name is required")
    }),
    handleSubmit(values,{resetForm,setSubmitting,setErrors}){
        console.log(values);
        setTimeout(() =>{
            if(values.empname==='God'){
                setErrors({empname: 'God cant be added'})
            }else{
                resetForm()
                alert(JSON.stringify(values));
            }
            setSubmitting(false);
        },2000);
    }
})(EmployeeForm)

export default FormikEmployeeForm