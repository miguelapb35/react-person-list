import React from 'react';
import './App.css';

const App = () => (<PersonList />)

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'john',
      job: 'developer'
    },
    {
      img: 34,
      name: 'bob',
      job: 'designer'
    },
    {
      img: 56,
      name: 'peter',
      job: 'artist'
    }
  ]
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non porro quis inventore perspiciatis, obcaecati vero nemo laboriosam et quam vel! Odio quaerat fugiat modi perspiciatis iste nostrum, consequuntur assumenda est!
        Quos eum excepturi ipsam hic architecto ipsum quas voluptate pariatur, vel soluta quaerat. Veritatis reprehenderit debitis doloribus, quod totam distinctio quam, cumque asperiores expedita vitae pariatur sapiente officia aliquam ratione.
        Nesciunt cupiditate necessitatibus ad error, voluptatem, est eos, unde ea temporibus animi ullam pariatur. Illum excepturi recusandae explicabo, unde officia sit quidem in ipsum quasi officiis delectus quam animi fugit.
        Autem, nulla, exercitationem dolore iusto omnis excepturi temporibus distinctio perspiciatis, magnam numquam unde quo qui facere saepe eaque fugit. Necessitatibus quisquam voluptatum eos! Necessitatibus sapiente cumque earum nobis a nostrum.
        Laborum repudiandae mollitia error distinctio, veritatis architecto facere quas ratione placeat alias porro excepturi ipsa non? Doloremque sed reprehenderit, veniam, unde accusantium molestias nisi, dolores esse porro atque minus repellat!
      </Person>
      <Person person={people[2]} />
    </section>
  )
}

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url =
    `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <div className='person'>
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4> 
        {children}
      </div>
    </div>
  )
}

export default App;
