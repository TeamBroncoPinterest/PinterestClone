UPDATE users
SET first = $2, last = $3, bio = $4, img = $5
WHERE user_id = $1;