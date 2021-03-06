using Example.Application.Common;
using Example.Application.CidadeService.Models.Dtos;
using Example.Application.CidadeService.Models.Request;
using Example.Application.CidadeService.Models.Response;
using Example.Infra.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Example.Application.CidadeService.Service
{
    public class CidadeService : BaseService<CidadeService>, ICidadeService
    {
        private readonly ExampleContext _db;

        public CidadeService(ILogger<CidadeService> logger, Infra.Data.ExampleContext db) : base(logger)
        {
            _db = db;
        }

        public async Task<GetAllCidadeResponse> GetAllAsync()
        {
            var entity = await _db.Cidade.ToListAsync();
            return new GetAllCidadeResponse()
            {
                Cidades = entity != null ? entity.Select(a => (CidadeDto)a).ToList() : new List<CidadeDto>()
            };
        }

        public async Task<GetByIdCidadeResponse> GetByIdAsync(int id)
        {

            var response = new GetByIdCidadeResponse();

            var entity = await _db.Cidade.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null) response.Cidade= (CidadeDto)entity;

            return response;
        }

        public async Task<CreateCidadeResponse> CreateAsync(CreateCidadeRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var newExample = Domain.CidadeAggregate.Cidade.Create(request.Nome, request.Uf);

            _db.Cidade.Add(newExample);

            await _db.SaveChangesAsync();

            return new CreateCidadeResponse() { Id = newExample.Id };
        }

        public async Task<UpdateCidadeResponse> UpdateAsync(int id, UpdateCidadeRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var entity = await _db.Cidade.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                entity.Update(request.Nome, request.Uf);
                await _db.SaveChangesAsync();
            }

            return new UpdateCidadeResponse();
        }

        public async Task<DeleteCidadeResponse> DeleteAsync(int id)
        {

            var entity = await _db.Cidade.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                _db.Remove(entity);
                await _db.SaveChangesAsync();
            }

            return new DeleteCidadeResponse();
        }
    }
}
