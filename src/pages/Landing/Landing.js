import React from 'react'

const Landing = () => {
  return (
    <div>
        <section className='offwhite'>
            <h1>Achieve your Goals with gamified</h1>
            <h1 className='big'>Magic</h1>

        </section>
        <section >
        <div className='divided'>
                <div>
                    <h2>Earn <span className='fancy'>Spirit</span> by completing daily goals.</h2>
                    <img src={require("../../Icons/journal.png")}></img>
                </div>
                <div className='bonus-list'>
                    <ul>
                        <li><p>Spend <span className='fancy'>Spirit</span> to summon magical items</p></li>
                        <li><p>Sell items in your shop to earn <span className='golden'>Ducats</span></p></li>
                        <li><p>Spend your <span className='golden'>Ducats</span> on new recipes!</p></li>
                    </ul>

                </div>
            </div>
        </section>
        <section className='offwhite'>
            <h1>Other features</h1>
            <div>
                <h3>Here are some other cool features that will try out chrome magic</h3>
                <p>This is a great game and it will be useful because you will achieve many of your goals.</p>
            </div>
            

        </section>
    </div>
  )
}

export default Landing