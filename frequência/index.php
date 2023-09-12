<?php

// Verifica se os dados foram enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $matrícula = $_POST['matrícula'];
    $data = $_POST['data'];

    // Insere os dados na planilha
    $fp = fopen('planilha.xlsx', 'a');
    fputcsv($fp, [$nome, $matrícula, $data]);
    fclose($fp);

    // Exibe uma mensagem de sucesso
    echo "Dados inseridos com sucesso!";
}

?>
