const checkForWin = board => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return WIN_CONDITIONS.some( cond => {
    const [a, b, c] = cond;
    if (board[a].owner 
      && board[a].owner === board[b].owner 
      && board[a].owner === board[c].owner) {
        return true;
    }
  });
}

export default checkForWin;