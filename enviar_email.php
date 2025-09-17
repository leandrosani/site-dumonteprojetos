<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    $para = "elipecas.contato@gmail.com";
    $assunto = "Novo contato do site";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";
    
    $headers = "From: $email\r\n"; // Cabeçalho do e-mail
    
    // Tenta enviar o e-mail
    if (mail($para, $assunto, $corpo_email, $headers)) {
        // E-mail enviado com sucesso
        header("Location: sucesso.html"); // Redireciona para página de sucesso
        exit();
    } else {
        // Erro ao enviar o e-mail
        header("Location: erro.html"); // Redireciona para página de erro
        exit();
    }
}
?>