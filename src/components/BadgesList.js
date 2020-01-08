import React from 'react'
import '../styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return (

            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="column col-sm-6 offset-sm-3">
                                    <li key={badge.id} >
                                        <div className="BadgesListItem">

                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={badge.firstName} />
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