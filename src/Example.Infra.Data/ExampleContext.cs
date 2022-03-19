using Example.Domain.CidadeAggregate;
using Example.Domain.PessoaAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Extensions.Configuration;

namespace Example.Infra.Data
{
    /// <summary>
    /// Referência de artigo para conseguir criar modelos de configuração
    /// https://docs.microsoft.com/pt-br/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implementation-entity-framework-core
    /// Rererência de artigo para conseguir criar migration a partir de dominios
    /// https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/managing?tabs=dotnet-core-cli
    /// </summary>
    public class ExampleContext : DbContext
    {
        public DbSet<Domain.CidadeAggregate.Cidade> Cidade { get; set; }
        public DbSet<Domain.PessoaAggregate.Pessoa> Pessoa{ get; set; }
        public ExampleContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CidadeEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new PessoaEntityTypeConfiguration());
            modelBuilder.Entity<Cidade>();
            modelBuilder.Entity<Pessoa>();

        }
    }

    public class CidadeEntityTypeConfiguration : IEntityTypeConfiguration<Domain.CidadeAggregate.Cidade>
    {
        public void Configure(EntityTypeBuilder<Domain.CidadeAggregate.Cidade> orderConfiguration)
        {
            orderConfiguration.ToTable("Cidade", "dbo");
            orderConfiguration.HasKey(o => o.Id);
            orderConfiguration.Property(o => o.Id).UseIdentityColumn();
            orderConfiguration.Property(o => o.Nome).HasColumnType("varchar(200)").IsRequired();
            orderConfiguration.Property(o => o.Uf).HasColumnName("UF").HasColumnType("varchar(2)").IsRequired();
        }
    }

    public class PessoaEntityTypeConfiguration : IEntityTypeConfiguration<Domain.PessoaAggregate.Pessoa>
    {
        public void Configure(EntityTypeBuilder<Domain.PessoaAggregate.Pessoa> orderConfiguration)
        {
            orderConfiguration.ToTable("Pessoa", "dbo");
            orderConfiguration.HasKey(o => o.Id);
            orderConfiguration.Property(o => o.Id).UseIdentityColumn();
            orderConfiguration.Property(o => o.Nome).HasColumnType("varchar(300)").IsRequired();
            orderConfiguration.Property(o => o.Cpf).HasColumnName("CPF").HasColumnType("varchar(11)").IsRequired();
            orderConfiguration.Property(o => o.Idade).IsRequired();
            orderConfiguration.HasOne<Cidade>(o => o.Cidade).WithMany().HasForeignKey(p => p.Id_Cidade).IsRequired();
        }
    }
}
