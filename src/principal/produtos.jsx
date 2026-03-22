import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "../asides/rodape";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [genero, setGenero] = useState([]);
  const [selectedGeneros, setSelectedGeneros] = useState(new Set());
  const [selectedCategorias, setSelectedCategorias] = useState(new Set());

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((i) => i.json())
      .then((json) => {
        setProdutos(json.data);
        // Extrair categorias únicas da categoria type
        const categ = [...new Set(json.data.map((p) => p.type))];
        setCategorias(categ);
        // Extrair categorias únicas da categoria genero
        const gen = [...new Set(json.data.map((p) => p.category))];
        setGenero(gen);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  function armazenarEscolha(product) {
    navigate("/produto-escolhido", { state: { product } });
  }

  function clearFilters() {
    setSelectedGeneros(new Set());
    setSelectedCategorias(new Set());
  }

  const filteredProdutos = produtos.filter(
    (product) =>
      selectedCategorias.size === 0 ||
      selectedCategorias.has(product.type) ||
      selectedGeneros.size === 0 ||
      selectedGeneros.has(product.category)
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <nav
        style={{
          width: "250px",
          background: "#212529",
          borderRight: "1px solid #dee2e6",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          overflowY: "auto",
          zIndex: 1000,
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3 style={{ margin: "0 0 15px", color: "white", fontSize: "1.1em" }}>
            Filtros
          </h3>
          <button
            onClick={clearFilters}
            style={{
              marginBottom: "15px",
              padding: "6px 12px",
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.85em",
            }}
          >
            Limpar Filtros
          </button>
          <div style={{ marginBottom: "20px" }}>
            <h4
              style={{
                margin: "0 0 10px",
                color: "whitesmoke",
                fontSize: "0.95em",
              }}
            >
              Gênero:
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {genero.map((generoItem, index) => {
                const id = `genero-${index}`;
                const isChecked = selectedGeneros.has(generoItem);
                return (
                  <li key={index}>
                    <input
                      type="checkbox"
                      id={id}
                      checked={isChecked}
                      onChange={(e) => {
                        const newSet = new Set(selectedGeneros);
                        if (e.target.checked) {
                          newSet.add(generoItem);
                        } else {
                          newSet.delete(generoItem);
                        }
                        setSelectedGeneros(newSet);
                      }}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor={id}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        color: "#007bff",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "0.9em",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        background: isChecked ? "#007bff" : "transparent",
                        color: isChecked ? "white" : "#007bff",
                      }}
                      onMouseOver={(e) => {
                        if (!isChecked) e.target.style.background = "#e9ecef";
                      }}
                      onMouseOut={(e) => {
                        if (!isChecked)
                          e.target.style.background = "transparent";
                      }}
                    >
                      {generoItem} {isChecked && "(✓)"}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4
              style={{
                margin: "0 0 10px",
                color: "whitesmoke",
                fontSize: "0.95em",
              }}
            >
              Tipo:
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {categorias.map((categoria, index) => {
                const id = `categoria-${index}`;
                const isChecked = selectedCategorias.has(categoria);
                return (
                  <li key={categoria}>
                    <input
                      type="checkbox"
                      id={id}
                      checked={isChecked}
                      onChange={(e) => {
                        const newSet = new Set(selectedCategorias);
                        if (e.target.checked) {
                          newSet.add(categoria);
                        } else {
                          newSet.delete(categoria);
                        }
                        setSelectedCategorias(newSet);
                      }}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor={id}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        color: "#007bff",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "0.9em",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        background: isChecked ? "#007bff" : "transparent",
                        color: isChecked ? "white" : "#007bff",
                      }}
                      onMouseOver={(e) => {
                        if (!isChecked) e.target.style.background = "#e9ecef";
                      }}
                      onMouseOut={(e) => {
                        if (!isChecked)
                          e.target.style.background = "transparent";
                      }}
                    >
                      {categoria} {isChecked && "(✓)"}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          marginLeft: "250px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <header
          style={{
            background: "#212529",
            padding: "15px 20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 999,
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.8em", color: "white" }}>
            Produtos
          </h1>
        </header>
        <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {produtos.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontSize: "1.1em",
              }}
            >
              Carregando produtos...
            </p>
          ) : filteredProdutos.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontSize: "1.1em",
              }}
            >
              Nenhum produto encontrado.{" "}
              <button
                onClick={clearFilters}
                style={{
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Limpar filtros
              </button>
            </p>
          ) : (
            <div className="produtos">
              <p
                style={{
                  marginBottom: "15px",
                  color: "#28a745",
                  fontWeight: "bold",
                }}
              >
                {filteredProdutos.length} produto
                {filteredProdutos.length !== 1 ? "s" : ""} encontrado
                {filteredProdutos.length !== 1 ? "s" : ""}.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {filteredProdutos.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "25px",
                      paddingBottom: "20px",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "220px",
                        height: "220px",
                        marginRight: "25px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                    <div style={{ flex: 1, position: "relative" }}>
                      <a
                        onClick={() => armazenarEscolha(item)}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          display: "block",
                          position: "relative",
                          paddingTop: "10px",
                        }}
                      >
                        <h3
                          style={{
                            margin: "0 0 12px",
                            fontSize: "1.4em",
                            color: "white",
                            lineHeight: "1.3",
                          }}
                        >
                          {item.title}
                        </h3>
                        {item.isNew === true ? (
                          <p
                            style={{
                              position: "absolute",
                              top: 10,
                              right: 10,
                              background: "red",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "12px",
                              fontSize: "0.8em",
                              fontWeight: "bold",
                              margin: 0,
                              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                              zIndex: 10,
                            }}
                          >
                            Novo!
                          </p>
                        ) : null}
                        <p
                          style={{
                            margin: "0 0 15px",
                            fontSize: "1.1em",
                            color: "#6c757d",
                            lineHeight: "1.5",
                          }}
                        >
                          {item.description.substring(0, 120)}...
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "1.8em",
                            fontWeight: "bold",
                            color: "#28a745",
                          }}
                        >
                          {new Intl.NumberFormat("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          }).format(item.price)}
                        </p>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
        <element>
          <Rodape />
        </element>
      </div>
    </div>
  );
}

export default Produtos;
