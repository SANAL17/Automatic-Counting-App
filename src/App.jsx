
import './App.css';
import Counter from './Counter';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
            <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <i class="fa-solid fa-clock fs-1 text-primary mx-2"></i>
          <h3 className='text-primary'> Automatic Counter</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img className='' style={{width:'750px', marginTop:'20px'}} src="https://i.pinimg.com/originals/8e/d4/b7/8ed4b72a2bdd0da27db76f79e223b2ef.gif" alt="" />
          </div>
          <div className="col-6">
          <h1 className='text-primary fw-bold mb-5' style={{textAlign:'center', fontSize:'60px'}}>Automatic Counter App</h1>
         <Counter/>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default App;
