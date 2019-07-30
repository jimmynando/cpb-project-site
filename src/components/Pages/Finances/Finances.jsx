import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getFinances, deleteFinance } from '../../../actions/financeActions';

class Finances extends Component {
    componentDidMount() {
        this.props.getFinances();
    }

    onDeleteHandler(id) {
        this.props.deleteFinance(id).then(res => {
            console.log(res);
        });
    }

    render() {
        const { finances } = this.props;

        return (
            <div className="container-inner-flex">
                <h1>Listar Gastos</h1>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Data</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finances.map(finance => (
                            <tr key={finance._id}>
                                <td>{finance.description}</td>
                                <td>{finance.category}</td>
                                <td>{finance.valor}</td>
                                <td>{finance.data}</td>
                                <td className="cpb-center-around">
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.onDeleteHandler(finance._id)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

Finances.propTypes = {
    finances: PropTypes.array.isRequired,
    getFinances: PropTypes.func.isRequired,
    deleteFinance: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    finances: state.finance.finances
})

export default connect(mapStateToProps, { getFinances, deleteFinance })(Finances)
