function solveQuadratic(A, B, C){
  var A =
  var B =
  var C =
  var positive = (-Math.abs(B)+Math.sqrt(B^2 - 4*A*C))/(2*A);
  var negative = (-Math.abs(B)-Math.sqrt(B^2 - 4*A*C))/(2*A);
  return {
    positive: positive
    negative: negative
  }
}
