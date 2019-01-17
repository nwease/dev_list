import React from 'react';
import './App.css';

const App = () => (<PersonList />);

const PersonList = () => {
    const people = [
        {
            img: 65,
            name: 'Steve Cheese',
            job: 'Front End Developer'
        },
        {
            img: 22,
            name: 'Goat Cheese',
            job: 'Back End Developer'
        },
        {
            img: 33,
            name: 'Blue Cheese',
            job: 'Web Designer'
        }
    ];
    return (
        <section>
            <Person person={people[0]}>
                I am a god like Front end Developer!!!
            </Person>
            <Person person={people[1]}>
                I am a bad ass Back End Developer!!!
            </Person>
            <Person person={people[2]}>
                I am a Picasso wanna be!!!
            </Person>
        </section>
    )
};

const Person = (props) => {
    const{img, name, job} = props.person;
    const {children} = props;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
      <div className="person">
          <img src={url} alt="Random pic"/>
          <div>
              <h4>{name}</h4>
              <h4>{job}</h4>
              {children}
          </div>
      </div>
  )
};

export default App;
