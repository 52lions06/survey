import React from 'react';

/*
  The key thing to note here is that all your components 
  should be defined one per file. state should be defined in 
  this.state in the constructor. 
  If you create another component, put it in another file and
  export it.
*/

export default class ExampleComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          first_name: 'Peter',
          last_name: 'Szujewski',
          location: 'Ypsi, MI',
        },
      ],
    };
    this.addPerson = (person) => { 
      this.setState({
        data: [...this.state.data, person],
      }); 
    }
  }

  renderPerson(person, idx) {
    return (
      <li key={idx}>
        <h5>{`${person.first_name} ${person.last_name}`}</h5>
        <p>{`Location: ${person.location}`}</p>
      </li>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div id='example_component'>
        <h2>This is an example component</h2>
        <p>It holds a list of people. We could use the addPerson method to add people to the list</p>
        <p>Here, we can render the list</p>
        {
          data.map((person, idx) => this.renderPerson(person, idx))
        }
      </div>
    );
  }

}