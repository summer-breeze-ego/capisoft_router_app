
interface InputBoxProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
}

export default function InputBox({label, type, value, onChange, placeholder, id}: InputBoxProps) {
    
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}