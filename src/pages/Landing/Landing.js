import React from 'react'

const Landing = () => {
  return (
    <div>
        <header>
            <h1>Achieve your Goals and Build a Magic Business ?? </h1>
            <h2 className='subheading'>Everyone struggles doing their daily task. With Summoning Success, you turn your productivity into your very own thriving magic shop. </h2>
        </header>
        <section >
        <div className='divided'>
                <div>
                    <h2>Goals + Magic = Productivity like never before</h2>
                    <img src={require("../../Img/shroom.gif")}></img>
                </div>
                <div className='bonus-list'>
                    <ul>
                        <li><p>Complete your goals to earn <span className='fancy'>Spirit</span></p></li>
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
                <p>Our app is not just about productivity, it's also about having fun. We believe that by turning your daily tasks into a game, you'll be more likely to stick to your goals and see real progress.</p>
                <p>So why wait? Download our app today and start earning spirit, ducats, and unlocking new recipes.  Achieve your goals and have fun doing it with the power of magic!</p>
            </div>
            

        </section>
    </div>
  )
}

export default Landing