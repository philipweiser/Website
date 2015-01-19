using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Website.Controllers
{
    public class CodePost
    {
        public string Prefix { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }

        public CodePost()
        {
            Prefix = "public static";
        }
    }
}
