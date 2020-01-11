import React from 'react'
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'


class BadgesListItem extends React.Component {

    render() {

        return (

            <div className="BadgesListItem">
                <Gravatar className="Badge__avatar" email={this.props.badge.email} alt={`${this.props.badge.firstName}${this.props.badge.lastName}`} />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
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

                        <li key={badge.id} >
                            <Link  className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>

                    )
                }
                )}

            </ul>

        )
    }
}


export default BadgesList