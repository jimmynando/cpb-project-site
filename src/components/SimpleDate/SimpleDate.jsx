import React from 'react';

const SimpleText = (props) => {
    const { name, onChange, label } = props;
    return (
        <div className="form-group">
            <label for={name}>{label}</label>
            <input className="form-control" type="date" name={name} onChange={onChange} />
        </div>
    );
}

export default SimpleText;
