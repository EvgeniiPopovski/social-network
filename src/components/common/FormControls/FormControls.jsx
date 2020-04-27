import React from 'react'
import s from './FormControls.module.css'



export const TextArea = ({input, meta, ...props}) => {
    const handleError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (handleError ? s.error : null)}>
            <textarea {...input} {...props}/>
            {handleError? <span>{meta.error}</span> : null}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const handleError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (handleError ? s.error : null)}>
            <input {...input} {...props}/>
            {handleError? <span>{meta.error}</span> : null}
        </div>
    )
}
