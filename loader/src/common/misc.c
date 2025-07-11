int parse_int(const char *str) {
  int val = 0;

  char *c = (char *)str;
  while (*c) {
    if (*c > '9' || *c < '0')
      return -1;

    val = val * 10 + *c - '0';
    c++;
  }

  return val;
}
