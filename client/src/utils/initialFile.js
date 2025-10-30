import { v4 as uuidv4 } from "uuid"

const initialCode = `#include <bits/stdc++.h>
using namespace std;
#define int long long


void shaShank(){
  cout<<"Hello world"<<endl;
}


int32_t main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  int t=1;
  // cin >> t;
  while (t--) shaShank();
  return 0;
}`

const initialFile = {
    id: uuidv4(),
    name: "Practive.cpp",
    content: initialCode,
}

export default initialFile
