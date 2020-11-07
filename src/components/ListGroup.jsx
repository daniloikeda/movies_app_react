import React from 'react';
import PropTypes from 'prop-types';

function ListGroup (props) {

    return(
        <div className="list-group">
            {props.showAll && <a href="/#" className="list-group-item list-group-item-action">Show All</a>}
            {props.items.map((item) => (
                <a href="/#" key={item[props.keyProperty]} className="list-group-item list-group-item-action">{item[props.valueProperty]}</a>
            ))}
        </div>
  )
}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    valueProperty: PropTypes.string.isRequired,
    keyProperty: PropTypes.node.isRequired
}

export default ListGroup;