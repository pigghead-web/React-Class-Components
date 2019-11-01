// * Print out a name, edit a text box that will change the name
// * Class component keeps track of things internally (state)

class HelloUser extends React.Component {
  // Default state
  // * Called immediately (just like regular OOP)
  constructor(props) {
    super(props);
    
    this.state = {
      username: props.username,
    };
    
    // makes 'this' keyword in handleNameChange to refer to the entire instance of the class
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange(e) {
    // * Update internal state with whatever is written in the text field
    // * SetState is also asynchronous > no other logic will be blocked
    this.setState({ username: e.target.value });
  }
  
  render() {
    return (
      <div>
        Hello {this.state.username}
        <p>Change Name: </p>
        <input type="text" value={this.state.username} onChange={this.handleNameChange} />
      </div>
    );
  }
}

const init = () => {
  ReactDOM.render(
    <HelloUser username="Justin"/>,
    document.getElementById('app')
  );
};

window.onload = init