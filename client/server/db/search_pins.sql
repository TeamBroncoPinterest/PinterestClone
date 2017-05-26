SELECT * FROM pins
  WHERE LOWER(note) LIKE $1
  OR LOWER(board->>'name') LIKE $1
  OR LOWER(metadata->>'link') LIKE $1
  LIMIT 100;
