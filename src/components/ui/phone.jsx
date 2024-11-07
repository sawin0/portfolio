
const PhoneNum = ({ email, className }) => {
    return (
        <a
            href={`call:${email}`}
            className={`border-b hover:opacity-75 transition-opacity ${className || ''}`}
        >
            {email}
        </a>
    );
};
export default PhoneNum;
