<?php
include("../conexao.php");

// Faça uma consulta para recuperar as informações do último pedido inserido
$query = "SELECT * FROM informacoes_pedido ORDER BY id DESC LIMIT 1";
$result = $conn->query($query);

// Verifique se a consulta foi bem-sucedida
if ($result) {
    // Recupere os dados da consulta
    $dadosPedido = $result->fetch_assoc();

    // Guarde os valores em variáveis para usar em outra página
    $idpedido = $dadosPedido['id'];
    $nomepedido = $dadosPedido['nomepedido'];
    $cpfpedido = $dadosPedido['cpfpedido'];
} else {
    // Trate o erro na consulta, se necessário
    echo "Erro na consulta do último pedido: " . $conn->error;
}

// Feche a conexão com o banco de dados
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exibir Pedido</title>
</head>
<body>
    <h1>Dados do Último Pedido:</h1>
    <p>ID do Pedido: <?php echo isset($idpedido) ? $idpedido : 'N/A'; ?></p>
    <p>Nome do Pedido: <?php echo isset($nomepedido) ? $nomepedido : 'N/A'; ?></p>
    <p>CPF do Pedido: <?php echo isset($cpfpedido) ? $cpfpedido : 'N/A'; ?></p>
</body>
</html>
