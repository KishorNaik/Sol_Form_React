import React from "react"

interface IErrorDisplayPros{
    Message:string
}

export const ErrorDisplay=(props:IErrorDisplayPros):JSX.Element=>{

    return (
        <React.Fragment>
            <span style={{color:'red'}}>
                {props.Message}
            </span>
        </React.Fragment>
    )
}

