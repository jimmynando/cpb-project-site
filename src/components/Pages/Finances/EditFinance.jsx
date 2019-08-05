import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { editFinance, getFinance } from '../../../actions/financeActions';

import SimpleText from '../../SimpleText/SimpleText';
import SimpleDate from '../../SimpleDate/SimpleDate';

import { dateToStandard } from '../../../helpers/global';

class EditFinance extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
            valor: '',
            data: '',
            category: ''
        };
    }    

    componentWillReceiveProps(nextProps, nextState) {
        const { description, valor, data, category } = nextProps.finances;

        this.setState({
            description,
            valor,
            data: dateToStandard(data),
            category
        })
    }

    componentDidMount() {
        const { idFinance } = this.props.match.params;
        this.props.getFinance(idFinance);
    }

    onChangeHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const { description, valor, data, category } = this.state;
        const { idFinance } = this.props.match.params;

        const finance = {
            description,
            valor,
            data,
            category
        }

        this.props.editFinance(idFinance, { finance: finance }).then(() => {
            this.setState({});
        });

    }

    render() {
        const { description, valor, data, category } = this.state;

        return (
            <div className="container-inner-flex">
                <h1>Editar Gastos</h1>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <SimpleText label="Descrição" name="description" onChange={e => this.onChangeHandler(e)} value={description} />
                    <SimpleText label="Valor" name="valor" onChange={e => this.onChangeHandler(e)} value={valor} />
                    <SimpleDate label="Data" name="data" onChange={e => this.onChangeHandler(e)} value={data} />
                    <SimpleText label="Categoria" name="category" onChange={e => this.onChangeHandler(e)} value={category} />
                    <button className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

EditFinance.propTypes = {
    finance: PropTypes.object,
    editFinance: PropTypes.func.isRequired,
    getFinance: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    finances: state.finance.finance
})

export default connect(mapStateToProps, { editFinance, getFinance })(EditFinance)
