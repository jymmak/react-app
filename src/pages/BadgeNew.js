import React from 'react';
import header from '../assets/images/platziconf-logo.svg'
import '../styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'



class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
            avatarUrl:""

        }
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <React.Fragment>

                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
                </div>
                <div className="container">

                    <div className="row" >

                        <div className="col-6">

                            <Badge
                                firstName={this.state.form.firstName || 'Nombres'}
                                lastName={this.state.form.lastName || 'Apellidos'}
                                jobTitle={this.state.form.jobTitle || 'Trabajo'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                email={this.state.form.email || 'Email '}
                                avatarUrl='https://www.gravatar.com/avatar/d554ed2d6492c58ee28b9155b5d5a1da?d=identicon' />

                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues="this.state.form" />
                        </div>
                    </div>


                </div>

            </React.Fragment>

        )
    }
}

export default BadgeNew
