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
    public class Program
    {
        [WebMethod]
        public static void Main(string[] args)
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
        public static int? maxOfThree(int[] numbers)
        {
            int? max = null;
            foreach (var number in numbers)
            {
                if (max == null)
                    max = number;
                else if (max.Value < number)
                    max = number;
            }
            return max.Value;
        }
        [WebMethod]
        public static int[] sumMult(int[] numbers)
        {
            int theSum = 0;
            foreach (int i in numbers)
                theSum += i;

            int answer = 1;
            foreach (int i in numbers)
                answer *= i;
            return new int[2]{theSum, answer};
        }
        [WebMethod]
        public static int factorial(int number)
        {
            int answer = 1;
            for (int i = number; i > 0; i--)
            {
                answer *= i;
            }
            return answer;
        }
        [WebMethod]
        public static bool palindrome(string foo)
        {
            for (int i = 0; i < foo.Length-1; i++)
            {
                if (foo[i] != foo[foo.Length - i - 1])
                {
                    return false;
                }
            }
                return true;
        }
        [WebMethod]
        public static string[] fizzBuzz()
        {
            string[] answer = new string[100];
            for (int i = 1; i <= 100; i++)
            {
                if (i % 5 == 0 && i % 3 == 0)
                {
                    answer[i-1] = "FizzBuzz";
                }
                else if (i % 5 == 0)
                {
                    answer[i-1] = "Buzz";
                }
                else if (i % 3 == 0)
                {
                    answer[i-1] = "Fizz";
                }
                else
                {
                    answer[i-1] = i+"";
                }
            }
            return answer;
        }
        [WebMethod]
        public static string longestWord()
        {
            string [] tokens;
            string answer = "";
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            tokens = line.Split(new char[] {' ', ',', '-', '"', '?', '.', '\n'});
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
        [WebMethod]
        public static List<string> filterLongWords(int length)
        {
            string[] tokens;
            List<string> answer = new List<string>();
            string line = System.IO.File.ReadAllText("C:/Users/Phil/Documents/GitHub/C-Sharp-Problems/ConsoleSln/ConsoleSln/res/AliceChap1.txt");
            tokens = line.Split(new char[] { ' ', ',', '-', '"', '?', '.' ,'!', ')', '(', '\'', ':', ';', '\n'});
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
        [WebMethod]
        public static List<KeyValuePair<string, int>> wordFreq() {
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
        [WebMethod]
        public static int countAlice()
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