using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IHubContext<NotificationHub> _hub;

        public OrderController(IHubContext<NotificationHub> hub)
        {
            _hub = hub;
        }

        [HttpPost]
        [Route("PlaceOrder")]
        public async Task<IActionResult> OrderNotification()
        {
            await _hub.Clients.All.SendAsync("OrderStatus", "Cofee");
            return Ok("Success");
        }
    }
}
