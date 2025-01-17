/**
 * Uri utils
 *
 * @author Xman
 * @date 2019.10.17
 */

/**
 * 获取指定参数的值
 */
export const getQueryStringItem = (uri, key) => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  const str = uri.substr(uri.indexOf('?') + 1)
  const r = str.match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}

/**
 * 更新指定参数的值
 */
export const updateQueryStringItem = (uri, key, value) => {
  if (!uri || !value) {
    return uri
  }
  const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  const separator = uri.indexOf('?') !== -1 ? '&' : '?'
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return uri + separator + key + '=' + value
  }
}
