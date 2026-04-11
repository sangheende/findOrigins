const Badge = ({type,text}) => {
    return <div className={`badge--${type}`}>{text}</div>;
};

export default Badge;