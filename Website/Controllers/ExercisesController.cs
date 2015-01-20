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
        public ActionResult MaxOfThree(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }
        public ActionResult SumMult(SumMultPost numberList)
        {
            return PartialView(model: Program.sumMult(numberList.numbers));
        }
        public ActionResult Factorial(FactorialPost number)
        {
            return PartialView(model: Program.factorial(number.number));
        }
        //public ActionResult Palindrome(PalindromePost number)
        //{
        //    return PartialView(model: Program.palindrome(str.str));
        //}
        public ActionResult FizzBuzz(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }
        public ActionResult LongestWord(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }
        public ActionResult FilterLong(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }
        public ActionResult WordFreq(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }
        public ActionResult CountAlice(MaxPost numberList)
        {
            return PartialView(model: Program.maxOfThree(numberList.numbers));
        }

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