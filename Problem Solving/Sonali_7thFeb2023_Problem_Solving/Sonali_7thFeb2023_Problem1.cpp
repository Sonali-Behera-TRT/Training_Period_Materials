#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, temp;
    cin >> n;

    vector<int> v;
    for (int i = 0; i < n; i++)
    {
        cin >> temp;
        v.push_back(temp);
    }

    sort(v.begin(), v.end());

    int minDiff = INT_MAX;
    for (int i = 1; i < n; i++)
    {
        minDiff = min(minDiff, abs(v[i] - v[i - 1]));
    }

    cout << "Minimum difference is: " << minDiff << endl;
    return 0;
}