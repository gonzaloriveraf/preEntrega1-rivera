import "./MenuItems.css"
import CartWidget from "../CartWidget"

const categories = [ 'Tintos' , 'Blancos', 'Espumantes' , 'Maridajes']

const MenuItems = () => {

    return (

<>


<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav">
            
       {categories.map( (categorie) => 
       <a className="nav-link"  href= { '/' + categorie } >{categorie}</a>

       )}

        </div>
  
  



      </div>
      
      <CartWidget />

      </>

    )

}


export default MenuItems