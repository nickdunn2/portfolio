/**
 * Type check on an unknown value to see if it is a string and if it is within the max length.
 */
export const validateString = (value: unknown, maxLength: number): value is string => {
  return !!value && typeof value === 'string' && value.length <= maxLength
}
