<?php
// Conectar ao servidor MySQL (usando XAMPP)
$servername = "localhost";
$username = "root"; // Por padrão, o nome de usuário é "root" no XAMPP
$password = "";
$database = "DB_GeV";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $database);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Consultar dados na tabela e armazenar em um array associativo
$sql = "SELECT id, nome, preco, imagem, descricao FROM lanche";
$result = $conn->query($sql);

// Inicializar um array para armazenar os lanches
$lanches = [];

// Verificar se há resultados e armazenar os dados no array associativo
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $lanches[$row["id"]] = [
            "nome" => $row["nome"],
            "preco" => $row["preco"],
            "imagem" => $row["imagem"],
            "descricao"=> $row["descricao"]
        ];
    }
} 
?>
