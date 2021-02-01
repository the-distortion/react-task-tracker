import { useState } from "react"
import Form from "./Form"

const AddTask = ({ onAdd }) => {
    const [ text, setText ] = useState('');
    const [ day, setDay ] = useState('');
    const [ reminder, setReminder ] = useState(false);
    let count = 0, id = "id";

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add text!");
            return;
        }
        count++;
        id = `id ${count}`;
        onAdd({ id, text, day, reminder });
        
        setText('');
        setDay('');
        setReminder(false);
        document.querySelector('input[type="checkbox"]').checked = false;
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <Form value={text} label="Task" onChange={e => setText(e.target.value)} />
            <Form value={day} label="Day & Time" onChange={e => setDay(e.target.value)} />
            <Form value={reminder} label="Set Reminder" onChange={e => setReminder(e.currentTarget.checked)} type="checkbox" />
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;
