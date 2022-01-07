import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default class Dd extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary">
                   User Name
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/my_booking">
                        View Booking
                    </Dropdown.Item>
                    <Dropdown.Item href="/hoamepage">
                        Logout
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
