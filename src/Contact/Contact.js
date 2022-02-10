import React from "react";

import Modal from "./ContactInsert.js";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpenModel: false , sexSelect : "*" }
    }
    openModal() {
        this.setState({ isOpenModel: true })
    }
    sexselectHandle(event){
        console.log(event.target.value);
    }
    render() {
        return (
            <form>
                <h1>通訊錄</h1>
                <label>性別
                    <select value={this.props.value} onChange={this.sexselectHandle}>
                        <option value = "*">全部</option>
                        <option value = "male">男</option>
                        <option value = "female">女</option>
                    </select>
                </label>
                <button onClick={this.openModal}>新增</button>
                {/* <Modal /> */}

            </form>
        )
    }
}

export default Contact;