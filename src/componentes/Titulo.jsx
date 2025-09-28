import '../styles/FonteTitulo.css';
function Titulo({ cor }) {
      return (
            <div>
                  <h1 id='titulo' style={{ color: cor }}> Sistema de cadastro</h1>
            </div>
      )
}
export default Titulo