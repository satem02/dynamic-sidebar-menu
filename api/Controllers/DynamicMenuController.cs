using api.Dtos;
using api.Dtos.MenuDtos;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DynamicMenuController : ControllerBase
    {

        private readonly ILogger<DynamicMenuController> _logger;
        private readonly IMenuService _menuService;

        public DynamicMenuController(ILogger<DynamicMenuController> logger, IMenuService menuService)
        {
            _logger = logger;
            _menuService = menuService;
        }

        [HttpGet]
        public async Task<PagedResultDto<MenuItemDto>> Get([FromQuery]GetMenuItemDto request)
        {
            return await _menuService.Get(request);
        }
    }
}