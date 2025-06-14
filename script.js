const dados = {
  jan: [1000, 600, 300, 150],
  fev: [800, 500, 250, 120],
  mar: [1200, 700, 400, 200],
  todos: [3000, 1800, 950, 470]
};

const nomes = ["Visibilidade", "Orçamentos", "Vendas", "Faturamento"];
const cores = ["#0d6efd", "#0dcaf0", "#ffc107", "#198754"];

const ctx = document.getElementById('funnelChart').getContext('2d');
let chart;

function atualizarDashboard(mes) {
  const valores = dados[mes];
  document.getElementById("visibilidade").innerText = valores[0];
  document.getElementById("orcamentos").innerText = valores[1];
  document.getElementById("vendas").innerText = valores[2];
  document.getElementById("faturamento").innerText = valores[3];

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nomes,
      datasets: [{
        label: 'Etapas do Funil',
        data: valores,
        backgroundColor: cores
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

// Evento de filtro
document.getElementById("filtroMes").addEventListener("change", function () {
  atualizarDashboard(this.value);
});

// Inicial
atualizarDashboard("todos");
