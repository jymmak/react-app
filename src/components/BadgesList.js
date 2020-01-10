import React from 'react'
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'


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
                                        <div className="BadgesListItem">
                                            <Gravatar className="Badge__avatar" email={badge.email} alt={`${badge.firstName}${badge.lastName}`} />

                                            <div>
                                                <strong>
                                                    {badge.firstName} {badge.lastName}
                                                </strong>
                                                <br />@{badge.twitter}
                                                <br />
                                                {badge.jobTitle}
                                            </div>
                                        </div>
                                    </li>
                                </div>
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