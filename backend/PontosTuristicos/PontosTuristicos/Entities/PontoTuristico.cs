using System.Globalization;

namespace PontosTuristicos.Entities;

public class PontoTuristico : Entity
{
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public string Localizacao { get; set; }
    public string Cidade { get; set; }
    public string Estado { get; set; }


    public PontoTuristico(string nome, string descricao, string localizacao, string cidade, string estado)
    {
        Nome = nome;
        Descricao = descricao;
        Localizacao = localizacao;
        Cidade = cidade;
        Estado = estado;

        //Regra para evitar mais de 100 caracteres dentro de descricao
        if (descricao.Length > 100) 
        {
            throw new ArgumentException("A descrição não pode conter mais do que 100 caracteres!");
        }


    }
}
