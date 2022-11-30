/**
 * Calls the nextFunction in the exception handler class
 */

import { IExceptionService } from '../interfaces';

export function Next(
  target: unknown,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) {
  //
  const originalFunction = descriptor.value;
  // Change what happens when the function is called
  descriptor.value = function (...args: unknown[]) {
    // Get next from the parent of the function
    const next = (this as IExceptionService<(arg: unknown) => void>).next;
    // Call the function with next taken from the parent
    return next(originalFunction.apply(this, args));
  };

  return descriptor;
}
