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

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]

    public IActionResult GetAll([FromQuery] int pagina = 1, [FromQuery] string? termo = null)
    {
        var query = _context.PontosTuristicos.AsQueryable();

        if (!string.IsNullOrWhiteSpace(termo))
        {
            query = query.Where(p => p.Nome.Contains(termo) || p.Localizacao.Contains(termo) || p.Descricao.Contains(termo));

            

        }
        query = query.OrderByDescending(p => p.DataInclusao);

        /*
         .Skip -> fica responsavel por pular pagina ja lida , fazer a paginação
         .Take -> fica responsavel por pegar sempre o proximos 10
         */
        var lista = query.Skip((pagina - 1 ) * 10).Take(10).ToList();

        return Ok(lista);
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(typeof(PontoTuristico), StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]

    public IActionResult Delete([FromRoute] Guid id)
    {
        var pontoTuristico = _context.PontosTuristicos.FirstOrDefault(x => x.Id == id);

        if (pontoTuristico == null)
        {
            return NotFound();
        }

        _context.Remove(pontoTuristico);

        _context.SaveChanges();

        return NoContent();
    }
}
