import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFinance, getFinance } from '../../../actions/financeActions';

import SimpleText from '../../SimpleText/SimpleText';
import SimpleDate from '../../SimpleDate/SimpleDate';

class AddFinance extends Component {
    componentDidMount() {
        const { idFinance } = this.props.match.params;
        this.props.getFinance(idFinance);
    }
    
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            valor: "",
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
        const { finances } = this.props;
        return (
            <div className="container-inner-flex">
                <h1>Adicionar Gastos</h1>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <SimpleText label="Descrição" name="description" onChange={e => this.onChangeHandler(e)} value={finances.description} />
                    <SimpleText label="Valor" name="valor" onChange={e => this.onChangeHandler(e)} value={finances.valor} />
                    <SimpleDate label="Data" name="data" onChange={e => this.onChangeHandler(e)} value={finances.data} />
                    <SimpleText label="Categoria" name="category" onChange={e => this.onChangeHandler(e)} value={finances.category} />
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

export default connect(mapStateToProps, {addFinance, getFinance})(AddFinance)
