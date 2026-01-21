--Criar um comando SELECT que retorne APENAS o nome dos clientes da cidade "TUPA". Utilizar o EXISTS para realizar a condição.

SELECT 
	CL.Nome
FROM Clientes CL
WHERE EXISTS (
	SELECT 1
	FROM Cidades CI
	WHERE CI.NOME = 'Tupa' AND CI.IdCidade = CL.IdCidade
);

-- Criar um comando SELECT que retorne o nome do cliente e o nome da cidade de todos os registros.

SELECT 
	CL.Nome,
	CI.Nome
FROM Clientes CL
INNER JOIN Cidades CI
ON CL.IdCidade = CI.IdCidade;

-- Criar um comando SELECT que retorne TODOS os nomes e os códigos dos clientes ordenados por nome do cliente

SELECT 
	Nome,
	Codigo
FROM Clientes
ORDER BY Nome;

-- Criar um comando DELETE que exclua clientes com código do cliente entre a numeração 100 e 200. 

DELETE FROM Clientes WHERE Codigo BETWEEN 100 AND 200;

--Criar um comando UPDATE que altere o estado de todas as cidades para o estado “SP” quando estiverem com estado igual a “PR”. 

UPDATE Cidades
SET UF = 'SP'
WHERE UF = 'PR';

--Criar um comando INSERT na tabela de clientes de um registro qualquer com todos os campos da tabela. (valores livres) 

INSERT INTO Clientes (Codigo,Nome,IdCidade) VALUES (23,'Leonardo Sato',1);