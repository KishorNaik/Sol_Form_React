import React , { Component } from "react";
import { Formik, Form,Field } from "formik";
import * as Yup from 'yup';
import { ErrorDisplay } from "./ErrorDisplay";



export default class FormDemo extends Component{



    public render(){

        // const formik=useFormik({
        //     initialValues:{
        //         firstName:'',
        //         lastName:'',
        //         email:''
        //     },
        //     validationSchema:Yup.object({
        //         firstName:Yup.string()
        //                     .max(15,'Must be 15 characters or less')
        //                     .required('Required'),
        //         lastName:Yup.string()
        //                     .max(20,'Must be 20 characters or less')
        //                     .required('Required'),
        //         email:Yup.string().email('Invalid email address').required('Required')
        //     }),
        //     onSubmit: (values)=>{
        //         alert(JSON.stringify(values));
        //     }
        // });

        return (
            <React.Fragment>
                <Formik
                    initialValues={{
                        firstName:'',
                        lastName:'',
                        email:''
                    }}
                    validationSchema={Yup.object({
                                firstName:Yup.string()
                                            .max(15,'Must be 15 characters or less')
                                            .required('Required'),
                                lastName:Yup.string()
                                            .max(20,'Must be 20 characters or less')
                                            .required('Required'),
                                email:Yup.string().email('Invalid email address').required('Required')
                            })
                        }
                    onSubmit={(values)=>{
                                alert(JSON.stringify(values));
                            }}
                    >
                    {({errors,touched})=>(
                        <Form>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <label htmlFor="txtFirstName" className="form-label">First Name</label>
                                        <Field type="text" name="firstName" className="form-control" placeholder="First Name"></Field>
                                        {errors.firstName && touched.firstName ? (<ErrorDisplay Message={errors.firstName}></ErrorDisplay>) : null}
                                     </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <label htmlFor="txtlastName" className="form-label">Last Name</label>
                                        <Field type="text" name="lastName" className="form-control" placeholder="Last Name"></Field>
                                        {errors.lastName && touched.lastName ? (<ErrorDisplay Message={errors.lastName}></ErrorDisplay>) : null}
                                     </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <label htmlFor="txtEmail" className="form-label">Email</label>
                                        <Field type="email" name="email" className="form-control" placeholder="Email"></Field>
                                        {errors.email && touched.email ? (<ErrorDisplay Message={errors.email}></ErrorDisplay>) : null}
                                     </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-secondary">Submit</button>
                                        </div>
                                         
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </React.Fragment>
        )
    }

}