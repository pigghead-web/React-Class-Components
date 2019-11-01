class HelloWorld extends React.Component {
  // Return JSX we can render
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

const init = () => {
  // Because we are working with react components, putting HelloWorld inside angled brackets will
  // simply return the HTML in the HelloWorld function above
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
  );
};

window.onload = init;