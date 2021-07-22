import React, { Component } from "react";
import { Formik, Form,Field } from "formik";
import * as Yup from 'yup';
import "yup-phone";
import { ErrorDisplay } from "./ErrorDisplay";

interface IFormDemo2Props{

}


export default class FormDemo2 extends Component<IFormDemo2Props,{}>{
 
    private firstNameElementRef:React.RefObject<HTMLInputElement>;

    constructor(props:IFormDemo2Props){
        super(props);

        this.firstNameElementRef=React.createRef<HTMLInputElement>();
    }


    public render(){
        return (
            <React.Fragment>
                <Formik
                    initialValues={
                        {
                            FirstName:'',
                            LastName:'',
                            EmailId:'',
                            MobileNo:'',
                            Gender:'',
                            Address:''
                        }
                    }
                    validationSchema={
                        Yup.object({
                        FirstName:Yup.string()
                                    .max(15,'Must be 15 characters or less')
                                    .required('Required'),
                        LastName:Yup.string()
                                    .max(20,'Must be 20 characters or less')
                                    .required('Required'),
                        EmailId:Yup.string()
                                    .email('Invalid email address')
                                    .required('Required'),
                        MobileNo:Yup.string()
                                     .phone()
                                     .required('Required'),
                        Gender:Yup.string()
                                    .required('Select Year'),
                        Address:Yup.string()
                                    .required('Required')
                        })
                    }
                    onSubmit={(values,{resetForm})=>{
                        console.log(JSON.stringify(values));
                        resetForm();    
                        this.firstNameElementRef.current?.focus();
                    }}
                >
                    {
                        (formik)=> (

                            <form onSubmit={formik.handleSubmit}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="txtFirstName" className="form-label">First Name</label>
                                            <input ref={this.firstNameElementRef} type="text" className="form-control" placeholder="First Name" {...formik.getFieldProps('FirstName')} />  
                                            {formik.errors.FirstName ? <ErrorDisplay Message={formik.errors.FirstName}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="txtLastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last Name" {...formik.getFieldProps('LastName')} />  
                                            {formik.errors.LastName ? <ErrorDisplay Message={formik.errors.LastName}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="txtEmailId" className="form-label">Email Id</label>
                                            <input type="text" className="form-control" placeholder="Email Id" {...formik.getFieldProps('EmailId')} />  
                                            {formik.errors.EmailId ? <ErrorDisplay Message={formik.errors.EmailId}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="txtMobile" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" placeholder="Mobile Number" {...formik.getFieldProps('MobileNo')} />  
                                            {formik.errors.MobileNo ? <ErrorDisplay Message={formik.errors.MobileNo}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="ddGender" className="form-label">Gender</label>
                                            <select className="form-control" {...formik.getFieldProps('Gender')}>  
                                                <option value="">Select</option>  
                                                <option value="male">Male</option>  
                                                <option value="female">Female</option>  
                                            </select>  
                                            {formik.errors.Gender ? <ErrorDisplay Message={formik.errors.Gender}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <label htmlFor="txtAddress" className="form-label">Address</label>
                                            <textarea className="form-control" {...formik.getFieldProps('Address')} />  
                                            {formik.errors.Address ? <ErrorDisplay Message={formik.errors.Address}></ErrorDisplay> : null}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary" onClick={()=> {
                                                formik.resetForm();
                                                this.firstNameElementRef.current?.focus();
                                            }}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )
                    }

                </Formik>
            </React.Fragment>
        )
    }
}