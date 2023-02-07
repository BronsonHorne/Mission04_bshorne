using Microsoft.AspNetCore.Mvc;
using Mission04_bshorne.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_bshorne.controllers
{
    public class m5Controller : Controller
    {
        public IActionResult Index ()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalc ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
