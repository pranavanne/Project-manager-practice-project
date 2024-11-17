import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input label="Title"></Input>
                <Input label="Description" textArea={true}></Input>
                <Input label="Due Date"></Input>
            </div>
        </div>
    );
}