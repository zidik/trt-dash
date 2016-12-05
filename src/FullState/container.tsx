import * as React from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {IFullState} from "./reducer"

const mapStateToProps = (state:any):IFullState => ({
    ...state.robotState
});

export default connect(mapStateToProps)(Component);