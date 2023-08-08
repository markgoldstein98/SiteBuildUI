const Card = ({title, sub, text,index}) => (

    <div className="card ">
        <span className="index">{index}</span>
        <h1>{title}</h1>
        <h3 className="sub">{sub}</h3>
        <h3 className="text">{text}</h3>
    </div>
)

export default Card