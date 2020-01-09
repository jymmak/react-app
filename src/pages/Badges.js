import React from 'react';
import '../styles/Badges.css';
import confLogo from '../assets/images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount() {
        this.fetchData()
    }
    fetchData = async() => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };
    render() {
        if (this.state.loading === true) {
            return 'Loading ...'
        }
        return (

            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="" className="Badge_conf_logo" />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badges</Link>
                    </div>
                    <BadgesList badges={this.state.data} />
                </div>

            </React.Fragment>


        )
    }
}

export default Badges