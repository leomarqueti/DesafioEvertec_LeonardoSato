using Microsoft.AspNetCore.Mvc;
using PontosTuristicos.Communication.Request;
using PontosTuristicos.Entities;
using PontosTuristicos.Data;

namespace PontosTuristicos.Controllers;

[Route("api/[controller]")]  
public class PontoTuristicoController : ControllerBase
{

    private readonly PontoTuristicoDb _context;

    public PontoTuristicoController(PontoTuristicoDb context)
    {
        _context = context;
    }

    [HttpPost]
    [ProducesResponseType(typeof(PontoTuristico), StatusCodes.Status201Created)]
    public IActionResult Created([FromBody] RequestCreatedPontoTuristicoJson request)
    {
        var pontoTuristico = new PontoTuristico(
            request.Nome,
            request.Descricao,
            request.Localizacao,
            request.Cidade,
            request.Estado
            );

        _context.Add(pontoTuristico);

        _context.SaveChanges();

        return Created(string.Empty, pontoTuristico);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(PontoTuristico), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)] 

    public IActionResult GetId([FromRoute] Guid id)
    {
        var pontoTuristico = _context.PontosTuristicos.FirstOrDefault(x => x.Id == id);

        if (pontoTuristico == null) { 
            return NotFound();
        }

        return Ok(pontoTuristico);
    }
   
}
