import React from 'react';

function App() {
  return (
   <div>
    <header>
      <h1>Sally Student</h1>
      <h2>Web Developer</h2>
    </header>
    <main className='App'>
      <section>
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally Student's Portrait"/>
      </section> 
      <section>
        <h3>Contact Sally Student</h3>
        <address>
          <p>You can contact Sally at: {" "} 
          <a href="mailto:sallystudent@hotmail.com" target="_blank">sallystudent@hotmail.com</a> and by {" "}
          <a href="tel:+8675309">phone</a>.</p>
         </address>
      </section>
      <section>
        <h3>Education</h3>
        <p>Thinkful Engineering Immersion</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
          <p>Western Carolina University</p>
            <ul>
                <li>cum laude</li>
                <li>3.6 GPA</li>
            </ul>
      </section>
      <section>
      <h3>Employment History</h3>
          <p>Coffee 'n Treats, INC</p>
          <p><em>Barista</em></p>
            <ul>
                <li>June 2018-Present</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li> 
            </ul>
          <p>GEICO Insurace</p>
          <p><em>Customer Service Representative</em></p>
             <ul>
                <li>August 2016-June 2018</li> 
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
      </section>
    </main>
  </div> 
  );
}

export default App;
