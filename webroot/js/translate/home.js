export function translateHomePage(old_translations, new_translations) {
  /* INFO: Translate variables */
  const shirokozygisk_state = document.getElementById('shirokozygisk_state')
  const zygote32_status_div = document.getElementById('zygote32_status')
  const zygote64_status_div = document.getElementById('zygote64_status')

  switch (shirokozygisk_state.innerHTML.replace(/(\r\n|\n|\r)/gm, '').trim()) {
    case old_translations.page.home.status.ok: {
      shirokozygisk_state.innerHTML = new_translations.page.home.status.ok

      break
    }
    case old_translations.page.home.status.partially: {
      shirokozygisk_state.innerHTML = new_translations.page.home.status.partially

      break
    }
    case old_translations.page.home.status.notWorking: {
      shirokozygisk_state.innerHTML = new_translations.page.home.status.notWorking

      break
    }
    case old_translations.page.home.status.unknown: {
      shirokozygisk_state.innerHTML = new_translations.global.unknown

      break
    }
  }

  if (zygote32_status_div) {
    switch (zygote32_status_div.innerHTML.replace(/(\r\n|\n|\r)/gm, '').trim()) {
      case old_translations.page.home.info.zygote.injected: {
        zygote32_status_div.innerHTML = new_translations.page.home.info.zygote.injected

        break
      }
      case old_translations.page.home.info.zygote.notInjected: {
        zygote32_status_div.innerHTML = new_translations.page.home.info.zygote.notInjected

        break
      }
      case old_translations.page.home.info.zygote.unknown: {
        zygote32_status_div.innerHTML = new_translations.global.unknown

        break
      }
    }
  }

  if (zygote64_status_div) {
    switch (zygote64_status_div.innerHTML.replace(/(\r\n|\n|\r)/gm, '').trim()) {
      case old_translations.page.home.info.zygote.injected: {
        zygote64_status_div.innerHTML = new_translations.page.home.info.zygote.injected

        break
      }
      case old_translations.page.home.info.zygote.notInjected: {
        zygote64_status_div.innerHTML = new_translations.page.home.info.zygote.notInjected

        break
      }
      case old_translations.page.home.info.zygote.unknown: {
        zygote64_status_div.innerHTML = new_translations.global.unknown

        break
      }
    }
  }

  const android_version_div = document.getElementById('android_version_div')
  if (android_version_div.innerHTML === old_translations.global.unknown) 
    android_version_div.innerHTML = new_translations.global.unknown

  const kernel_version_div = document.getElementById('kernel_version_div')
  if (kernel_version_div.innerHTML === old_translations.global.unknown) 
    kernel_version_div.innerHTML = new_translations.global.unknown

  /* INFO: info card */
  document.getElementById('version_info_title').innerHTML = new_translations.page.home.info.version
  document.getElementById('root_info_title').innerHTML = new_translations.page.home.info.root

  // const version_code = document.getElementById('version_code')
  // const root_impl = document.getElementById('root_impl')

  // if (version_code.innerHTML.replace(/(\r\n|\n|\r)/gm, '').trim() === old_translations.global.unknown)
  //   version_code.innerHTML = new_translations.global.unknown

  // if (root_impl.innerHTML.replace(/(\r\n|\n|\r)/gm, '').trim() === old_translations.global.unknown)
  //   root_impl.innerHTML = new_translations.global.unknown
}