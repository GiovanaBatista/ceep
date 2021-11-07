import React, {Component} from "react";

class FormularioCadastro extends Component{
    render(){
        return(
            <form>
            <input type="text" placeholder="Título"></input>
            <textarea placeholder="Comentários"></textarea>
            <button>Enviar</button>
          </form>
        );
    }
}

export default FormularioCadastro;