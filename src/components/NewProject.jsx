import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({handleAddProject, handleCancelProject}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modalReference = useRef();

    function onSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modalReference.current.show();
        }
        else {
            handleAddProject({title: enteredTitle, description: enteredDescription, dueDate: enteredDueDate});
        }   
    }

    return (
        <>
            <Modal ref={modalReference}>
                <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
                <p className="text-stone-700 mb-4">Oops... looks like you forgot to enter a value</p>
                <p className="text-stone-700 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4 ">
                    <li><button onClick={handleCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={onSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label="Title"></Input>
                    <Input ref={description} label="Description" textArea={true}></Input>
                    <Input ref={dueDate} label="Due Date" type="date"></Input>
                </div>
            </div>
        </>

    );
}