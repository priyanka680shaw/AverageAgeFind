import { useReducer } from "react"
import { userContext } from "./UserContext"
import {employees}from  '../data'

export const Provider = ({children }) => {

    
    
    function reducer(state , action){
        let totalAge = 0;
        // console.log("providder" , state.employeesData)
        // console.log("payload" , action.payload)
        // console.log(state.teamsData.length)


        switch(action.type){
            case  "add_member_to_Team" : 
            return{
                employeesData   : state.employeesData,
                teamsData  : [...state.teamsData , ...state.employeesData.filter((items)=>{
                    if(items.id === action.payload){
                        totalAge = state.total +items.age
                        return items  
                    }
                })],
               //total : ((totalAge)/(state.teamsData.length))
               total : totalAge
            }
            
            case "remove_member_from_team" : 
                return{
                    employeesData   : state.employeesData,
                    teamsData  : [...state.teamsData.filter((items)=>{
                    if(items.id !== action.payload){
                        return items  
                    }
                })]
                }
        }
      
    }
    //creating Reducer
    const initialState = {
        "employeesData" : employees,
        "teamsData" : [],
        "total" : 0
    }
    console.log("int" , initialState)
    const[state , dispatch] = useReducer(reducer , initialState);
  return (
    <>
        <userContext.Provider value={{state , dispatch}}>
            {children }
        </userContext.Provider>
    </>
  )
}
