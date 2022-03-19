namespace Example.Domain.CidadeAggregate
{
    public sealed class Cidade
    {
        private Cidade(string nome, string uf)
        {
            Nome = nome;
            Uf = uf;
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public string Uf { get; set; }

        public static Cidade Create(string nome, string uf)
        {
            if (nome == null)
                throw new ArgumentException("Invalid " + nameof(nome));

            if (uf == null || uf.Length != 2)
                throw new ArgumentException("Invalid " + nameof(uf));


            return new Cidade(nome, uf);
        }

        public void Update(string nome, string uf)
        {
            if (nome != null)
                Nome = nome;

            if (uf.Length != 2)
                throw new CidadeExceptions();

            if (uf != null)
                Uf = uf;
        }
    }
}
