import React from "react";


class ContactTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            addContactList: [],
            selectcontact:[]
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/").then((res) => res.json()).then((json) => {
            this.setState({
                contact: json.results.map(item => ({
                    id:Math.random().toString(),
                    name: `${item.name.first} ${item.name.last}`,
                    sex: item.gender,
                    email: item.email,
                    phone: item.phone,
                    locate: `${item.location.city} ${item.location.country}`
                })
                )
            })
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.addContactList !== this.props.addContactList && this.props.addContactList.length !== 0) {
            if (this.props.addContactList.length !== 0) {
                this.setState({
                    contact: [...prevState.contact, this.props.addContactList],
                    addContactList: this.props.addContactList
                }
                )
            }
        }
    }
    render() {
        let { contact } = this.state;
        let selectcontact = [];
        if(this.props.onSelectedSex !== "*"){
            for(let i=0;i<=contact.length-1;i++){
                if(contact[i].sex === this.props.onSelectedSex){
                    selectcontact.push(contact[i])
                }
            }
        }
        else{
            for(let i=0;i<=contact.length-1;i++){
                    selectcontact.push(contact[i])               
            }
        }
        return (
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>名稱</th>
                            <th>性別</th>
                            <th>郵件</th>
                            <th>電話</th>
                            <th>地址</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectcontact.map((contacts) =>
                                <tr key={contacts.id}>
                                    <td>{contacts.name}</td>
                                    <td>{contacts.sex}</td>
                                    <td>{contacts.email}</td>
                                    <td>{contacts.phone}</td>
                                    <td>{contacts.locate}</td>

                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ContactTable;