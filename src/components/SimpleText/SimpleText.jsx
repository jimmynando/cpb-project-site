import React from 'react';

const SimpleText = (props) => {
    const { name, onChange, label, value, defaultValue } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="form-control" type="text" name={name} onChange={onChange} value={value} defaultValue={defaultValue} />
        </div>
    );
}

export default SimpleText;
