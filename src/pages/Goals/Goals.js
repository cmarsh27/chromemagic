import React, {useState} from 'react'

const goalData = [{title : "Brush your damn teeth.", expires : "24", completed : "false"}]

const Goals = () => {
  const [newGoal, setNewGoal] = useState({title : "", expires : "24", completed : "false"})
  const limit = 3;
  const addGoal = (e) => {
    e.preventDefault();
    if (goalData.length < limit){
      goalData.push(newGoal)
      setNewGoal({title : "", expires : "24", completed : "false"})
    }
  }

  return (
    <>
        <section className='section'>
            <h1>Your Goals!</h1>
            <p>Let's make some goals, shall we?</p>

            <div>
              <h2>These are your goals..</h2>
                {goalData.map((goal, index) => 
                <div key = {index}>
                <p>{goal.title}  -   {goal.completed}</p> 
                </div>
                )}
            </div>

            { (goalData.length < limit) &&
            <div>
              <form onSubmit={addGoal}>
                <input name = "title" type="text" placeholder='Walk the dog.' onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value})}/>
                <button>Add Goal</button>
              </form>


            </div>
            }
        </section>
  </>
  )
}

export default Goals