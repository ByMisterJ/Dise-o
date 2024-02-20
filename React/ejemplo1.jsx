import React from 'react';

class MiComponente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje: 'Hola, mundo!'
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
            </div>
        );
    }
}

export default MiComponente;