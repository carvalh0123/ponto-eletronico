function atualizarDataHora() {
    const agora = new Date();
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'][agora.getDay()];
    const dataFormatada = agora.toLocaleDateString('pt-BR');
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    const elementoDataHora = document.getElementById('data-hora');
    elementoDataHora.textContent = `${diaSemana}, ${dataFormatada} - ${horaFormatada}`;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();
