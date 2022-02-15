import React from "react";

import ContactTable from "./ContactTable";
import ContactInsert from "./ContactInsert";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpenModel: false, sexSelect: "*", addNewContactList: [] }
    }
    openModal = event => {
        event.preventDefault();

        this.setState({ isOpenModel: true })
    }
    sexselectHandle = event => {
        this.setState({ sexSelect: event.target.value });
    }
    addContact = (newcontact) => {
        this.setState({
            addNewContactList: newcontact
        })
    }
    setModalState = (modalstate) => {
        this.setState({
            isOpenModel: modalstate
        })
    }
    formSub = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>通訊錄</h1>
                <label>性別
                    <select value={this.state.value} onChange={this.sexselectHandle}>
                        <option value="*">全部</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                </label>
                <button onClick={this.openModal} type="submit">新增</button>
                {/* <Modal /> */}
                {<ContactTable onSelectedSex={this.state.sexSelect} addContactList={this.state.addNewContactList} />}
                {<ContactInsert addNewContact={this.addContact} modalState={this.setModalState} />}
            </div>

        )
    }
}

export default Contact;