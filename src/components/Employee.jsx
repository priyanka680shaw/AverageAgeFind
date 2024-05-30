
import { useContext } from 'react'
import { userContext } from './UserContext'
export const Employee = () => {

const {state ,dispatch} = useContext(userContext);
console.log("employeePage" , state.employeesData)
    
  return (
        <>
            <div>
                <div className='card p-4 bg-red-900 w-[500px] h-[650px] overflow-scroll'>
                   {
                    state.employeesData.map((items )=>{
                        return(
                            <div key = {items.id} className='flex justify-between items-center bg-yellow-400 p-4 m-4'>
                            
                            <p>id : {items.id}</p>
                            <p>{items.first_name}</p>
                            <p>age :   {items.age}</p>
                            
                            <button className='border-2 border-black p-2'  onClick={()=>{
                                dispatch(({type : "add_member_to_Team" , payload : items.id}))
                            }}>Add</button>
                            </div>
                        )
                    })
                   }
                </div> 
            </div>
        </>
  )
}
