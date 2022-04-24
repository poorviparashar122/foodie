import "../style.css"


const RestaurantData =(props)=>{
    console.log(props.item)
  return (
      <>
      <div className="fdiv">
      <img className="img1" src={props.item.img}></img>
      <div>
      <h3>{props.item.name}</h3> 
      <p>{props.item.categories}</p>
      <p>Cost ₹{props.item.cost_for_two} for one</p>
      <p style={{color:"black"}}>Accepts Online Payments Only </p>
      </div>
     <div>
         
     </div>
        <div className="a1">
            <p className="rating">{props.item.reting}</p>
        
         <p>{props.item.total_votes} votes</p>
         <p>{props.item.reviews} reviews</p>
        </div>
  </div>
      
     
      </>
  )
}

export  {RestaurantData}