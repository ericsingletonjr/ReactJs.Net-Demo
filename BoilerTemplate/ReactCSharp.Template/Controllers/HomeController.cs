using Microsoft.AspNetCore.Mvc;

namespace ReactCSharp.Template
{
	public class HomeController : Controller
	{
		public IActionResult Index() => View();		
	}
}
