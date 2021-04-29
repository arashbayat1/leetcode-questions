// Q8 - String to Interer (atoi)
// Runtime - 0 ms - 100.00 percentile
// Memory - 5.7 MB - 38.83 percentile

int myAtoi(char * s){
  int mult = 1;
  int i = 0;
  while(s[i] == 32) {
    i++;
  }
  if(s[i] == '-') {
      mult = -1;
      i++;
  } else if (s[i] == '+') {
      i++;
  } else if (s[i] < '0' || s[i] > '9') {
      return 0;
  }
  while(s[i] == '0') {
    i++;
  }
  
  int j = 0;
  while(s[i] >= '0' && s[i] <= '9') {
    s[j] = s[i];
    i++;
    j++;
  }
  
  s[j] = '\0';
  int len = strlen(s);
  if (len > 10) {
    if(mult == 1) {
      return 2147483647;
    }
    return -2147483648;
  }
  
  j = 0;
  for(i = 0; i < len; ++i) {
    if (i == 9 && s[len-1-i] >= '2') {
      if(mult == 1 && (s[len-1-i] > '2' || j >= 147483647)) {
        return 2147483647;
      } else if(mult == -1 && (s[len-1-i] > '2' || j >= 147483648)) {
        return -2147483648;
      }
    }
    j += ((s[len - 1 - i] - '0') * pow(10,i));
  }
  return j * mult;
}