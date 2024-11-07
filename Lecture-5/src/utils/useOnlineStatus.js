import {useEffect,  useState} from "react"


const useOnlineStatus = () => {
    // check if online
    
    const [onlineStatus , setOnlineStatus] = useState(true) 

    // we want to add the online listener only once, so empty array dependency
    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
          });
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
          });
    }, [])
     
    // boolean status
    return onlineStatus

}


export default useOnlineStatus