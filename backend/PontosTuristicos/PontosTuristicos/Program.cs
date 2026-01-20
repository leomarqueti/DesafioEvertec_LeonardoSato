var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddSwaggerGen();

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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
