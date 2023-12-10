<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto']; // Corrigido o nome do campo do formulário para 'assunto'
    $mensagem = $_POST['mensagem']; // Corrigido o nome do campo do formulário para 'mensagem'

    $to = "monacha.leo@gmail.com"; // Substitua pelo seu endereço de e-mail
    $subject = "Nova Sugestão: $assunto";
    $message = "Nome: $nome\nEmail: $email\nAssunto: $assunto\nMensagem: $mensagem";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Sua sugestão foi enviada com sucesso!";
    } else {
        echo "Desculpe, houve um problema no envio da sugestão.";
    }
}
?>
