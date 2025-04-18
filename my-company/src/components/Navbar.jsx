import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav style={{ display: 'flex',
        justifyContent: 'center', backgroundColor:'black',  padding: '10px 0', textAlign:'center', width: '100%', position:'fixed', left:'0', top:'0'}}>
      <Link to="/" style={{color:'white', margin:'0 15px', fontSize:'16px'}}>Home</Link>
      <Link to="/services" style={{color:'white', margin:'0 15px', fontSize:'16p'}}>Services</Link>
      <Link to="/contact" style={{color:'white', margin:'0 15px', fontSize:'16p'}}>Contact</Link>
      <Link to="/about" style={{color:'white', margin:'0 15px', fontSize:'16p'}}>About</Link>
    </nav>
  );
}

export default Navbar;