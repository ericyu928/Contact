import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <form>
                <h1>通訊錄</h1>
                <label>性別
                    <select>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                </label>
                <button>新增</button>
            </form>
        )
    }
}

export default Contact;