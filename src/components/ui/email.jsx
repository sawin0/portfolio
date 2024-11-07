
const EmailLink = ({ email, className }) => {
    return (
        <a
            href={`mailto:${email}`}
            className={`border-b hover:opacity-75 transition-opacity ${className || ''}`}
        >
            {email}
        </a>
    );
};
export default EmailLink;
