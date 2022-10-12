import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';

function App() {
  return (
   <>
   <Navbar about ="About"></Navbar>
   <div className="container my-3">
   <TextForm></TextForm>
   </div>
   
   </>
  );
}

export default App;
