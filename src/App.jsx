import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import cardData from './assets/data/cardData'

// import Contact from './components/Contact'

// import Avatar1 from './assets/avatar_1.png'
// import Avatar2 from './assets/avatar_2.png'

export default function App() {
  const card = cardData.map((x) => {
    return <Card
      key={x.id}
      item={x}
      // img={x.coverImg}
      // review={x.stats.reviewCount}
      // rating={x.stats.rating}
      // title={x.title}
      // price={x.price}
      // local={x.location}
      // openSpots={x.openSpots}
    />
  }) 
  return (
    <div className="air-bnb">
      <Navbar />
      <Hero />
      <div className="card-container">
        {card}
      </div>
   </div>
    
    // <div>
    //   <div className="contact">
    //          <Contact
    //     img={Avatar1}
    //     name={"John Doe"}
    //     email={"john.doe@gmail.com"}
    //     number={"098891234"}
    //   />
    //   <Contact
    //     img={Avatar2}
    //     name={"John Smith"}
    //     email={"john.smith@gmail.com"}
    //     number={"098891234"}
    //   />
    //   <Contact
    //     img={Avatar1}
    //     name={"John Anonymous"}
    //     email={"john.anonymous@gmail.com"}
    //     number={"098891234"}
    //   />
    //   <Contact
    //     img={Avatar2}
    //     name={"John Alexander"}
    //     email={"john.Alexandaer@gmail.com"}
    //     number={"098891234"}
    //   />
    //   </div>
    // </div>
  )
}