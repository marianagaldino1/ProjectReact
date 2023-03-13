using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectReact.Model
{
    [Table("Produto")]

    public class Product
    {

        [Column("Id")]
        public int Id { get; set; }

        [Column("Description")]

        public string Description { get; set; }
    }
}
