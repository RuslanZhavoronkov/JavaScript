const sum = (...args) => {
    //const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    console.log(total);
  }

  sum(1, 2, 3, 4, 5);