function showPaymentFields() {
    const paymentMethod = document.getElementById("payment-method").value;
    const cartaoDetails = document.getElementById("cartao-details");
    const pixDetails = document.getElementById("pix-details");
    const dinheiroDetails = document.getElementById("dinheiro-details");

    // Oculte todos os campos de pagamento
    cartaoDetails.style.display = "none";
    pixDetails.style.display = "none";
    dinheiroDetails.style.display = "none";

    // Mostre o campo relevante com base na seleção
    if (paymentMethod === "cartao") {
        cartaoDetails.style.display = "block";
    } else if (paymentMethod === "pix") {
        pixDetails.style.display = "block";
    } else if (paymentMethod === "dinheiro") {
        dinheiroDetails.style.display = "block";
    }
}
        // Função para calcular o preço total com base no carrinho
        function calcularPrecoTotal(carrinho) {
            let precoTotal = 0;

            // Percorra os itens do carrinho e some os preços
            for (const item of carrinho) {
                precoTotal += item.preco * item.quantidade;
            }

            return precoTotal.toFixed(2); // Formata o preço para duas casas decimais
        }

        // Obtenha os parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        const carrinhoCodificado = urlParams.get("carrinho");

        console.log("Dados do carrinho codificado:", carrinhoCodificado);

        // Decodifique os dados do carrinho e transforme-os em um objeto JavaScript
        const carrinhoJSON = decodeURIComponent(carrinhoCodificado);
        console.log("Dados do carrinho JSON decodificados:", carrinhoJSON);

        const carrinho = JSON.parse(carrinhoJSON);
        console.log("Dados do carrinho:", carrinho);

        // Calcule o preço total
        const precoTotal = calcularPrecoTotal(carrinho);
        console.log("Preço Total:", precoTotal);

        // Atualize o elemento HTML com o preço total calculado
        const totalPriceElement = document.getElementById("total-price");
        if (totalPriceElement) {
            totalPriceElement.textContent = ` ${precoTotal}`; // Adicione "R$" para exibir o preço no formato correto
        }

        // Função para mostrar/ocultar os campos de pagamento com base na seleção no menu suspenso
function showPaymentFields() {
    const paymentMethod = document.getElementById("payment-method").value;
    const cartaoDetails = document.getElementById("cartao-details");
    const pixDetails = document.getElementById("pix-details");
    const dinheiroDetails = document.getElementById("dinheiro-details");

    // Oculte todos os campos de pagamento
    cartaoDetails.style.display = "none";
    pixDetails.style.display = "none";
    dinheiroDetails.style.display = "none";

    // Mostre o campo relevante com base na seleção
    if (paymentMethod === "cartao") {
        cartaoDetails.style.display = "block";
    } else if (paymentMethod === "pix") {
        pixDetails.style.display = "block";
    } else if (paymentMethod === "dinheiro") {
        dinheiroDetails.style.display = "block";
    }
}

// Adicione um ouvinte de evento para chamar a função showPaymentFields() quando a seleção no menu suspenso muda
document.getElementById("payment-method").addEventListener("change", showPaymentFields);


function calcularPrecoTotal(carrinho) {
    let precoTotal = 0;

    // Percorra os itens do carrinho e some os preços
    for (const item of carrinho) {
        const precoItem = parseFloat(item.preco);
        const quantidadeItem = parseFloat(item.quantidade);

        if (!isNaN(precoItem) && !isNaN(quantidadeItem)) {
            precoTotal += precoItem * quantidadeItem;
        }
    }

    return precoTotal.toFixed(2); // Formata o preço para duas casas decimais
}

