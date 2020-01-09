import React from 'react';
import confLogo from '../assets/images/badge-header.svg'
import '../styles/Badge.css';

class Badge extends React.Component {
    render() {
     
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src='https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon' alt="Avatar" />
                    <h1>{this.props.firstName} <br />{this.props.lastName}</h1>

                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div> @{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #Platziconf
            </div>
            </div>

        )




    }

}


export default Badge