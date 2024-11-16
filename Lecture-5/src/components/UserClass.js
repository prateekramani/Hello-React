
import React from "react"
import { useState } from "react"
import UserContext from "../utils/UserContext"

class UserClass extends React.Component {

    constructor (props) {
        console.log("ctor" , props.name)
        super(props)
        this.state = {
            count : 0,
            count2 : 2,
            userInfo : {
                login : "default",
                location : "default",
                avatar_url : "dummy_photo_url",
            }
        }
    }
 

    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/prateekramani")
        const json = await data.json()
        this.setState({
            userInfo : json 
        })
        console.log("this is called when component is mounted"  , json)
    }


    componentDidUpdate (prevPropes, prevState) {
        // if (prevState.count != this.state.count) { }
        // this is how we had to make dependency array , like we have in useEffect
        console.log("componentDidUpdate is called")
    }

    componentWillUnmount () {
        console.log("called when we are going to some  other page or unmounting this component")
        // clear all the set Intervals if created any in Update, Mount
    }

    render() {
        console.log(this.props.name ,"render")
        // const {name , location} = this.props
        const {login, location, avatar_url} = this.state.userInfo
        // debugger
        return (
            <div className = "user-card">
                <h1>Name : {this.props.name}</h1>
                <h1> Github Name : {login}</h1>
                <img src={avatar_url}></img>
                <h2>Location : {this.props.location}</h2>
                <h2>Github Location : {location}</h2>
                <h4>Count2 : {this.state.count2}</h4>
                <h4>Count : {this.state.count}</h4>
                {/* using context in class based component */}
                <UserContext.Consumer> 
                    {(data) => <h4>User Context {data.loggedInUser}</h4>} 
                </UserContext.Consumer>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count +=1,
                        // count2 : this.state.count2 +=1
                        // count2 will remain same , is above line is commented
                    })
                }}> Count Increase </button>
                
            </div>
        )
    }
}


export default UserClass


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


/*
- Parent Ctor
- Parent Render

- Child 1 Ctor
- Child 1 Render

- Child 2 ctor
- Child 2 Render

 <Dom is Manipulated - in a single batch>
- Child 1 Component Did mount
- Child 2 Component Did mount

- Parent Component Did mount

There are 2 phases , Render phase and Commit Phase
In Render - Constructor and Render is called , Render phase for all the Childs are done collectively, 
this is an optimization by React because once the commit phase starts , React will update DOM, and DOM 
manipulation is expensive , so React badges (collects) and do all the render before the commit on Virtual DOM,
This all happens in Virtual DOM diff is caluculated, since it is fast in virtual DOM - all the child are render()

In Commit - Dom Manipulation happens
*/


/* 

---- Mounting Life Cycle

Ctor is called
Render is called - dummy data is rendered 
Component Did Mount is called - API call is made 
This.setState() is called


---- Update Phase starts

render () is called - rendered API data , since State variable is updated
DOM Updated , HTML is loaded
Component Did Update () is called
componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

---- UnMount Phase 
componentWillUnmount - called when we are going to some other page or unmounting this component 
(unmounting - removing it from UI) 


*/