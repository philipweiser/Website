using ConsoleSln;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Website.Controllers
{
    public class ExercisesController : Controller
    {
        public ActionResult MaxOfThree(int[] numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList));
        }
        public ActionResult SumMult(int[] numberList)
        {
            return PartialView(model: Program.sumMult(numberList));
        }
        public ActionResult Factorial(int number)
        {
            return PartialView(model: Program.factorial(number));
        }
        public ActionResult Palindrome(string fact)
        {
            return PartialView(model: Program.palindrome(fact));
        }
        public ActionResult FizzBuzz()
        {
            return PartialView(model: Program.fizzBuzz());
        }
        [ValidateInput(false)]
        public ActionResult LongestWord()
        {
            return PartialView(model: Program.longestWord());
        }
        public ActionResult FilterLong(int length)
        {
            return PartialView(model: Program.filterLongWords(length));
        }
        public ActionResult WordFreq()
        {
            return PartialView(model: Program.wordFreq());
        }
        public ActionResult CountAlice()
        {
            return PartialView(model: Program.countAlice());
        }

        [ValidateInput(false)]
        public ActionResult GetCode(CodePost functionName)
        {
            string code;
            string codePath = Server.MapPath("~/Scripts/Program.cs");

            var codeFile = System.IO.File.OpenText(codePath);
            code = codeFile.ReadToEnd();

            code = code.Substring(code.IndexOf(functionName.Prefix + ' ' + functionName.Type + ' ' + functionName.Name));

            int numOpen = 0;
            bool functionOpened = false;
            int indexOfEnd = 0;

            for (var x = 0; x < code.Length; x++ )
            {
                if (code[x] == '{')
                {
                    if (!functionOpened)
                        functionOpened = true;

                    numOpen++;
                }
                else if (code[x] == '}')
                {
                    if(functionOpened)
                    {
                        if (numOpen == 1)
                        {
                            indexOfEnd = x;
                            break;
                        }
                        else
                            numOpen--;
                    }
                }

            }

            code = code.Substring(0, indexOfEnd+1);

            return PartialView(model: code);
        }
    }
}