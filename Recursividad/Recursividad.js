function recursive(n) {
    if (n === 0) {
      return 0
    } else {
      return n + recursive(n - 1)
    }
  }

  console.log(recursive(3))