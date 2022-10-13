
function Card(props){
    return (
        <div className="card--container">
            <img src={props.Poster}/>
            <div className="info">
                <h4>{props.Title}</h4>
                <p>Year:{props.Year}</p>
            </div>
        </div>
    )
}

export default Card