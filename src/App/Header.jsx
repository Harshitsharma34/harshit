import "../Css/header.css"
import scroll from '../Assets/scroll.svg'
import hithere from '../Assets/hithere.svg'

function Header() {
    return (
      <div className="header">
          <ul className="header-text">
                        <li><h1 id = "making" style={{WebkitTextStrokeWidth:'1px',WebkitTextFillColor:"transparent"}}>MAKING</h1></li>
                    
                         <div className="product-design-hover">
                              <li><h1 id = "product" >PRODUCT</h1></li>
                              <li><h1 id = "design" >DESIGN</h1></li>
                              <img className="hi-img"  src={hithere}></img>
                        </div>

                        <li><h1 id = "simple" style={{WebkitTextStrokeWidth:'1px',WebkitTextFillColor:"transparent"}}>SIMPLE</h1></li>
                        
          </ul>
          
        <img className="scroll-img" src={scroll}></img>
        
        
      </div>
    );
  }
  
  export default Header;
  