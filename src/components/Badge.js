import React from 'react';
import confLogo from './assets/images/badge-header.svg'
import './styles/Badge.css';

class Badge extends React.Component {
    render() {

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1> Jymma <br /> Mogollón</h1>

                </div>
                <div className="Badge__section-info">
                    <h3> Front-End</h3>
                    <div> @mc</div>
                </div>
                <div className="Badge__footer">
                    #Platziconf
            </div>
            </div>

        )




    }

}


export default Badge