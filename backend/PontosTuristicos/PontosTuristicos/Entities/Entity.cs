namespace PontosTuristicos.Entities;

public abstract class Entity
{
    Guid Id { get; set; }
    DateTime DataInclusao { get; set; }

    public Entity()
    {
        Id = Guid.NewGuid();
        DataInclusao = DateTime.Now;
    }
}
