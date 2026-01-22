--Criar uma view para consultar os registros contidos na tabela CIDADES

CREATE VIEW vw_registroCidades
AS
SELECT 
	IdCidade,
	Nome,
	Uf
FROM Cidades;


--Procedure CRUD

CREATE PROCEDURE SP_CRUD_CIDADES
	@Acao int,
	@IdCidade int = NULL,
	@Nome VARCHAR(80) = NULL,
	@UF VARCHAR(30) = NULL
AS
BEGIN
	-- INSERT
	IF (@Acao = 1)
	BEGIN
		INSERT INTO Cidades (Nome,UF) VALUES ( @Nome, @UF); 
	END


	--UPDATE
	IF (@Acao = 2)
	BEGIN
		IF NOT EXISTS (SELECT 1 FROM Cidades WHERE IdCidade = @IdCidade)
		BEGIN
			THROW 50002, 'Nao encontrado CIDADE com esse ID!', 1
		END

		UPDATE Cidades
		SET
			Nome = @Nome,
			UF = @UF
		WHERE IdCidade = @IdCidade
	END

	--DELETE
	IF (@Acao = 3)
	BEGIN
		IF NOT EXISTS (SELECT 1 FROM Cidades WHERE IdCidade = @IdCidade)
		BEGIN
			THROW 50002, 'Nao encontrado CIDADE com esse ID!', 1;
		END 

		DELETE 
			Cidades
		WHERE IdCidade = @IdCidade
	END
END


