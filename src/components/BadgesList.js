import React from 'react'
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHashtag,faBriefcase } from '@fortawesome/free-solid-svg-icons'

class BadgesListItem extends React.Component {

    render() {

        return (

            <div className="BadgesListItem ">
                <Gravatar className="Badge__avatar" email={this.props.badge.email} alt={`${this.props.badge.firstName}${this.props.badge.lastName}`} />

                <div className="m-auto">
                   
                    <strong>
                    <FontAwesomeIcon icon={faUser } />  {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br /><FontAwesomeIcon icon={faHashtag} />@{this.props.badge.twitter}
                    <br />
                    <FontAwesomeIcon icon={faBriefcase } />{this.props.badge.jobTitle}
                </div>
            </div>
        )
    }
}

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>
                        No encontramos ningún badge
            </h3>

                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            )
        }


        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="column col-sm-6 offset-sm-3">
                                      <li key={badge.id} >
                                    <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                        <BadgesListItem badge={badge} />
                                    </Link>
                                </li></div>
                            </div>
                        </div>


                    )
                }
                )}

            </ul>

        )
    }
}


export default BadgesList