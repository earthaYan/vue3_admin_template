// 封装localStorage相关操作
export const getLocalStorageItemWithDefault = (
  key: string,
  defaultValue: string,
): string => {
  if (localStorage.getItem(key) === null) {
    return defaultValue
  }
  return localStorage.getItem(key) as string
}
export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key)
}
export const setLocalStorageItem = <T extends string = string>(
  key: string,
  value: T,
) => {
  return localStorage.setItem(key, value)
}
export const TOKEN = 'TOKEN'
