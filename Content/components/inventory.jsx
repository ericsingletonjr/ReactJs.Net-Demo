import React, { Fragment } from 'react';
import styled from 'react-emotion';
import { Helmet } from 'react-helmet';

const ModalStyle = styled`
.hide-modal {
    display: none;
}
.show-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(248, 246, 246, 0.8);
    display: block;
}`;

//class InventoryModal extends React.Component() {
//constructor(props) {

//    super(props);

//    this.state = {
//        showDetailModal: false,
//    };

//}
//showModal = (e) => {

//    this.setState({ showDetailModal: true })
//}
//hideModal = () => {

//    this.setState({ showDetailModal: false })

//}
// FORM SUBMISSION METHOD
//handleSubmit = (event) => {

//    event.preventDefault();

//    let newInvItem = { donorID: event.target.donor_id.value, sku: event.target.sku.value, name: event.target.name.value }
//    //let donor = event.target.donor_id.value;
//    //let skuval = event.target.sku.value;
//    //let nameval = event.target.name.value;
//    console.log(newInvItem, "event items submitted");

//    fetch("http://localhost:12345/api/inventory", {
//        method: "POST",
//        mode: "cors",
//        cache: "no-cache",
//        credentials: "same-origin",
//        headers: {

//            "Content-Type": "application/json",

//        },
//        redirect: "follow",
//        referrer: "no-referrer",
//        body: JSON.stringify(newInvItem),
//    }).then(response => response.json());
//}
// =======================================
// Methods 
// componentDidMount() - async call to db for paginated inventory list. Proof of life is full list. 
// =======================================
//<DetailView show={this.state.showDetailModal} handleClose={this.hideModal}>
//  <ModalStyle></ModalStyle>
//  </DetailView>
// <button onClick={this.showModal}>click me to see stuff</button>
//onSubmit={this.handleSubmit}
//}

const DetailView = (props) => {

    const showHideClassName = props.show ? "show-modal" : 'hide-modal';

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <button onClick={props.handleClose}>X</button>
                {props.children}
            </div>
        </div>
    )
}

export function handleSubmit(event) {

    event.preventDefault();
    let newInvItem = { donorID: event.target.donor_id.value, sku: event.target.sku.value, name: event.target.name.value }
    //let donor = event.target.donor_id.value;
    //let skuval = event.target.sku.value;
    //let nameval = event.target.name.value;
    console.log(newInvItem, "event items submitted");
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
        body: JSON.stringify(newInvItem),
    }).then(response => response.json());
}

export function Inventory() {
    return (
        <Fragment>
            <div className="Inventory">
                <h2>I am an Inventory dashboard landing page.</h2>
                <p>Text from inventory modal</p>
                <form className="newItemForm" onSubmit={handleSubmit}>
                    <input type="number" name="donor_id" required />
                    <input type="text" name="sku" required />
                    <input type="text" name="name" required />
                    <input type="submit" value="Submit new Item" />
                </form>
            </div>
        </Fragment>
        // Render as a table with clickable table row 
        // ForEach to render the object into the table. 
    );
}