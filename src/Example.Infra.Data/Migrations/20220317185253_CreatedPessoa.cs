using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Example.Infra.Data.Migrations
{
    public partial class CreatedPessoa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Uf",
                schema: "dbo",
                table: "Cidade",
                newName: "UF");

            migrationBuilder.CreateTable(
                name: "Pessoa",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "varchar(300)", nullable: false),
                    CPF = table.Column<string>(type: "varchar(11)", nullable: false),
                    Id_Cidade = table.Column<int>(type: "int", nullable: false),
                    Idade = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pessoa", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pessoa_Cidade_Id_Cidade",
                        column: x => x.Id_Cidade,
                        principalSchema: "dbo",
                        principalTable: "Cidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pessoa_Id_Cidade",
                schema: "dbo",
                table: "Pessoa",
                column: "Id_Cidade");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pessoa",
                schema: "dbo");

            migrationBuilder.RenameColumn(
                name: "UF",
                schema: "dbo",
                table: "Cidade",
                newName: "Uf");
        }
    }
}
