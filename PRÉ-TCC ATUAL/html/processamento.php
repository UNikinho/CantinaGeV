<?php
// Recebe os dados enviados pelo cliente (JavaScript)
$data = json_encode(file_get_contents("php://input"));
include("../conexao.php");



// Verifica se os dados foram recebidos corretamente
if (isset($data->nomepedido) && isset($data->cpfpedido) && isset($data->rmpedido) && isset($data->carrinho)) {
    $nomepedido = $data->nomepedido;
    $cpfpedido = $data->cpfpedido;
    $rmpedido = $data->rmpedido;
    $carrinho = $data->carrinho;

    // Insira os dados na tabela informacoes_pedido
    $query = "INSERT INTO informacoes_pedido (nomepedido, cpfpedido, rmpedido) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $nomepedido, $cpfpedido, $rmpedido);

    if ($stmt->execute()) {
        // Recupera o ID do último pedido inserido
        $lastInsertId = $stmt->insert_id;

        // Insira os itens do carrinho na tabela relacionada
        foreach ($carrinho as $precoItem) {
            $queryItem = "INSERT INTO itens_pedido (id_pedido, preco) VALUES (?, ?)";
            $stmtItem = $conn->prepare($queryItem);
            $stmtItem->bind_param("id", $lastInsertId, $precoItem);
            $stmtItem->execute();
            $stmtItem->close();
        }

        echo json_encode(["success" => true, "message" => "Pedido finalizado com sucesso!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao inserir dados do pedido: " . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Parâmetros ausentes ou inválidos."]);
}
?>
