const isEnum = <T extends object>(enumObj: T, value: any): value is T[keyof T] => {
  return Object.values(enumObj).includes(value as T[keyof T])
}

const getEnumValueOrDefault = <T extends object>(enumObj: T, value: any, defaultValue?: any): T[keyof T] => {
  return isEnum(enumObj, value) ? value : defaultValue ? defaultValue : undefined
}

export { getEnumValueOrDefault }
