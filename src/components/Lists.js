import React from 'react'
import List from './List'
import Form from './Form'

class Lists extends React.Component {
    state = {
        lists: [
            {
                id: 1,
                name: "คณิตศาสตร์ ม.6 (ระบบจำนวนจริงและการแก้สมการอสมการ)",
                code: "3LBRNUKQ",
                room: "ห้องคอม 2",
                date: "12 Aug 11:45"
            },
            {
                id: 2,
                name: "คณิตศาสตร์ ม.6 (ระบบจำนวนจริงและการแก้สมการอสมการ)",
                code: "3LBRNUKQ",
                room: "COM-01",
                date: "12 Aug 11:45"
            },
            {
                id: 3,
                name: "สังคมศึกษา ศาสนาและวัฒนธรรม",
                code: "2XDPJLQP",
                room: "ห้องคอม 2",
                date: "12 Aug 11:45"
            },
            {
                id: 4,
                name: "ภาษาอังกฤษ",
                code: "AVXLGYVB",
                room: "Com Lap 3",
                date: "30 Sep 16:10"
            },
            {
                id: 5,
                name: "ภาษาอังกฤษ",
                code: "EAV6W3TU",
                room: "Com Lap 3",
                date: "14 Oct 09:30"
            }
        ],
        editTestData: {},
        onOpenFrom: false
    }

    getEditTest = id => {
        let data = this.state.lists.filter(i => i.id === id)[0]
        this.setState({
            editTestData: data,
            onOpenFrom: true
        })
    }

    handleUpdateTest = data => {
        const { lists } = this.state
        if(data.id) {
            let index = lists.findIndex(i => i.id === data.id)
            let newLists = [
                ...lists.slice(0, index),
                {...data},
                ...lists.slice(index+1)
            ]
    
            this.setState({
                onOpenFrom: false,
                lists: newLists,
                editTestData: {}
            })
        } else {
            let newId = lists[lists.length-1].id + 1
            this.setState({
                lists: [
                    ...lists,
                    {
                        ...data,
                        id: newId
                    }
                ],
                onOpenFrom: false,
                editTestData: {}
            })
        }
    }

    handleDeleteTest = id => {
        this.setState({
            lists: this.state.lists.filter(i => i.id !== id )
        })
    }

    closeForm = () => {
        this.setState({
            onOpenFrom: false,
            editTestData: {}
        })
    }

    getAddTest = () => {
        this.setState({
            onOpenFrom: true
        })
    }

     render() {
        return (
            <div className="table">
                { this.state.onOpenFrom? <Form onSave={this.handleUpdateTest} initial={this.state.editTestData} onClose={this.closeForm} />:
                <div>
                    <div className="block-page">
                        <div className="item-1 text-blue-1">
                            <b>All test activites</b>
                        </div>
                        <div className="">
                            <button type="button" className="button add" onClick={this.getAddTest}>New test</button>
                        </div>
                    </div>
                    
                    <table cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <td>Date/Time</td>
                                <td>Access code</td>
                                <td>Exam</td>
                                <td>Room</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.lists.map((item, index) => <List key={index} {...item} onEdit={this.getEditTest} onDelete={this.handleDeleteTest}/>)}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        )
    }
}

export default Lists