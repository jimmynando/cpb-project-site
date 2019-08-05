import React from 'react';

const SimpleText = (props) => {
    const { name, onChange, label, value } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="form-control" type="date" name={name} onChange={onChange} value={value} />
        </div>
    );
}

export default SimpleText;
