global using Microsoft.EntityFrameworkCore;

namespace Woofer
{
    public class DataContext : DbContext
    {
       public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<DogInfo> Dogs { get; set; }
    }
}
