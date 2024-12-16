import './button-contact.css';

function ButtonContact({ text = 'Contato', link = '#contato', className = '' }) {
    return (
        <a href={link} className={`btn-contact ${className}`}>
            {text}
        </a>
    );
}

export default ButtonContact;
