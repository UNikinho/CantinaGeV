var historicoValoresTotais = [];
var valorFinal = 0;
$(document).ready(function () {
    $('.overlay').hide();
    var valorTotal = 0;

    function atualizarValorTotal() {
        $('.overlay-card .valortotal').text(valorTotal.toFixed(2));
    }

    function adicionarItemAoCarrinho(nome, descricao, preco) {
        const novoItem = document.createElement('div');
        novoItem.classList.add('item-carrinho');

        novoItem.innerHTML = `
            <h3>${nome}</h3>
            <p>R$ ${preco.toFixed(2)}</p>
            <button class="remover-item" data-preco="${preco}">-</button>
        `;

        valorTotal += preco;
        $('.cart-sidebar-content').append(novoItem);
        atualizarValorTotal();

        const ultimoValor = calcularValorTotal();
        $('.cartvalue').text(ultimoValor.toFixed(2));
    }

    $('.cart-sidebar-content').on('click', '.remover-item', function () {
        const precoRemovido = parseFloat($(this).data('preco'));
        if (!isNaN(precoRemovido)) {
            valorTotal = Math.max(0, valorTotal - precoRemovido);
            atualizarValorTotal();
            $(this).parent().remove(); // Remove o item do DOM

            // Remove o valor do histórico ao remover um item
            const index = historicoValoresTotais.indexOf(precoRemovido);
            if (index !== -1) {
                historicoValoresTotais.splice(index, 1);
            }
            console.log(historicoValoresTotais);
        }
        const ultimoValor = calcularValorTotal();
        $('.cartvalue').text(ultimoValor.toFixed(2));
    });

    $('.adccart').click(function (event) {
        $('.overlay').hide();
        const preco = parseFloat($(this).data('preco'));
        const imagem = $(this).data('imagem');

        if (!isNaN(preco)) {
            valorTotal += preco;
            $('.overlay-card .preco').text('R$' + preco.toFixed(2));
            $('.overlay-card .valortotal').text(valorTotal.toFixed(2));
            $('.overlay-card .nome').text($(this).data('nome'));
            $('.overlay-card .descricao').text($(this).data('descricao'));
            $('.overlay-card .imgproduto').attr('src', imagem);
            $('.overlay').show();
        }
    });

    $('#remover').click(function () {
        const preco = parseFloat($('.overlay-card .preco').text().replace('R$', ''));
        if (!isNaN(preco)) {
            valorTotal += preco; // Adiciona o valor ao adicionar
            atualizarValorTotal();
        }
    });
    
    $('#adicionar').click(function () {
        const preco = parseFloat($('.overlay-card .preco').text().replace('R$', ''));
        if (!isNaN(preco)) {
            valorTotal -= preco; // Subtrai o valor ao remover
            valorTotal = Math.max(0, valorTotal); // Garante que o valorTotal não seja negativo
            atualizarValorTotal();
        }
    });


    $('#fecharcard').click(function () {
        $('.overlay').hide();
        valorTotal = 0;
        atualizarValorTotal();
    });

    $('.overlay').mousedown(function (event) {
        if (!$(event.target).closest(".overlay-card").length) {
            $('.overlay').hide();
            valorTotal = 0;
            atualizarValorTotal();
        }
    });

    $('#comprar').click(function () {
        const preco = valorTotal;
        const nome = $('.overlay-card .nome').text();
        const descricao = $('.overlay-card .descricao').text();
        
    
        if (!isNaN(preco)) {
            adicionarItemAoCarrinho(nome, descricao, preco);
            $('.overlay').hide();
            historicoValoresTotais.push(preco); // Adiciona o valor ao histórico
            valorTotal = 0;
            atualizarValorTotal();
        }
        const ultimoValor = calcularValorTotal();
        $('.cartvalue').text(ultimoValor.toFixed(2));
    });
    
    $('#pedidofinal').click(function () {
        // Certifique-se de que a variável historicoValoresTotais está definida
        if (historicoValoresTotais.length > 0) {
            // Crie um objeto com os dados a serem enviados para o servidor
            var dadosPedido = {
                nomepedido: <?php echo $nomepedido; ?>,
                cpfpedido: <?php echo $cpfpedido; ?>,
                rmpedido: <?php $rmpedido; ?>,
                carrinho: historicoValoresTotais
            };
    
            // Faça uma requisição AJAX para o servidor
            $.ajax({
                type: 'POST',
                url: 'processamento.php', // Substitua com o caminho para o seu script de processamento no servidor
                data: JSON.stringify(dadosPedido),
                success: function (response) {
                    // Faça algo com a resposta do servidor, se necessário
                    console.log('Pedido finalizado com sucesso:', response);
                },
                error: function (error) {
                    // Trate erros, se necessário
                    console.error('Erro ao finalizar o pedido:', error);
                }
            });
        } else {
            console.error('O carrinho está vazio. Não é possível finalizar o pedido.');
        }
    });
    
});

    function openCartSidebar() {
        document.getElementById('cart-sidebar').style.display = 'flex';
        console.log('Histórico de valores totais:', historicoValoresTotais);
    }
    
    function closeCartSidebar() {
        document.getElementById('cart-sidebar').style.display = 'none';
    }

    function calcularValorTotal() {
        // Utilize o método reduce para somar os valores da array
        const somaValores = historicoValoresTotais.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);
    
        return somaValores;
    }
    
    