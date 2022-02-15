import React from "react";

class ContactInsert extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            sex:'',
            email:'',
            phone:'',
            locate:''
        }
    }
    nameselectHandle = event =>{
        this.setState({name:event.target.value});
    }
    sexselectHandle = event =>{
        this.setState({sex:event.target.value});
    }
    emailselectHandle = event =>{
        this.setState({email:event.target.value});
    }
    phoneselectHandle = event =>{
        this.setState({phone:event.target.value});
    }
    locateselectHandle = event =>{
        this.setState({locate:event.target.value});
    }
    onCancelClick = () =>{
        this.props.modalState(false)
    }
    onOkClick = () =>{
        this.props.modalState(false)
        let newcontact={
            name:this.state.name,
            sex:this.state.sex,
            email:this.state.email,
            phone:this.state.phone,
            locate:this.state.locate
        }
        this.props.addNewContact(newcontact)
    }
    render() {
        return (
            <div>
                <label>名稱</label>
                <input type="text" value={this.state.name} onChange={this.nameselectHandle}></input>
                <label>性別</label>
                <select value={this.state.sex} onChange={this.sexselectHandle}>
                    <option value="*">全部</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
                <label>郵件</label>
                <input type="text" value={this.state.email} onChange={this.emailselectHandle}></input>
                <label>電話</label>
                <input type="text" value={this.state.phone} onChange={this.phoneselectHandle}></input>
                <label>地址</label>
                <input type="text" value={this.state.locate} onChange={this.locateselectHandle}></input>
                <br></br>
                <button type="button" onClick={this.onCancelClick}>取消</button>
                <button type="button" onClick={this.onOkClick}>確定</button>
            </div>
        )
    }
}

export default ContactInsert;