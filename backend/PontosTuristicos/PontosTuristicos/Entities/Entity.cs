namespace PontosTuristicos.Entities;

public abstract class Entity
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public DateTime DataInclusao { get; set; } = DateTime.Now;

}
