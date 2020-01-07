import React from 'react';
import Navbar from '../components/Navbar'
import header from '../assets/images/badge-header.svg'
import '../styles/BadgeNew.css'
import Badge from '../components/Badge'
class BadgeNew extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="" />
                </div>
                <div className="container">

                    <div className="row" >

                        <div className="col">

                            <Badge firstName="Jymma Karina" lastName="Mogollón Cardoza" jobTitle="Front" twitter="mc" avatar="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"/>


                        </div>
                    </div>


                </div>

            </div>

        )
    }
}

export default BadgeNew
