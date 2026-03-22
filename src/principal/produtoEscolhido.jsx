import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Rodape from "../asides/rodape";

function ProdutoEscolhido() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div>
        <header>
          <h1>Projeto Final - Frontend - Emanuel Felipe</h1>
        </header>
        <hr />
        <main>
          <p>Produto não encontrado. <button onClick={() => navigate('/')}>Voltar à lista</button></p>
        </main>
        <hr />
        <element>
          <Rodape/>
        </element>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>Detalhes do Produto</h1>
        <button onClick={() => navigate('/')}>Voltar aos Produtos</button>
      </header>
      <hr />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px"
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
          <div>
            <h2>{product.title}</h2>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
              {product.description}
            </p>
            <p style={{
              margin: "20px 0",
              fontSize: "2em",
              fontWeight: "bold",
              color: "#4CAF50"
            }}>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Tipo:</strong> {product.type}</p>
            <p><strong>Tamannhos:</strong> {product.size.join(", ")}</p>
            <p><strong>Em estoque:</strong> {product.stock} unidades</p>
          </div>
        </div>
      </main>
      <hr />
      <element>
        <Rodape/>
      </element>
    </div>
  );
}

export default ProdutoEscolhido;
