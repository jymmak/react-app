import React from 'react';
import '../styles/BadgeDetails.css'
import confLogo from '../assets/images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom';

class BadgeDetails extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId

            )
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        if (this.state.loading === true) {
            return <PageLoading />;

        }
        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        const badge = this.state.data;
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>

                            <div className="col-sm-6 BadgeDetails__hero-attendant-name ">
                                <h1>{badge.firstName}&nbsp; {badge.lastName}</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Badge firstName={badge.firstName} lastName={badge.lastName}
                                email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle} />
                        </div>
                        <div className="col-sm-6">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default BadgeDetails;
