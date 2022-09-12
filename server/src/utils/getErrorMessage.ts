/**
 * Handles `unknown` error type in case of improperly thrown values
 */
export const getErrorMessage = (error: unknown): string => {
  let message = "Unknown error thrown.";

  if (error instanceof Error) message = error.message;

  return message;
};
