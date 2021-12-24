using api.Dtos;
using api.Dtos.MenuDtos;

namespace api.Services
{
    public interface IMenuService
    {
        Task<PagedResultDto<MenuItemDto>> Get(GetMenuItemDto request);
    }

    public class MenuService : IMenuService
    {
        public MenuService()
        {

        }

        public async Task<PagedResultDto<MenuItemDto>> Get(GetMenuItemDto request)
        {
            var response = GetMenuItemDtos(request);

            return new PagedResultDto<MenuItemDto>()
            {
                Items = response,
                TotalCount = response.Count
            };
        } 

        private List<MenuItemDto> GetMenuItemDtos(GetMenuItemDto request)
        {
            // Todo : Fill the DB
            var responseList =  new List<MenuItemDto>() {
                new MenuItemDto
            {
                Text ="Order",
                Submenu = new List<SubmenuDto>() {
                    new SubmenuDto() { Text = "List" , Url = "/order" } ,
                    new SubmenuDto() { Text = "Add" , Url = "/order/add" },
                    new SubmenuDto() { Text = "Update" , Url = "/order/update" }
                },
            },
            { new MenuItemDto
            {
                Text ="Order Statu",
                Submenu = new List<SubmenuDto>() {
                    new SubmenuDto() { Text = "List" , Url = "/order-statu" } ,
                    new SubmenuDto() { Text = "Add" , Url = "/order-statu/add" , IsActive = false },
                    new SubmenuDto() { Text = "Update" , Url = "/order-statu/update" , IsActive = false }
                },
            }
            } };

            // Filter 
            if (request.IsActive.HasValue)
            {
                responseList = responseList.Where(x => x.IsActive == request.IsActive).ToList().Select(x =>
                  new MenuItemDto()
                  {
                      IsActive = x.IsActive,
                      Submenu = x.Submenu.Where(x => x.IsActive == request.IsActive).ToList(),
                      Text = x.Text
                  }).ToList();
            }

            return responseList;
        }
    }
}
