namespace api.Dtos.MenuDtos
{
    public class SubmenuDto
    {
        public string Text { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; } = true;
    }
}