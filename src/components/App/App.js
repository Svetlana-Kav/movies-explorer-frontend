import './App.css';
import Main from'../Main/Main.js'
import Footer from '../Footer/Footer';
// import PageNotFound from "../PageNotFound/PageNotFound.js"
// import SearchForm from "../SearchForm/SearchForm.js"

function App() {
  return (
    <div className="page">
      <Main />
      {/* <SearchForm></SearchForm> */}

      {/* <PageNotFound></PageNotFound> */}
      <Footer></Footer> 
    </div>
  )
}
export default App;
