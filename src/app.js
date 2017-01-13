
// entry point

import React from 'react';

var HelloMessage = React.createClass({
    render: function() {
        return (
            <div className="container">
            <h1>Gettting Started</h1>
            </div>
        );
    }
});

React.render(<HelloMessage />, mountNode);