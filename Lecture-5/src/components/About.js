import User from "./User"
import UserClass from "./UserClass"


const About = ()=>{
    return (
        <div>
            <h1>This is About Page </h1>
            <User name={"Prateek Ramani - Functional Component"}/>
            <br></br>
            <UserClass name={"Prateek Ramani - Class Component 1"} location ={"Hyd class"}/>
            {/* <UserClass name={"Prateek Ramani - Class Component 2"} location ={"Hyd class"}/> */}
        </div>
    )
}





export default About