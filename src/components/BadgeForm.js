import React from 'react';


class BadgeForm extends React.Component {
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    };


    handleClik = (e) => {
        console.log(
            "Button was clicked"
        )
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was formett")
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
                            name="firstName" />
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