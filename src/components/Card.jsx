export default function Card(props) {    
    let cardBadge;
    if (props.item.openSpots === 0) {
        cardBadge = "SOLD OUT"
    } else if (props.item.location === "Online") { 
        cardBadge = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card-badge">
                {cardBadge}
            </div>
            <img src={`../../public/image/${props.item.coverImg}`} alt="image 1" className='img-card'/>
                <div className="review">
                    <ul>
                        <li>
                            <img src={`../../public/image/Star.png`} alt="star"  className="icon-start"/>
                        </li>
                        <li>{props.item.stats.rating}</li>
                        <li>({props.item.stats.reviewCount})●</li>
                        <li>{props.item.location}</li>
                    </ul>
                </div>
                <p className="title-airbnb">
                    {props.item.title}
                </p>
                <p className='price'>
                    <span className='price-span'>From ${props.item.price}</span>/person
                </p>
        </div>
    )
}