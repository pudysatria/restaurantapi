import NotFound from './404';
import { Route ,Routes,Link} from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Detail from './Detail';
import "../App.css"

function App() {
  return (
  <>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/category" className="nav-link">Category</Link>
      </nav>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/category" element={<Category/>} exact/>
      <Route path="/category/:id" element={<Detail/>}/>
      <Route path="*" element={<NotFound/>} exact/>
    </Routes>
  </>
  );
}

export default App;
