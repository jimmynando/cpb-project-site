import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFinance } from '../../../actions/financeActions';

import SimpleText from '../../SimpleText/SimpleText';

class AddFinance extends Component {
    componentDidMount() {
        this.props.addFinance();
    }
    
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            value: "",
            data: "",
            category: ""
        }
    }

    onChangeHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler(e) {        
        e.preventDefault();
        this.props.addFinance({ finance: this.state }).then(() => {
            this.setState({}); 
        });    
        
    }
    
    render() {
        return (
            <div className="container-inner-flex">
                <h1>Adicionar Gastos</h1>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <SimpleText label="Descrição" name="description" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Valor" name="value" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Data" name="data" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Categoria" name="category" onChange={e => this.onChangeHandler(e)} />
                    <button className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

AddFinance.propTypes = {
    finances: PropTypes.array.isRequired,
    addFinance: PropTypes.func.isRequired
  }

const mapStateToProps = (state) => ({
    finances: state.finance.finances
})

export default connect(mapStateToProps, {addFinance})(AddFinance)
