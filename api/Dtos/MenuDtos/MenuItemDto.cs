namespace api.Dtos.MenuDtos
{
    public class MenuItemDto
    {
        public string Text { get; set; }
        public List<SubmenuDto> Submenu { get; set; }
        public bool IsActive { get; set; } = true;
    }

}