import React from 'react';
import {connect} from 'react-redux';
import {randomChange} from './random.actions'

const ReduxTest = ({randomChange, number, hidden}) => (
    <div onClick={() => randomChange(Math.random()*1000)}>
        <p>ReduxTest</p>
        <p>{number}</p>
        <p>hidden: {hidden ? 'true': 'false'}</p>
    </div>
)

const mapDispatchToProp = dispatch => ({
    randomChange: (value) => dispatch(randomChange(value))
})

const mapStateToProps = state => ({
    number: state.randomReducer.number,
    hidden: state.testReducer.hidden
})

export default connect(mapStateToProps, mapDispatchToProp)(ReduxTest);