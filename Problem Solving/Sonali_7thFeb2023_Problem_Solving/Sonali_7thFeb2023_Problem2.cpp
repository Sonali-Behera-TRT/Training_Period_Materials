#include <bits/stdc++.h>
using namespace std;

int main()
{
    string input;
    cin >> input;

    bool num = 0, upperChar = 0, lowerChar = 0, specChar = 0, strong = 0;
    int len = 0;

    for (int i = 0; i < input.size(); i++)
    {
        if (num == 1 && upperChar == 1 && lowerChar == 1 && specChar == 1 && len >= 6)
        {
            strong = 1;
            break;
        }
        else
        {
            if (input[i] >= '0' && input[i] <= '9')
                num = 1;
            else if (input[i] >= 'a' && input[i] <= 'z')
                lowerChar = 1;
            else if (input[i] >= 'A' && input[i] <= 'Z')
                upperChar = 1;
            else
            {
                switch (input[i])
                {
                case '!':
                case '@':
                case '#':
                case '$':
                case '%':
                case '^':
                case '&':
                case '*':
                case '(':
                case ')':
                case '-':
                case '+':
                    specChar = 1;
                    break;
                }
            }
        }
        len++;
    }

    if (strong)
    {
        cout << "0" << endl;
        return 0;
    }

    int ans = 0;
    if (!num)
        ans++;
    if (!lowerChar)
        ans++;
    if (!upperChar)
        ans++;
    if (!specChar)
        ans++;
    if ((len + ans) < 6)
        ans += (6 - (len + ans));

    cout << ans << endl;
    return 0;
}