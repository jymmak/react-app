import React from 'react'
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHashtag, faBriefcase } from '@fortawesome/free-solid-svg-icons'

class BadgesListItem extends React.Component {

    render() {

        return (

            <div className="BadgesListItem ">
                <Gravatar className="Badge__avatar" email={this.props.badge.email} alt={`${this.props.badge.firstName}${this.props.badge.lastName}`} />

                <div className="m-auto">

                    <strong>
                        <FontAwesomeIcon icon={faUser} />  {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br /><FontAwesomeIcon icon={faHashtag} />@{this.props.badge.twitter}
                    <br />
                    <FontAwesomeIcon icon={faBriefcase} />{this.props.badge.jobTitle}
                </div>
            </div>
        )
    }
}


function useSearchBadges(badges) {
    const [filteredBadges, setFilterBadges] = React.useState(badges);
    const [query, setQuery] = React.useState('');

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());

        });

        setFilterBadges(result)
    }, [badges, query]);
    return { query, setQuery, filteredBadges }
}
function BadgesList(props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label > Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                        }} />

                </div>
                <h3>
                    No encontramos ningún badge
            </h3>

                <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
            </div>
        )
    }


    return (
        <div className="BadgesList">

            <div className="form-group">
                <label > Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }} />

            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
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
        </div>
    )

}


export default BadgesList