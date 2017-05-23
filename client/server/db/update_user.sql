UPDATE user 
SET username = $1, first = $2, last = $3, bio = $4, img = $5
WHERE id = $6;