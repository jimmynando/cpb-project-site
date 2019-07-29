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
            descriptionFinance: "",
            valueFinance: "",
            dateFinance: "",
            categoryFinance: ""
        }
    }

    onChangeHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { finances } = this.props;
        return (
            <div className="container-inner-flex">
                <h1>Adicionar Gastos</h1>
                <form onSubmit="">
                    <SimpleText label="Descrição" name="descriptionFinance" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Valor" name="valueFinance" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Data" name="dateFinance" onChange={e => this.onChangeHandler(e)} />
                    <SimpleText label="Categoria" name="categoryFinance" onChange={e => this.onChangeHandler(e)} />
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
