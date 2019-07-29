import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default class Footes extends Component {
    render() {
        return (
            <div className="side-bar">
                <Link to="/finance">Listar Gastos</Link>
                <Link to="/addfinance">Adicionar Gastos</Link>
            </div>
        )
    }
}
