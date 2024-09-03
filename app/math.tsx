
/// `a` MUST be greater than 1 to avoid divide by zero.
// A function satisfying f(0) === 0 and f(1) === 1, with
// f(t) increasing exponentially as t increases.
// As `a` approaches 1, the function approaches a linear function.
// As `a` approaches infinity, the function approaches a step function
//   (that is, it gets "more exponential" as `a` increases, the bend increases
//    until it looks like a step function).
export function exponential01(t: number, a: number)
{
  return (Math.pow(a, t) - 1) / (a - 1);
}

export function decay01(t: number, a: number)
{
  return 1 - exponential01(1 - t, a);
}