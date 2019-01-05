function mazeRunner(maze, directions) {
    const currentPosition = startingPoint(maze);
    for (const direction of directions) {
      if (direction === 'N') {
        currentPosition[0] = currentPosition[0] - 1;
      } else if (direction === 'E') {
        currentPosition[1] = currentPosition[1] + 1;
      } else if (direction === 'S') {
        currentPosition[0] = currentPosition[0] + 1;
      } else {
        currentPosition[1] = currentPosition[1] - 1;
      }
  
      const i = currentPosition[0];
      const j = currentPosition[1];
      if (i < 0 || i > maze.length - 1 || j < 0 || j > maze[i].length - 1) {
        return 'Dead'
      }

      const numberInMaze = maze[i][j];
      if (numberInMaze === 3) {
        return 'Finish';
      } else if (numberInMaze === 1) {
        return 'Dead';
      }
    }
    return 'Lost';
  }
  
  function startingPoint(maze) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        const isTwo = maze[i][j] === 2;
        if (isTwo) {
          return [i, j];
        }
      }
    }
  }
  
  mazeRunner([[1,1,1,1,1,1,1],
              [1,0,0,0,0,0,3],
              [1,0,1,0,1,0,1],
              [0,0,1,0,0,0,1],
              [1,0,1,0,1,0,1],
              [1,0,0,0,0,0,1],
              [1,2,1,0,1,0,1]], 
              ["N","N","N","N","N","E","E","E","E","E"]); //'Finish'