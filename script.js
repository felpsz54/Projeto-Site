<script>
        document.addEventListener('DOMContentLoaded', function() {
            // Configuração de cores
            const colors = {
                microsoft: '#1d4e89',
                sony: '#3a7ca5',
                fromsoftware: '#5da0c6',
                background: '#e6f0ff'
            };
           
            // Dados para os gráficos
            const financialData = {
                microsoft: {
                    revenue: [245, 263, 281.7],
                    profit: [87.7, 94.3, 101.8],
                    years: ['2023', '2024', '2025']
                },
                sony: {
                    revenue: [68.5, 73.2, 78.5],
                    profit: [6.4, 7.1, 7.8],
                    years: ['2023', '2024', '2025']
                },
                fromsoftware: {
                    revenue: [106, 152, 160],
                    profit: [27, 38, 45],
                    years: ['2023', '2024', '2025']
                }
            };
           
            // Gráfico da Microsoft
            const microsoftCtx = document.getElementById('microsoftChart').getContext('2d');
            new Chart(microsoftCtx, {
                type: 'bar',
                data: {
                    labels: financialData.microsoft.years,
                    datasets: [{
                        label: 'Receita (USD bi)',
                        data: financialData.microsoft.revenue,
                        backgroundColor: colors.microsoft,
                        borderColor: colors.microsoft,
                        borderWidth: 1
                    }, {
                        label: 'Lucro Líquido (USD bi)',
                        data: financialData.microsoft.profit,
                        backgroundColor: colors.background,
                        borderColor: colors.microsoft,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Desempenho Financeiro da Microsoft',
                            color: colors.microsoft,
                            font: { size: 16 }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: colors.microsoft }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: colors.microsoft }
                        }
                    }
                }
            });
           
            // Gráfico da Sony
            const sonyCtx = document.getElementById('sonyChart').getContext('2d');
            new Chart(sonyCtx, {
                type: 'bar',
                data: {
                    labels: financialData.sony.years,
                    datasets: [{
                        label: 'Receita (USD bi)',
                        data: financialData.sony.revenue,
                        backgroundColor: colors.sony,
                        borderColor: colors.sony,
                        borderWidth: 1
                    }, {
                        label: 'Lucro Líquido (USD bi)',
                        data: financialData.sony.profit,
                        backgroundColor: colors.background,
                        borderColor: colors.sony,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Desempenho Financeiro da Sony',
                            color: colors.sony,
                            font: { size: 16 }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: colors.sony }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: colors.sony }
                        }
                    }
                }
            });
           
            // Gráfico da FromSoftware
            const fromsoftwareCtx = document.getElementById('fromsoftwareChart').getContext('2d');
            new Chart(fromsoftwareCtx, {
                type: 'bar',
                data: {
                    labels: financialData.fromsoftware.years,
                    datasets: [{
                        label: 'Receita (USD mi)',
                        data: financialData.fromsoftware.revenue,
                        backgroundColor: colors.fromsoftware,
                        borderColor: colors.fromsoftware,
                        borderWidth: 1
                    }, {
                        label: 'Lucro Líquido (USD mi)',
                        data: financialData.fromsoftware.profit,
                        backgroundColor: colors.background,
                        borderColor: colors.fromsoftware,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Desempenho Financeiro da FromSoftware',
                            color: colors.fromsoftware,
                            font: { size: 16 }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: colors.fromsoftware }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: colors.fromsoftware }
                        }
                    }
                }
            });
           
            // Gráficos comparativos
            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(revenueCtx, {
                type: 'bar',
                data: {
                    labels: ['Microsoft', 'Sony', 'FromSoftware'],
                    datasets: [{
                        label: 'Receita 2025',
                        data: [281.7, 78.5, 0.16],
                        backgroundColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparativo de Receita 2025 (USD bi/mi)',
                            color: colors.microsoft,
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' }
                        }
                    }
                }
            });
           
            const profitCtx = document.getElementById('profitChart').getContext('2d');
            const profitChart = new Chart(profitCtx, {
                type: 'bar',
                data: {
                    labels: ['Microsoft', 'Sony', 'FromSoftware'],
                    datasets: [{
                        label: 'Lucro Líquido 2025',
                        data: [101.8, 7.8, 0.045],
                        backgroundColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparativo de Lucro Líquido 2025 (USD bi/mi)',
                            color: colors.microsoft,
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' }
                        }
                    }
                }
            });
           
            const growthCtx = document.getElementById('growthChart').getContext('2d');
            const growthChart = new Chart(growthCtx, {
                type: 'bar',
                data: {
                    labels: ['Microsoft', 'Sony', 'FromSoftware'],
                    datasets: [{
                        label: 'Crescimento do Lucro (%)',
                        data: [16, 18, 66.1],
                        backgroundColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparativo de Crescimento do Lucro',
                            color: colors.microsoft,
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' }
                        }
                    }
                }
            });
           
            const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
            const efficiencyChart = new Chart(efficiencyCtx, {
                type: 'bar',
                data: {
                    labels: ['Microsoft', 'Sony', 'FromSoftware'],
                    datasets: [{
                        label: 'Margem de Lucro Líquido (%)',
                        data: [36.1, 9.9, 28.1],
                        backgroundColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderColor: [colors.microsoft, colors.sony, colors.fromsoftware],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparativo de Eficiência (Margem de Lucro)',
                            color: colors.microsoft,
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' }
                        }
                    }
                }
            });
           
            // Controle de abas
            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove a classe active de todas as abas
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    // Adiciona a classe active à aba clicada
                    this.classList.add('active');
                   
                    // Esconde todo o conteúdo das abas
                    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    // Mostra o conteúdo correspondente
                    document.getElementById(`${this.dataset.tab}-tab`).classList.add('active');
                });
            });
           
            // Controle de visualização
            document.getElementById('barView').addEventListener('click', function() {
                revenueChart.config.type = 'bar';
                profitChart.config.type = 'bar';
                growthChart.config.type = 'bar';
                efficiencyChart.config.type = 'bar';
                revenueChart.update();
                profitChart.update();
                growthChart.update();
                efficiencyChart.update();
            });
           
            document.getElementById('lineView').addEventListener('click', function() {
                revenueChart.config.type = 'line';
                profitChart.config.type = 'line';
                growthChart.config.type = 'line';
                efficiencyChart.config.type = 'line';
                revenueChart.update();
                profitChart.update();
                growthChart.update();
                efficiencyChart.update();
            });
           
            // Simulação de exportação de dados
            document.getElementById('downloadBtn').addEventListener('click', function() {
                alert('Funcionalidade de exportação ativada! Em uma aplicação real, isso baixaria um arquivo com os dados.');
            });
        });
    </script>
</body>
</html>
