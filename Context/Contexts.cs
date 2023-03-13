using Microsoft.EntityFrameworkCore;
using ProjectReact.Model;

namespace ProjectReact.Context
{
    public class Contexts : DbContext
    {

        public Contexts(DbContextOptions<Contexts> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Product> Products { get; set; }
    }
}
