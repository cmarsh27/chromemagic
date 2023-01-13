import React, {useState} from 'react'
import confetti from "canvas-confetti"

const Goals = ({spirit, modifySpirit, inventory}) => {
  const [goalData, setNewGoalData] = useState([])
  const [newGoal, setNewGoal] = useState({title : "", expires : "24", completed : "false"})
  const [locked, setLocked] = useState(false)
  const [message, setMessage] = useState("")

  const limit = 3;
  const spiritInc = 50;

  const addGoal = (e) => {
    e.preventDefault()
    e.target.reset()
    e.value = ""
    if (newGoal.title){
      if (goalData.length < limit){
        goalData.push(newGoal)
        setNewGoal({title : "", expires : "24", completed : "false"})
      }
    }
  }

  const removeGoal = (index) => {
    let updatedGoals = [... goalData]
    updatedGoals.splice(index , 1)
    setNewGoalData(updatedGoals)

  }

  const completeGoal = (index) => {
    if (goalData.length <= 1 ){
      setLocked(false)
      modifySpirit(spiritInc)
      setMessage(`You completed your daily goals and gained 50 Spirit!`)
    }
    confetti();
    let updatedGoals = [... goalData]
    updatedGoals.splice(index , 1)
    setNewGoalData(updatedGoals)

  }

  return (
    <>
        <header><h1>Your Goals!</h1></header>
        <section className='section'>

            <div>
              <h2>Today's Goals</h2>
                {goalData.map((goal, index) => 
                <div key = {index} className="goal-item">
                <p>{goal.title}</p> 
                { !locked ? 
                   <button className = "cross" onClick={() => removeGoal(index)}>x</button>
                  :
                  <button onClick={() => completeGoal(index)}>Complete</button>
                }
                </div>
                )}
            </div>

            { (goalData.length < limit && (!locked)) &&
            <div>
              <form onSubmit={addGoal}>
                <input name = "title" type="text" placeholder='Walk the dog.' onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value})}/>
              
                    <button>Add Goal</button>
              </form>
            </div>
            }

          <h4>{message}</h4>



            <br />

            { (goalData.length >= limit  && (!locked)) && 

                <button onClick={() => setLocked(true)}>Lock in Goals</button>
              }
        </section>
  </>
  )
}

export default Goals