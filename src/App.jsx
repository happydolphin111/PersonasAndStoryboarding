import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import SideView from "./assets/SideView - Sketch.jpg";
import TopView from "./assets/TopView - Sketch.jpg";
import ShySantiago from "./assets/ShySantiago.png";
import CoolRobby from "./assets/CoolRobby.png";
import Sstoryboard from "./assets/SantiagoStoryboard.jpeg";
import Rstoryboard from "./assets/RStoryboard.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <h1 className="Assignment">Assignment:</h1>
        <h1 className="header-name">Personas and Storyboarding</h1>
      </section>
      <section className="Introduction">
        <div class="box">
          <p className="flex1">
            {" "}
            Why? <br /> <br /> How? <br /> <br /> <br /> What? <br /> <br /> My
            take on it:{" "}
          </p>
          <p className="flex2">
            {" "}
            Practice the UX exercise of working with personas.
            <br />
            <br /> Observing real users interact with a public interface and
            interviewing them about it. From there,
            <br />
            using the information collected to build personas and storyboards.
            <br />
            <br /> This project consists of 4 main parts: Preparation, Recording
            Observations, Personas and Storyboarding.
            <br />
            <br /> The project gradually builds up to a global understanding of
            who the users of the interface are. As
            <br />
            well as what I can work with as a designer in order to reach
            valuable and detailed conclusions of how
            <br /> the user interacts with the interface and their surroundings.{" "}
          </p>
        </div>
      </section>

      <section className="Parts">
        <h3 className="Part-header"> Part 1: Preparation </h3>
        <p className="InnerTitles">Interface Chosen: </p>
        <p className="Answer1">
          {" "}
          Game Room on Campus (Focus on the Pool Tables){" "}
        </p>
        <p className="InnerTitles">
          Questions for interviewing users of the interface:{" "}
        </p>
        <p className="Explanation">
          My goal with the questions was to dig deeper into how the user
          interacts with the Pool Table, and ask objective questions
          <br /> to gain information that couldn't fully get just from observing
          their behavior.
        </p>
        <p className="Explanation2">
          {" "}
          Note that these questions were crafted with the intention of
          interviewing users of the interface.{" "}
        </p>
        <ol className="Answer2">
          <li> What year are you in? (Context) </li>
          <li> What's your major? (Context) </li>
          <li>
            {" "}
            What brought you here? (Motives, Did they go already knowing they
            were playing pool?)
          </li>
          <li>
            {" "}
            Did you come alone or with someone else? (Motives + Expectations)
          </li>
          <li> Were you planning on playing pool? (Expectations)</li>
          <li> Do you use this space, and game specifically, often? </li>
          <li>
            {" "}
            Is there anything in the room that is making your experience of
            playing pool worse? (Experience + Challenge)
          </li>
          <li>
            {" "}
            What would you highlight of the experience of coming in and having
            this game available?
          </li>
          <li>
            Is there anything that you would change specific to this room?
          </li>
        </ol>
        <p className="InnerTitles">
          Sketches and Descriptions for the Game Room and Pool Table Interface:
        </p>

        <div class="box">
          <div className="Cards1">
            <div class="card">
              <img src={TopView} alt="TopView" height="430" width="550" />
              <div class="container">
                <h5 className="description">Top View</h5>
              </div>
            </div>
            <div class="card">
              <img src={SideView} alt="SideView" height="330" width="550" />
              <div class="container">
                <h5 className="description">Side View</h5>
              </div>
            </div>
          </div>
          <div className="Captions">
            <p className="InnerTitles"> Description of Interface: </p>
            <span>
              {" "}
              Problem it's trying to solve:
              <br /> bringing more ‘fun’ to campus, students
              <br /> decompressing during the day with a quick
              <br /> break from studying by playing pool.
              <br />
              <br /> First main key interactive component:
              <br /> the pool table, where students can play the game.
              <br />
              <br /> Relevant component:
              <br /> The layout of the room. The table is centric in the
              <br />
              room and almost all of the chairs/small couches are
              <br /> facing towards the pool table leading attention to
              <br /> to whatever is happening there. The latter is key
              <br /> to the room’s dynamics.
            </span>
          </div>
        </div>
      </section>

      <section className="Parts">
        <h3 className="Part-header"> Part 2: Recording Observations </h3>
        <h3 className="header3"> Observations</h3>
        <p className="Explanation">
          {" "}
          I headed to the building where this room and public interface can be
          found and I recorded a few observations on what
          <br />I was seeing on two different occasions.
          <br />
          <br />
          One of the main objectives was not making any assumptions of what I
          was seeing, and just recording things that were happening.
        </p>
        <p>
          <div className="Cards2">
            <ul>
              <p className="Persons"> 1st Person: </p>
              <div className="bulletpoints">
                <li>
                  {" "}
                  Played with what seemed to be one of his friends for around 40
                  minutes at 2:30PM.{" "}
                </li>
                <li> Seemed like a relaxed game. </li>
                <li>
                  {" "}
                  He would sit on one of the back sofas when waiting for their
                  turn.
                </li>
                <li>
                  {" "}
                  When not playing, would check his phone and not really pay
                  attention to his ‘rival’.
                </li>
                <li> Played approximately 5 rounds.</li>
                <li>
                  {" "}
                  Had to squish between people that were studying on the tall
                  table in order to reach the rack on the wall and put away the
                  sticks.
                </li>
                <li> Left with his friend.</li>
              </div>
            </ul>
          </div>
          <div className="Cards2">
            <ul>
              <p className="Persons"> 2nd Person: </p>
              <div className="bulletpoints">
                <li> The one who played against person 1. </li>
                <li> Game lasted around 40 minutes at 2:30PM. </li>
                <li>
                  {" "}
                  It also seemed like a relaxed game in terms of competition,
                  but he seemed to take it more seriously.{" "}
                </li>
                <li>
                  {" "}
                  This person would stay standing when his rival was playing,
                  and paid close attention to what was happening.{" "}
                </li>
                <li>
                  He did seem to be looking around the room a lot when his
                  friend would go and sit.{" "}
                </li>
                <li>
                  {" "}
                  Before using his turn, he would analyze the positions of the
                  balls and check if someone was looking at him.{" "}
                </li>
                <li>
                  Also had to squish between people to first grab and then leave
                  his pool stick.{" "}
                </li>
                <li> Left with his friend. </li>
              </div>
            </ul>
          </div>

          <div className="Cards2">
            <ul>
              <p className="Persons"> 3rd Person: </p>
              <div className="bulletpoints">
                <li> Played at night, around 10pm.</li>
                <li> Stayed for an hour and 10 minutes(ish). </li>
                <li>
                  Fidgeted with the sticks whilst thinking about his next move.{" "}
                </li>
                <li>
                  Their friend was sitting and looked as if he was studying.{" "}
                </li>
                <li>
                  {" "}
                  Would take a break, chat with his friend and come back.{" "}
                </li>
                <li>
                  {" "}
                  Had to move chairs around to reach the storage rack for the
                  sticks.{" "}
                </li>
                <li> Seemed relaxed and entertained. </li>
                <li> His friend left halfway, he left alone. </li>
              </div>
            </ul>
          </div>
        </p>

        <h3 className="header3"> Interviews</h3>
        <p className="Explanation">
          {" "}
          Next I interviewed the same users, before they left, with the
          questions I crafted in Part 1. Again, the goal was to have objective
          <br /> questions that wouldn't lead them to a specific answer.{" "}
        </p>
        <div className="Cards3">
          <div class="box">
            <div className="q">
              <p className="Questions">What year are you in?</p>
              <p className="InterAnswer">
                <ul>
                  <li>Sophomore</li>
                  <li> Sophomore</li>
                  <li> Junior </li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">What’s your major?</p>
              <p className="InterAnswer">
                <ul>
                  <li>Economics and Ethnic Studies</li>
                  <li> APMA & CS</li>
                  <li> Mechanical Engineering</li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">What brought you here?</p>
              <p className="InterAnswer">
                <ul>
                  <li>
                    Had a long lunch break and had been wanting to come,
                    <br /> so he texted his friend
                  </li>
                  <li>
                    {" "}
                    His friend texted him asking if he wanted to meet up and
                    <br /> play, he said yes
                  </li>
                  <li>
                    {" "}
                    He bumped into one of his friends that was studying upstairs
                    <br /> and decided they wanted to come downstairs, he never
                    finds a time to play during the day
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="Cards3">
          <div class="box">
            <div className="q">
              <p className="Questions">
                Did you come alone or with someone else?
              </p>
              <p className="InterAnswer">
                <ul>
                  <li>Someone else</li>
                  <li> Someone else, a close friend</li>
                  <li> Alone and then bumped into a friend </li>
                  <li> Always with a friend, rarely alone </li>
                  <li> Definitely a social activity. </li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">Were you planning on playing pool?</p>
              <p className="InterAnswer">
                <ul>
                  <li> Yes</li>
                  <li> Yes</li>
                  <li>
                    {" "}
                    Sort of. Had been wanting to play for a while, hadn't found
                    a time to do so
                  </li>
                  <li>
                    {" "}
                    Almost always premeditated, or at least thought about it.
                    Rarely on a whim.
                  </li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">
                Do you use this space, and game specifically, often?
              </p>
              <p className="InterAnswer">
                <ul>
                  <li>A few times a month.</li>
                  <li>
                    {" "}
                    Yes, but doesn’t like to go alone, so always has to find a
                    friend to play with.
                  </li>
                  <li> Not really, and not as much as they would like to.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="Cards3">
          <div class="box">
            <div className="q">
              <p className="Questions">
                Is there anything in the room 
                that is making your experience 
                 of playing pool worse?
              </p>
              <p className="InterAnswer">
                <ul>
                  <li>
                    Not really, they just go in and out 
                   whenever they desire. Times he goes 
                   works with his schedule.
                  </li>
                  <li>
                    {" "}
                    Yes: in the middle of the day (when he 
                    has time to go and
                    play) there are always 
                      people using the tables. And doesn’t
                    like the   layout of the chairs, how everything is looking 
                    towards the center. Described as “feeling like an animal in
                    the zoo that everyone looks at”.
                  </li>
                  <li>
                    {" "}
                    It isn’t that good of a studying space, so their friends
                    don’t want to go with him to make him company.{" "}
                  </li>
                  <li>
                    {" "}
                    Not good study space (harder to convince people to hang out
                    there) & Busy during the day.{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">
                What would you highlight of the experience of coming in and
                having this game available?
              </p>
              <p className="InterAnswer">
                <ul>
                  <li>
                    {" "}
                    Fun. Accessible. Can go in and out as he desires, has fun
                    without having to go far from campus.
                  </li>
                  <li> Good way of spending time with friends. </li>
                  <li>
                    Loves pool, brings him good memories. Good to relax from
                    schoolwork once in a while, and highlights it's so easy to
                    come and leave.
                  </li>
                  <li>
                    Valuable insight: Having fun and spending time with friends,
                    accessible, on campus
                  </li>
                </ul>
              </p>
            </div>
            <div className="q">
              <p className="Questions">
                Is there anything that you would change specific to this room?
              </p>
              <p className="InterAnswer">
                <ul>
                  <li>
                    Yes. Where the pool tools are located. Would put them
                    somewhere, and rearrange the tables, so that you don’t have
                    to bother someone who is eating, studying or just doing
                    something else in order to pass through and get the sticks.
                  </li>
                  <li>
                    Yes. The seating is too focused on the people playing in the
                    middle.
                  </li>
                  <li>
                    {" "}
                    Yes. The lighting. Likes to play at night, thinks it could
                    give a very cool vibe if lights could be dimmed as desired.{" "}
                  </li>
                  <li>
                    {" "}
                    Each answered very specific things, some had to do with the
                    layout of the room and other with the ambiance and how that
                    affects the experience playing.{" "}
                  </li>
                  <li>
                    {" "}
                    This is one of the most valuable insights in terms of how
                    they interact with the interface.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Parts">
        <h3 className="Part-header"> Part 3: Personas </h3>
        <p className="Explanation">
          The following are two personas that I built based on the observations
          and the interview responses from Part 2.
        </p>

        <div class="box">
          <p className="ScreenshotDescriptions">
            What is Santiago's problem with the interface?
            <br /> - He already has a hard time reaching out to friends, <br />
            and the room is not a good study spot so other friends <br /> don’t
            want to go with him and keep him company. <br /> <p></p> -Hates how
            all the seating in the room is shifting <br /> attention towards the
            center, so people inevitably look <br /> at him when he is playing
            pool. <br /> <p></p>-Also doesn’t like where the rack for the sticks
            is placed.
            <p></p>
            <p></p>
            How does Santiago represent the user of my interface?
            <br /> I came up with the concept for Santiago basing myself on{" "}
            <br />
            the observations I recorded and the interviews I conducted. <br />
            There seemed to be a pattern of shyness and strategic <br />{" "}
            thinking. I based Santiago on one of the specific users <br /> I
            interviewed and got inspiration from the other <br /> ones as well.
            <p></p>
            <br />
            <br />
            <br />
            <br />
            What is Robby's problem with the interface? <br />
            - He has trouble balancing social life with work. If it were <br />{" "}
            up to him, he would stay for the whole night playing <br /> pool
            with friends but he has many other responsibilities. <br />
            Pool table makes it harder.
            <br />- Many times needs to leave fast to get to something <br />
            else, and has to push people barely to place back the <br />
            pool sticks on the rack.
            <p> </p>
            How does Robby represent the user of my interface?
            <br />
            As with the creation of Santiago I picked up on <br />
            repeated behaviors, such as spontaneity and being a <br /> people
            person. To support that even further, lack of <br />
            planning and time management were also repeated <br /> behaviors that I took to create Robby!
          </p>
          <div className="Screenshots">
            <img
              src={ShySantiago}
              alt="Shy Santiago"
              height="400"
              width="407"
            />
            <p className="Caption">
              {" "}
              Figure1: Shy Strategic Santiago is a more reserved guy, he doesn’t
              <br /> love being the center of attention and more often than not
              you
              <br /> will find him thinking of a strategy to face whatever
              challenge arises.{" "}
            </p>
            <img src={CoolRobby} alt="Cool Robby" height="400" width="407" />
            <p className="Caption">
              {" "}
              Figure2: Cool Robby is a very busy people person. You will often{" "}
              <br /> find him speaking with someone he just bumped into,
              appearing <br />
              more relaxed than what he actually is and living day by day.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="Parts">
        <h3 className="Part-header"> Part 4: Storyboards </h3>
        <p className="Explanation">
          {" "}
          Storyboards are a great way of embodying the process of how your user
          persona interacts with the interface. <br /> It is a powerful way for
          designers to predict and explore what would work (and what wouln't).{" "}
        </p>
        <br />
        <p className="Explanation">
          You will find two storyboards, one belonging to each persona I created
          in Part 3: Shy Strategic Santiago and Cool Robby.
          <br /> Below each frame, you can find the descriptions of what is
          going on. More specifically, how the user is interacting with <br/> the
          interface.
        </p>
        <div className="StoryBoards">
          <img src={Sstoryboard} alt="SS" height="500" width="600" />
          <br />
          <img src={Rstoryboard} alt="RS" height="700" width="600" />
        </div>
      </section>

      <section className="Citations">
        <h3> Citations</h3>
        <p>
          {" "}
          React <br /> Vite <br /> How to make a card
          (https://www.w3schools.com/howto/howto_css_cards.asp )
          <br /> Flexbox guide
          (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
          )
        </p>
      </section>
      <footer> Made in Providence </footer>
    </div>
  );
}

export default App;
