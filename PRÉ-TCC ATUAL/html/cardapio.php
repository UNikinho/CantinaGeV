<?php
include("../conexao.php");

// Seção HTML existente no seu arquivo cardapio.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Parte do servidor (PHP) que processa os dados enviados pelo cliente
    $nomepedido = isset($_POST['nomepedido']) ? $_POST['nomepedido'] : '';
    $cpfpedido = isset($_POST['cpfpedido']) ? $_POST['cpfpedido'] : '';
    $rmpedido = isset($_POST['rmpedido']) ? $_POST['rmpedido'] : '';
    $carrinho = json_decode($_POST['carrinho'], true);

    // Insira os dados na tabela informacoes_pedido
    $query = "INSERT INTO informacoes_pedido (nome, cpf, rm) VALUES ('$nomepedido', '$cpfpedido', '$rmpedido')";
    $result = mysqli_query($conexao, $query);

    // Verifique se a inserção foi bem-sucedida
    if ($result) {
        // Obtenha o ID do pedido inserido
        $idPedido = mysqli_insert_id($conexao);

        // Insira os itens do carrinho na tabela correspondente
        foreach ($carrinho as $precoItem) {
            $queryItem = "INSERT INTO tabela_itens_pedido (id_pedido, preco) VALUES ($idPedido, $precoItem)";
            $resultItem = mysqli_query($conexao, $queryItem);

            // Trate os erros, se necessário
            if (!$resultItem) {
                echo "Erro ao inserir item do carrinho: " . mysqli_error($conexao);
            }
        }

        echo "Pedido finalizado com sucesso. ID do pedido: $idPedido";
    } else {
        echo "Erro ao finalizar o pedido: " . mysqli_error($conexao);
    }

    // Finaliza o script para evitar a execução do HTML abaixo em uma requisição POST
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/cardapio.css">
    <title>Cardapio</title>
</head>
<body>
    <a href="#"><img src="../img/logoTest-removebg-preview.png" alt="logo" class="logo" id="imgLogo"></a>
    <header class="header">
        <a"logo"></a>
        <nav class="navbar">
            <a href="home.html" style="--i:1;" >Home</a>
            <a href="cardapio.php" style="--i:2;"  class="active">Cardápio</a>
            <a href="pratofeito.html" style="--i:3;">Prato Feito</a>
            <img src="../img/carrinho-de-compras.png" alt="Carrinho de Compras" class="cartimg" onclick="openCartSidebar()">

        </nav>
    </header>

    <div class="conteudo">
        <?php foreach ($lanches as $id => $lanche): ?>
            <div class="card">
                <p class="idproduto"><?php echo $id; ?></p>
                <h2 class="nomecard"><?php echo $lanche["nome"]; ?></h2>
                <img src="../img/<?php echo $lanche["imagem"]; ?>" alt="" class="imgproduto" style="width: 100px; height: 100px">
                <h2>R$<?php echo $lanche["preco"]; ?></h2>
                <p class="descricao"><?php echo $lanche["descricao"];?></p>
                <button class="adccart" 
        data-preco="<?php echo $lanche["preco"]; ?>" 
        data-imagem="../img/<?php echo $lanche["imagem"]; ?>"
        data-nome="<?php echo $lanche["nome"]; ?>"
        data-descricao="<?php echo $lanche["descricao"]; ?>">ADICIONAR AO CARRINHO</button>

            </div>
        <?php endforeach; ?>


    <div class="overlay">
        <div class="overlay-card">
            <button id="fecharcard" class="fecharcard">X</button>
            <p class="nome"><?php echo $lanche["nome"]?></p>
            <h2 class="preco"></h2>
            <img src="../img/<?php echo $lanche["imagem"]; ?>" alt="" class="imgproduto" style="width: 100px; height: 100px">
            <p class="descricao"><?php echo $lanche["descricao"];?></p>
            <div class="valores">
                <p class="total">R$ <span class="valortotal">0.00</span></p>
                <button id="adicionar" class="adcionar">-</button>
                <button id="remover" class="remover">+</button><br>
                <button class="comprar" id="comprar" onclick="openCartSidebar()">Comprar</button>
            </div>
        </div>
    </div>

<!-- Barra lateral do carrinho -->
<div id="cart-sidebar" class="cart-sidebar">
    <div class="cart-sidebar-content">
        <button class="close-btn" onclick="closeCartSidebar()">&times;</button>
        <h2>Conteúdo da Barra Lateral do Carrinho</h2>
        <p>Seu conteúdo vai aqui.</p>
        <button id="pedidofinal">FAZER PEDIDO</button>
        <p class="totalcart">R$ <span class="cartvalue">0.00</span></p>
    </div>
</div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../js/cardapio.js"></script>
</body>

</html>