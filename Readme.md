/auth/register (POST) (not protected) === http://localhost:3000/auth/register

/auth/login (POST) (not Protected) === http://localhost:3000/auth/login

/auth/forgotpassword ( JWT protected) (PATCH) === http://localhost:3000/auth/UpdatePassword  (was Not able to implement otp So implemented update Instead)

/users (GET) ( JWT protected) === http://localhost:3000/users/AdmingetUsers?Id="PROVIDE ADMIN ID HERE" 

/users/userid (GET) ( JWT protected) === http://localhost:3000/user/getUser?Id="PROVIDE USER ID HERE" (Get Specific User)

/users/userid (PUT) ( JWT protected) ==== http://localhost:3000/user/updateUser?Id="PROVIDE USER ID HERE" (Update Specific User)

Not Completed APIS/PENDING

/users/<userid>/documents ( GET ) ( JWT protected)
/users/<userid>/documents (POST) ( JWT protected)