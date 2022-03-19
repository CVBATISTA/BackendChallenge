namespace Example.Domain.CidadeAggregate
{
    public class CidadeExceptions : ArgumentException
    {
        public CidadeExceptions() : base("UF must have 2 characters.")
        {
        }
    }
}
