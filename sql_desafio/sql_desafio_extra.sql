--Criar uma view para consultar os registros contidos na tabela CIDADES

CREATE VIEW vw_registroCidades
AS
SELECT 
	IdCidade,
	Nome,
	Uf
FROM Cidades;


