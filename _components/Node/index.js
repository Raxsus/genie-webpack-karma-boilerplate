import React, { PropTypes } from 'react';

export const Node = ({label, selected, onClick}) => (
    <li className={selected ? 'node_selected' : 'node'} onClick={e => {onClick(e);}}>
        {label}
    </li>
);

// Example of PropTypes usages
﻿Node.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
};

// Then use: <Node label="Nike" selected="false" onClick="alert('Click')"/>
// OR
// Then use: <Node {...{label:'Nike', selected: false, onClick: () => {} }} />