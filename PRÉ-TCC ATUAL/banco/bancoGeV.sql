-- Criação do banco de dados
DROP DATABASE IF EXISTS DB_GeV;
CREATE DATABASE DB_GeV;

-- Seleção do banco de dados
USE DB_GeV;

-- Criação da tabela lanche com a coluna descricao
CREATE TABLE lanche (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    descricao TEXT
);

-- Criação da tabela usuarios com a coluna pagina_permitida
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL
);

CREATE TABLE informacoes_pedido (
    idpedido INT AUTO_INCREMENT PRIMARY KEY,
    nomepedido VARCHAR(255) NOT NULL,
    cpfpedido VARCHAR(14) NOT NULL,
    rmpedido VARCHAR(4) NOT NULL
);


-- Inserção de lanches na tabela com descrição
INSERT INTO lanche (nome, preco, imagem, descricao) VALUES ('x-bacon', 10.00, 'xbacon.png', 'Delicioso sanduíche de bacon com queijo e salada.');
INSERT INTO lanche (nome, preco, imagem, descricao) VALUES ('x-salada', 7.00, 'xsalada.png', 'Clássico hambúrguer com carne, Salada, Maionese.');
INSERT INTO lanche (nome, preco, imagem, descricao) VALUES ('x-burger', 7.00, 'xburguer.png', 'Clássico hambúrguer com carne, queijo, alface, tomate e maionese.');
INSERT INTO lanche (nome, preco, imagem, descricao) VALUES ('Café', 2.00, 'Cafe.png', 'Hmm cafezinho');

