import React, {Component} from "react";
import PropTypes from "prop-types";

class Counter2 extends Component {
    static propTypes = {
        onClick: PropTypes.func,
    }

    state = {}

    render() {
        return (
            <div onClick={this.props.onClick}>
                Counter
            </div>
        )
    }
}

export default Counter2;