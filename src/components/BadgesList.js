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
                                    <li key={badge.id} className="BadgesListItem">
                                        <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar" />
                                        <div>
                                            <h4 className="BadgeList-name">{badge.firstName}&nbsp;&nbsp;
                                        {badge.lastName}</h4>

                                            <span className="BadgeList-twiter">
                                                {badge.twitter}
                                            </span>
                                            <br />
                                            <span className="jobTitle">
                                                {badge.jobTitle}
                                            </span>

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