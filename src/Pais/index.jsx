import './style.css'
import logo from '../pokemonlogo.png'

console.log(logo); // /pokemonlogo.png

function Pais() {
    return <img src={logo} alt="Logo" class="logo" />;
}
  
export default Pais;