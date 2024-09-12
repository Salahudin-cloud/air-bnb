export default function Contact({ img, name, email, number }) {
    return (
         <div className="card-container">
                <div className="img-container">
                    <img src={img} alt="" className="contact-image" />
                </div>
                <h1 className="contact-name">
                    {name}
                </h1>
                <div className="contact-info">
                    <ul>
                        <li>Email: {email}</li>
                        <li>telpon: {number}</li>
                    </ul>
                </div>
            </div>
    )
}