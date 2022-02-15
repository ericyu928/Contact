import React from "react";

import ContactTable from "./ContactTable";
import ContactInsert from "./ContactInsert";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpenModel: false , sexSelect : "*" , addNewContactList:[]}
    }
    openModal = () => {
        this.setState({ isOpenModel: true })
    }
    sexselectHandle = event =>{
        this.setState({sexSelect:event.target.value});
    }
    addContact = (newcontact) =>{
        this.setState({
            addNewContactList:newcontact
        })
    }
    setModalState = (modalstate) =>{
        this.setState({
             isOpenModel: modalstate 
        })
    }
    render() {
        return (
            <form>
                <h1>通訊錄</h1>
                <label>性別
                    <select value={this.state.value} onChange={this.sexselectHandle}>
                        <option value = "*">全部</option>
                        <option value = "male">男</option>
                        <option value = "female">女</option>
                    </select>
                </label>
                <button onClick={this.openModal} type="button">新增</button>
                {/* <Modal /> */}
                {!this.state.isOpenModel &&<ContactTable onSelectedSex={this.state.sexSelect} addContactList={this.state.addNewContactList}/>}
                {this.state.isOpenModel && <ContactInsert addNewContact={this.addContact} modalState={this.setModalState}/>}
            </form>
        )
    }
}

export default Contact;