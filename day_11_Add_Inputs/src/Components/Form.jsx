import { useState } from "react"

let obj = [
    {
        type : "text",
        plc : "Enter Your Name",
        name : "name"
    },
    {
        type : "email",
        plc : "Enter Your Email",
        name : "Email"
    },
]

let intial = {
    name : "",
    Email : ""
}

const Form = ()=>{

    const [input,setInput] = useState(obj)

    const [val,setVal] = useState(intial)

    const [arr,setArr] = useState([]);


    const increaseInput = ()=>{
       setInput([...input,{type : "text",plc : "Enter Your Text",name : "anything"}])
    }

    const handleChange = (e)=>{
        let {name,value}= e.target
        setVal({...val,[name]:value})

    }

    console.log(val);

    const handleSubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,val])
        
        setVal(intial)
        
    }

    console.log(arr);

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <header>
                    <h1>Form</h1>
                </header>
                {
                    input.map((val)=>{
                        return(
                            <input type={val.type} placeholder={val.plc} name={val.name} onChange={handleChange} />
                        )
                    })
                }
                <div id="forInput">
                    <p>If You Are Enter More Detail About Yourself Then Increace Text Box Field</p>
                    <button className="btn inc" onClick={increaseInput}><i className="bi bi-plus-square-fill"></i></button>
            </div>
                <button type="submit">SUBMIT</button>
            </form>
            
        </>
    )
}

export default  Form