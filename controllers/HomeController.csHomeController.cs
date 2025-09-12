using Microsoft.AspNetCore.Mvc;

namespace BundlerApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Title = "ASP.NET Core Bundler";
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About";
            ViewBag.Message = "Your bundling and minification application description page.";
            return View();
        }

        public IActionResult Contact()
        {
            ViewBag.Title = "Contact";
            ViewBag.Message = "Your contact page.";
            return View();
        }
    }
}
