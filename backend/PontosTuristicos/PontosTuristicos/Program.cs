using Microsoft.EntityFrameworkCore;
using PontosTuristicos.Data;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<PontoTuristicoDb>(opts => opts.UseSqlServer(connectionString));

builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

var nomeDoProjeto = app.Configuration.GetValue<string>("NomeDoProjeto");
var dataDeInicio = app.Configuration.GetValue<string>("DataDeInicio");


Console.WriteLine($"Nome do Projeto: {nomeDoProjeto}");
Console.WriteLine($"Data de inicio: {dataDeInicio}");

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    options.RoutePrefix = "swagger";
});
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
