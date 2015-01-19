using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Website.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Portfolio()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public string GetCS1(string str)
        {
            str = "lol";
            return str;
        }

        public ActionResult Resume()
        {
            ViewBag.Message = "Philip Weiser - Resume";

            return View();
        }
    }
}