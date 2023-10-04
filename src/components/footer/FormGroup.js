import React from 'react'

export default function FormGroup({ className, htmlFor, labelClassName, label, type, id, name, placeholder }) {
    return (
        <div className={`px-1 ${className}`}>
            <div className="form-group">
                <label htmlFor={htmlFor} className={`font-size-0-9 ${labelClassName}`}>{label}</label>
                <input
                    type={type}
                    className="form-control rounded-0 border border-2 m-0"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}
