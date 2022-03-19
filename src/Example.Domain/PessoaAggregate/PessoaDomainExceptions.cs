namespace Example.Domain.PessoaAggregate
{
    public class PessoaExceptions
    {
        public PessoaExceptions()
        {
        }

        public ArgumentException CpfException()
        {
            return new ArgumentException("CPF inválido.");
        }

        public ArgumentException IdadeException()
        {
            return new ArgumentException("Idade inválida.");
        }

        public ArgumentException IdCidadeException()
        {
            return new ArgumentException("Id_Cidade inválido.");
        }

        public ArgumentException NomeException()
        {
            return new ArgumentException("Nome inválido.");
        }
    }
}
