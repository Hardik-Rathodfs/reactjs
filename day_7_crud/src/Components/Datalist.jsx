import React from 'react'

function Datalist(props) {
  return (
    <div className='product'>
        {
            props.arr && props.arr.map((el)=>{
                return(
                    <div  key={el.id}>
                        <img src={el.img} alt={el.title} style={{width:"150px",height:"150px"}}/>
                        <h3>{el.title}</h3>
                        <h4>₹{el.price}</h4>
                        <h3>{el.des}</h3>
                        <button onClick={()=>props.del(el.id)}>Delete</button>
                        <button onClick={()=>props.edit(el.id)}>Edit</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Datalist