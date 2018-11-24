function dirReduc(arr){
    for (let i = 0; i < arr.length - 1; i++) {
      const currentDirection = arr[i];
      const nextDirection = arr[i + 1];
      if (currentDirection === "NORTH" && nextDirection === "SOUTH" || currentDirection === "EAST" && nextDirection === "WEST" || currentDirection === "SOUTH" && nextDirection === "NORTH" || currentDirection === "WEST" && nextDirection === "EAST") {
        arr.splice(i, 2);
        i -= 2;
      }
    }
    return arr;
  }
  
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //["WEST"])