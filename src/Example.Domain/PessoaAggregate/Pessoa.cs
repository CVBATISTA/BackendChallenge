namespace Example.Domain.PessoaAggregate
{
    public class Pessoa
    {
        protected Pessoa() { }

        private Pessoa(string nome, string cpf, int id_cidade, int idade)
        {
            Nome = nome;
            Cpf = cpf;
            Id_Cidade = id_cidade;
            Idade = idade;
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public string Cpf { get; set; }

        public int Id_Cidade { get; set; }
        public CidadeAggregate.Cidade Cidade { get; set; }

        public int Idade { get; set; }

        public static Pessoa Create(string nome, string cpf, int id_cidade, int idade)
        {
            CheckPessoa(nome, cpf, id_cidade, idade);
            return new Pessoa(nome, cpf, id_cidade, idade);
        }

        public void Update(string nome, string cpf, int id_cidade, int idade)
        {
            CheckPessoa(nome, cpf, id_cidade, idade);
            Nome = nome;
            Cpf = cpf;
            Id_Cidade = id_cidade;
            Idade = idade;
        }

        private static void CheckPessoa(string nome, string cpf, int id_cidade, int idade)
        {
            if (nome == null)
                throw new PessoaExceptions().NomeException();

            if (cpf == null || !AuxiliaryFunctions.IsCpf(cpf))
                throw new PessoaExceptions().CpfException();

            if (id_cidade <= 0)
                throw new PessoaExceptions().IdCidadeException();

            if (id_cidade <= 0)
                throw new PessoaExceptions().IdadeException();
        }
    }
}
