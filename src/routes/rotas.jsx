import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "../principal/produtos"
import ProdutoEscolhido from "../principal/produtoEscolhido";
import Contato from "../asides/contato";
import Sobre from "../asides/sobre";

function RouteApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produtos/>}/>
                <Route path="/produto-escolhido" element={<ProdutoEscolhido/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp