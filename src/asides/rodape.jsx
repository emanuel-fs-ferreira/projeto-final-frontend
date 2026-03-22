import React from "react";
import { useNavigate } from "react-router-dom";

function Rodape(){
    const navigate = useNavigate()
    
    return (
        <footer style={{ 
            padding: '20px', 
            background: '#212529', 
            borderTop: '1px solid #dee2e6',
            textAlign: 'center'
          }} class="rodape">
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <li><a onClick={() => navigate('/')} style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Início</a></li>
              <li><a onClick={() => navigate('/contato')} style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Contato</a></li>
              <li><a onClick={() => navigate('/sobre')} style={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: '500' }}>Sobre</a></li>
            </ul>
          </footer>
    )
}

export default Rodape