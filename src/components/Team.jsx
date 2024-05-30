

import { useContext } from 'react'
import { userContext } from './UserContext'
export const Team = () => {

const {state , dispatch} = useContext(userContext);
console.log("teams" , state.teamsData)

  return (
        <>
            <div>
                <div className='card p-4 bg-green-900 w-[500px] h-[650px] overflow-scroll'>
                   {
                    state.teamsData&&state.teamsData.map((items )=>{
                        return(
                            <div key = {items.id} className='flex justify-between items-center bg-yellow-400 p-4 m-4'>
                            
                            <p>{items.id}</p>
                            <p>{items.first_name}</p>
                            <p>{items.age}</p>
                            <button className='border-2 border-black p-4' onClick={()=>{
                              dispatch({type : "remove_member_from_team" , payload : items.id})
                            }}>Remove</button>
                            </div>
                        )
                    })
                   }
                   <div>

                   </div>
                </div> 

                <div className='flex justify-around items-center pl-4 pr-4 pt-2 pb-2 w-[250px] border-8 border-green-600 m-2 relative bootom-90'>
                        <p className='font-bold text-3xl text-green-900'>Average Age: </p>
                        <p className='font-bold text-3xl text-green-900 '>{state.total}</p>
                    </div>
            </div>
        </>
  )
}
