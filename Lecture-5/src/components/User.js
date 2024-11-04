import {useState , useEffect} from "react"

const User = (props)=>{
    const [count, setCount] = useState(0)
    const [count2] = useState(2)

    useEffect(()=>{
        console.log("useEffect")

        // Interesting Case
        let timer = setInterval(() => {
            console.log("Set Interval being called every second")
        }, 1000);

        // how to stop this interval


        return () =>{
            console.log("useEffect Return - this is called when we unmount the component just like componentWillUnmount")
            clearInterval(timer)
        }
    })

    return (
        <div className = "user-card">
            <h1>Name : {props.name}</h1>
            <h2>Location : Hyderabad</h2>
            <h4>Contact : ramaniprateek@gmail.com</h4>
            <h4>Count = {count}</h4>
            <h4>Count2 = {count2}</h4>
        </div>
    )
}


export default User