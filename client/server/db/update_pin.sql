UPDATE boards
SET link = $1, pinterest_id = $2, metadata = $3, imageurl =$4
WHERE id = $5;