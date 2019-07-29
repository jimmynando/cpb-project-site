import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getFinances } from '../../../actions/financeActions';

class Finances extends Component {
    componentDidMount() {
        this.props.getFinances();        
    }    

    render() {
        const { finances } = this.props;
        return (
            <div className="container-inner-flex">
                <h1>Listar Gastos</h1>
                {finances.map(finance => (
                    <p key={finance._id}>{finance.description}</p>
                ))}
            </div>
        )
    }
}

Finances.propTypes = {
    finances: PropTypes.array.isRequired,
    getFinances: PropTypes.func.isRequired
  }

const mapStateToProps = (state) => ({
    finances: state.finance.finances
})

export default connect(mapStateToProps, {getFinances})(Finances)
