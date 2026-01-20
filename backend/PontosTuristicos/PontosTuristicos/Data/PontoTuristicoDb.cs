using Microsoft.EntityFrameworkCore;
using PontosTuristicos.Entities;

namespace PontosTuristicos.Data;

public class PontoTuristicoDb : DbContext
{

    public PontoTuristicoDb(DbContextOptions<PontoTuristicoDb> options) : base(options)
    {
    }

    public DbSet<PontoTuristico> PontosTuristicos { get; set; }
}
