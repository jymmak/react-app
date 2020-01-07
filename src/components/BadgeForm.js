import React from 'react';


class BadgeForm extends React.Component {
    state = { 
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "designer",
        twitter: "",
    };
    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });

        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        )

    };


    handleClik = (e) => {
        console.log(
            "Button was clicked"
        )
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    };

    render() {

        return (

            <div>
                <h1>
                    New Atttendant
                </h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName" 
                            value={this.state.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}  />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}  />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle}  />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter" 
                            value={this.state.twitter} />
                    </div>

                    <button type="submit"
                        onClick={this.handleClik}
                        className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>

        )




    }

}


export default BadgeForm