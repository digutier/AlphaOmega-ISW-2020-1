import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer  className="w-100 container text-center">
            <p className="w-100">&copy; {(new Date().getFullYear())} SOGI &middot; AlphaOmega <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;