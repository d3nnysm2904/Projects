Error 1-
The first bug was in the middleware , authUser ,
the payload was not been verified, 
also the token was both req.body || res.query 



Error 2
- in the sqlpartialUpdate, it was eliminating the token, not allowing to verify it 

Error 3
It was in the patch route for users , according to the code both users and admin could edit info , but ensureAdmin was one of the parameters , so only admin could do it 



Error 4
Some of the routes where missing the await syntax 


Error 5 
sthe data.sql was not connecting to the database  
the const client was not setup correctly in the db.js  




Error 6
Changed BCRYPT_WORK_FACTOR to 12 instead of 10 (more secure) -->