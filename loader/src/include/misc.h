#ifndef MISC_H

#ifdef __cplusplus
extern "C" {
#endif /* __cplusplus */

#define IS_ISOLATED_SERVICE(uid)      \
  ((uid) >= 90000 && (uid) < 1000000)

/*
 * Bionic's atoi runs through strtol().
 * Use our own implementation for faster conversion.
 */
int parse_int(const char *str);

#ifdef __cplusplus
}
#endif /* __cplusplus */

#endif /* MISC_H */