import logo from './logo.svg';
import './App.css';
import BookListView from './Components/Bookshelf/BookListView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 
          style={{
            zIndex: 1000, 
            textAlign: 'center',
            color: '#fff',
            fontStyle: 'semi-bold',
            }}
        >
          Book Journey
        </h1>
      </header>
      <BookListView/>
    </div>
  );
}

export default App;
