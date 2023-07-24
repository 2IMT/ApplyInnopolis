using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApplyInnopolisAPI.Migrations
{
    /// <inheritdoc />
    public partial class UserModelPasswordHashSaltMethod : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHashSalt",
                table: "Users",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHashSalt",
                table: "Users");
        }
    }
}
