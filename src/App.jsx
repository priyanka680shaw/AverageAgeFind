import { Employee } from "./components/Employee"
import { Team } from "./components/Team"

function App() {

  return (
   <>
      <div className="flex justify-around bg-yellow-200 w-full p-8 h-screen">
      <Employee/>
   <Team/>
      </div>
   </>
  )
}

export default App
