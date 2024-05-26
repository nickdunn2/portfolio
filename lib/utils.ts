/**
 * Type check on an unknown value to see if it is a string and if it is within the max length.
 */
export const validateString = (value: unknown, maxLength: number): value is string => {
  return !!value && typeof value === 'string' && value.length <= maxLength
}

/**
 * Function to return a string error message from an unknown error object.
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  } else if (!!error && typeof error === 'object' && 'message' in error) {
    return String(error.message)
  } else if (typeof error === 'string') {
    return error
  } else {
    return 'Whoops! An unknown error occurred. Please try again.'
  }
}
