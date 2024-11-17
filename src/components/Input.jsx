export default function Input({label, textArea = false, ...props}) {
    return (
        <p>
            <label htmlFor="">{label}</label>
            {textArea ? <textarea {...props}></textarea> : <input {...props}></input>}
        </p>
    );
}