import '../App.css';
import HeaderComponent from './HeaderComponent.jsx';
import SearchComponent from './SearchComponent.jsx';
import ListUserComponent from './ListUserComponent.jsx';
import ActionComponent from './ActionComponent.jsx';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="searchForm">
        <div className="container">
          <SearchComponent />
          <div className="col-12">
            <div className="row">
              <ListUserComponent />
              <ActionComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
