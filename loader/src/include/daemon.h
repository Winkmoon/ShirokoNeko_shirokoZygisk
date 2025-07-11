#ifndef DAEMON_H
#define DAEMON_H

#ifdef __cplusplus
extern "C" {
#endif /* __cplusplus */

#include <stdbool.h>

#include <unistd.h>

#ifdef __LP64__
  #define LP_SELECT(lp32, lp64) lp64
#else
  #define LP_SELECT(lp32, lp64) lp32
#endif

#define SOCKET_FILE_NAME LP_SELECT("cp32", "cp64") ".sock"

enum shirokozygiskd_actions {
  PingHeartbeat,
  GetProcessFlags,
  GetInfo,
  ReadModules,
  RequestCompanionSocket,
  GetModuleDir,
  ZygoteRestart,
  SystemServerStarted,
  UpdateMountNamespace
};

struct zygisk_modules {
  char **modules;
  size_t modules_count;
};

enum root_impl {
  ROOT_IMPL_NONE,
  ROOT_IMPL_APATCH,
  ROOT_IMPL_KERNELSU,
  ROOT_IMPL_MAGISK
};

struct shirokozygisk_info {
  struct zygisk_modules *modules;
  enum root_impl root_impl;
  pid_t pid;
  bool running;
};

enum mount_namespace_state {
  Clean,
  Mounted
};

#define TMP_PATH "/data/adb/shirokozygisk"

static inline const char *shirokozygiskd_get_path() {
  return TMP_PATH;
}

int shirokozygiskd_connect(uint8_t retry);

bool shirokozygiskd_ping();

uint32_t shirokozygiskd_get_process_flags(uid_t uid, const char *const process);

void shirokozygiskd_get_info(struct shirokozygisk_info *info);

void free_shirokozygisk_info(struct shirokozygisk_info *info);

bool shirokozygiskd_read_modules(struct zygisk_modules *modules);

void free_modules(struct zygisk_modules *modules);

int shirokozygiskd_connect_companion(size_t index);

int shirokozygiskd_get_module_dir(size_t index);

void shirokozygiskd_zygote_restart();

void shirokozygiskd_system_server_started();

bool shirokozygiskd_update_mns(enum mount_namespace_state nms_state, char *buf, size_t buf_size);

#ifdef __cplusplus
}
#endif /* __cplusplus */

#endif /* DAEMON_H */