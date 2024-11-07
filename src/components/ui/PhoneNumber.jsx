const PhoneNumber = ({ phone, className }) => {
    return (
        <a
            href={`tel:${phone}`}
            className={`hover:opacity-75 transition-opacity ${className || ''}`}
        >
            {phone}
        </a>
    );
};

export default PhoneNumber;
