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
        public ActionResult GetCS1()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS2()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS3()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS4()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS5()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS6()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS7()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS8()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult GetCS9()
        {
            string message = "hello world";
            return new JsonResult { Data = message, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult Resume()
        {
            ViewBag.Message = "Philip Weiser - Resume";

            return View();
        }
    }
}