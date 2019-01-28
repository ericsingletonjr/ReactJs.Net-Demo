﻿import React from 'react';
import { DetailView } from './detail-view.jsx';

export class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetailModal: false,
        };
    }

    showModal = (e) => {
        console.log('fired show')
        this.setState({ showDetailModal: true})
    }

    hideModal = () => {
        console.log('fired hide')
        this.setState({ showDetailModal: false})
    }

    // FORM SUBMISSION METHOD
    handleSubmit = (event) => {
        event.preventDefault();
        let newInvItem = { donorID: event.target.donor_id.value, sku: event.target.sku.value, name: event.target.name.value }
        fetch("http://localhost:9456/api/test", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(newInvItem)
        }).then(response => {
            console.log(response);
            //return response.json();
            });
    }
    render() {
        return (
            <div className="Inventory">
                <h2>I am an Inventory dashboard landing page.</h2>
                <button onClick={ this.showModal }>click me to see stuff</button>
                <DetailView show={ this.state.showDetailModal } handleClose={this.hideModal}>
                    <p>Text from inventory modal</p>
                    <form className="newItemForm" onSubmit={this.handleSubmit}>
                        <input type="number" name="donor_id" required/>
                        <input type="text" name="sku" required/>
                        <input type="text" name="name" required/>
                        <input type="submit" value="Submit new Item"/>
                    </form>
                </DetailView>
            </div>
        );
    }
}