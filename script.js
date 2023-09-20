// Importe a biblioteca Chart.js (certifique-se de incluir o script no seu HTML)

// Dados da planilha (exemplo)
const meses = ["Janeiro", "Fevereiro", "Março"];
const vendas = [1200, 750, 900];

// Selecione o elemento HTML onde deseja renderizar o gráfico
const ctx = document.getElementById("chart").getContext("2d");

// Crie o gráfico de barras
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
        labels: meses, // Rótulos no eixo X
        datasets: [{
            label: 'Vendas',
            data: vendas, // Dados no eixo Y
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor das barras
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
            borderWidth: 1 // Largura da borda
        }]
    },
    options: {
        animation: {
            duration: 1000, // Duração da animação em milissegundos
            easing: 'easeInOutQuart' // Efeito de animação
        },
        scales: {
            y: {
                beginAtZero: true // Comece o eixo Y a partir de zero
            }
        }
    }
});
