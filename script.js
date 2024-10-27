document.addEventListener("DOMContentLoaded", () => {
    const tabelaRegistros = document.querySelector("#tabelaRegistros tbody");
    const filtroPeriodo = document.getElementById("filtroPeriodo");
    const btnFiltrar = document.getElementById("btnFiltrar");

    function carregarRegistros() {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        tabelaRegistros.innerHTML = "";
        registros.forEach((registro, index) => {
            const row = tabelaRegistros.insertRow();
            row.innerHTML = `
                <td>${registro.data}</td>
                <td>${registro.pontoEntrada}</td>
                <td>${registro.pontoSaida}</td>
                <td>${registro.intervalo}</td>
                <td>${registro.justificativa}</td>
                <td>${registro.observacoes}</td>
                <td>
                    <button onclick="editarRegistro(${index})">Editar</button>
                    <button onclick="alert('Exclusão não permitida')">Excluir</button>
                </td>
            `;
        });
    }

    btnFiltrar.addEventListener("click", () => {
        const periodo = filtroPeriodo.value;
        // Filtrar registros com base na seleção e recarregar a tabela
        // Lógica de filtragem a ser implementada
    });

    window.editarRegistro = (index) => {
        // Lógica para editar um registro
        alert("Funcionalidade de edição a ser implementada.");
    };

    carregarRegistros();
});
