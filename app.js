// Header Component
const Header = () => {
    return <h1>React Tic Tac Toe !!!!</h1>;
  };
  
  // Player Component
 
  class PlayerX extends React.Component {
    render () {
      return (
        <div className="X">
          <h2>Player X </h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }

  class PlayerO extends React.Component {
    render () {
      return (
        <div className="O">
          <h2>Player O </h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }


//Square  
class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

//Board
class Board extends React.Component {
    render () {
      return (
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      )
    }
  }
  
  // App Component
  class App extends React.Component {
    render() {
      return (
        <div className="container">
          <Header />
          <PlayerX />
          <PlayerO />
          <Board />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  