import React from "react";

// const ContactDetail = (props) => {
//     let list = props.contactImformation.map((contact) => 
//         <tr>
//             <td>`${contact.result.name.first} ${contact.result.name.last}`</td>
//             <td>`${contact.result.gender}`</td>
//             <td>`${contact.result.email}`</td>
//             <td>`${contact.result.phone}`</td>
//             <td>`${contact.result.location.city} ${contact.result.name.country}`</td>
//         </tr>
//     );
//     console.log(list);
//     return (
//         <tbody>{props}
//         </tbody>
//     )
// }

class ContactTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: []
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/").then((res) => res.json()).then((json) => {
            this.setState({
                contact: json
            });

        })

    }
    render() {
        let { contact } = this.state;
        console.log(contact.results);
        let list;
        if (contact.length !== 0 && contact.results !== 'undefined') {
            list = contact.results.map((contacts) =>
                <tr>
                    <td>{`${contacts.name.first} ${contacts.name.last}`}</td>
                    <td>{`${contacts.gender}`}</td>
                    <td>{`${contacts.email}`}</td>
                    <td>{`${contacts.phone}`}</td>
                    <td>{`${contacts.location.city} ${contacts.location.country}`}</td>
                </tr>
            );
            // list=<tr>
            //     <td>
            //     {contact.results[0].name.first}
            //     </td>
            // </tr>
            // console.log(contact.results[0].name.first);
        }
        else{
            console.log(2);
        }

        return (
            <div>
                <div>
                    <table>
                        <thead>
                            <td>名稱</td>
                            <td>性別</td>
                            <td>郵件</td>
                            <td>電話</td>
                            <td>地址</td>
                        </thead>
                        <tbody>{list}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ContactTable;