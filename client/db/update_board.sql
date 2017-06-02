UPDATE users
SET boards= $2
WHERE user_id = $1;