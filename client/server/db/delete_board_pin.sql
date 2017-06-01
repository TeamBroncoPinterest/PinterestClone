DELETE FROM pins
  WHERE user_id = $1
  AND LOWER(board->>'name') = $2;
