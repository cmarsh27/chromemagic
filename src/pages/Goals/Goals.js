import React, {useState} from 'react'



const Goals = () => {
  const [goalData, setNewGoalData] = useState([])
  const [newGoal, setNewGoal] = useState({title : "", expires : "24", completed : "false"})
  
  const [locked, setLocked] = useState(false)

  const limit = 3;

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
    }

    alert("You did it!")
    let updatedGoals = [... goalData]
    updatedGoals.splice(index , 1)
    setNewGoalData(updatedGoals)

  }

  return (
    <>
        <section className='section'>
            <h1>Your Goals!</h1>
            <h3>So, how does this work? </h3>
            <p>Choose three goals and write them down below. Once you're happy with your choices, lock them in for the day. </p>
            <p>Check off your goals as you complete them. Try to complete all 3!</p>
            <br />
            <div>
              <h2>These are your goals..</h2>
                {goalData.map((goal, index) => 
                <div key = {index}>
                <p>{goal.title}  -   {goal.completed}</p> 
                { !locked ? 
                   <button onClick={() => removeGoal(index)}>x</button>
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



            <br />

            { (goalData.length >= limit  && (!locked)) && 

                <button onClick={() => setLocked(true)}>Lock in Goals</button>
              }
        </section>
  </>
  )
}

export default Goals