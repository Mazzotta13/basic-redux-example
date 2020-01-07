import React from 'react';
import {connect} from 'react-redux';
import {toggleTestHidden} from './redux-test.actions'

const ReduxTest = ({toggleTestHidden, hidden}) => (
    <div onClick={toggleTestHidden}>
        <p>ReduxTest</p>
        <p>{hidden ? 'true': 'false' }</p>
    </div>
)

const mapDispatchToProp = dispatch => ({
    toggleTestHidden: () => dispatch(toggleTestHidden())
})

const mapStateToProps = state => ({
    hidden: state.testReducer.hidden
})

export default connect(mapStateToProps, mapDispatchToProp)(ReduxTest);