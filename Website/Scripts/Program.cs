using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
namespace ConsoleSln
{
    class Program
    {
        [WebMethod]
        static void Main(string[] args)
        {
            int count = 0;
            foreach (KeyValuePair<string, int> foo in wordFreq())
             {
                 if (foo.Value == count)
                 {
                     Console.Write(", {0}", foo.Key);
                 }
                 else if (foo.Value > count)
                 {
                     count = foo.Value;
                 }
                 else
                 {
                     Console.Write("\n\nCount = {0}: {1}", foo.Value, foo.Key);
                     count = foo.Value;
                 }
             }            
            Console.ReadKey();
        }
        [WebMethod]
        static int maxOfThree(int a, int b, int c)
        {
            return Math.Max(Math.Max(a, b), c);
        }
        [WebMethod]
        static int sum(int[] toSum)
        {
            int theSum = 0;
            foreach (int i in toSum)
                theSum += i;
            return theSum;
        }
        static int multiply(int[] toMult)
        {
            int answer = 1;
            foreach (int i in toMult)
                answer *= i;
            return answer;
        }
        static int factorial(int num)
        {
            int answer = 1;
            for (int i = num; i > 0; i--)
            {
                answer *= i;
            }
            return answer;
        }
        static bool palindrome(string foo)
        {
            for (int i = 0; i < foo.Length/2-1; i++)
            {
                if (foo[i] != foo[foo.Length - i - 1])
                {
                    return false;
                }
            }
                return true;
        }
        static string fizzBuzz()
        {
            string answer = "";
            for (int i = 1; i <= 100; i++)
            {
                if (i % 5 == 0 && i % 3 == 0)
                {
                    answer += "FizzBuzz\n";
                }
                else if (i % 5 == 0)
                {
                    answer += "Buzz\n";
                }
                else if (i % 3 == 0)
                {
                    answer += "Fizz\n";
                }
                else
                {
                    answer += i + "\n";
                }
            }
            return answer;
        }
        static string longestWord()
        {
            string [] tokens;
            string answer = "";
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            tokens = line.Split(new char[] {' ', ',', '-', '"', '?', '.'});
            foreach (string foo in tokens)
            {
                string temp = foo.Trim('\'');
                if (temp.Length > answer.Length)
                {
                    answer = String.Copy(temp);
                }
            }
            return answer;
        }
        static List<string> filterLongWords(int length)
        {
            string[] tokens;
            List<string> answer = new List<string>();
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            tokens = line.Split(new char[] { ' ', ',', '-', '"', '?', '.' ,'!', ')', '(', '\'', ':', ';'});
            foreach (string foo in tokens)
            {
                string temp = foo.Trim('\'');
                if (temp.Length >= length)
                {
                    answer.Add(String.Copy(temp));
                }
            }
            
            return answer;
        }
        static List<KeyValuePair<string, int>> wordFreq() {
            //open file, tokenize, if token is unique, create a new key-value pair, set value to 1, else incremement value
            string[] tokens;
            Dictionary<string, int> answer = new Dictionary<string,int>();
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            string extra ="";
            extra = line.Replace(" \'", " ");
            extra = extra.Replace("\' ", " ");
            tokens = line.Split(new char[] { ' ', ',', '-', '"', '?', '.', '!', ')', '(', ':', ';', '\n'});
            foreach (string foo in tokens)
            {
                string temp = foo.Trim('\'');
                if (temp.Length > 0)
                {
                    if (answer.ContainsKey(temp))
                    {
                        answer[temp]++;
                    }
                    else
                    {
                        answer.Add(temp, 1);
                    }
                }

            }
            List<KeyValuePair<string, int>> myList = answer.ToList();

            myList.Sort((firstPair, nextPair) =>
            {
                return firstPair.Value.CompareTo(nextPair.Value);
            });
            myList.Reverse(0, myList.Count);
            return myList;
        }
        static int countAlice()
        {
            int answer = 0;
            string[] tokens;
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            tokens = line.Split(new char[] { ' ', ',', '-', '"', '?', '.', '!', ')', '(', ':', ';', '\n' });
            foreach (string foo in tokens)
            {
                if (foo.ToLower() == "alice")
                {
                    answer++;
                }
            }
            return answer;
        }
    }
}