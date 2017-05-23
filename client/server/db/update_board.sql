UPDATE boards
SET user_id = $1, name = $2, description = $3
WHERE id = $4;