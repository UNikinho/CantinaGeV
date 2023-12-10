<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Página de Pagamento</title>
    <link rel="stylesheet" href="../css/pagamento.css">
</head>
<body>
    <div class="center-box">
        <div class="container">
    <h1>Pagamento</h1>
    <form  id="payment-form" action="../conexao/process.php" method="post">
        <label for="payment-method">Escolha o método de pagamento:</label>
        <select id="payment-method" name="payment-method" onchange="showPaymentFields()">
            <option value="cartao">Cartão de Crédito/Débito</option>
            <option value="pix">PIX</option>
            <option value="dinheiro">Pagamento em Dinheiro</option>
        </select>

        <div id="cartao-details">
            <label for="card-number">Número do Cartão:</label>
            <input type="text" id="card-number" name="card-number">
            <label for="expiry">Data de Validade:</label>
            <input type="text" id="expiry" name="expiry">
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv">
        </div>

        <div id="pix-details">
            <label for="pix-key">Chave PIX:</label>
            <input type="text" id="pix-key" name="pix-key">
        </div>

        <div id="dinheiro-details">
            <label for="cash-amount">Valor em Dinheiro:</label>
            <input type="text" id="cash-amount" name="cash-amount">
        </div>

        <!-- Exibir o preço total com base nos itens selecionados do cardápio -->
        <p>Preço Total: R$ <span id="total-price">0.00</span></p>

        <button type="submit">Pagar</button>
        <p><a href="../html/cardapio.php">Ver Cardápio</a></p>
    </form>
        </div>
    </div>
    <script src="../js/app.js"></script>
    <script src="../js/script.js"></script>
</body>
</html>
