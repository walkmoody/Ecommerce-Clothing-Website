Link to functioning website : https://ecommerce-frontend-nine-orcin.vercel.app/

(Planning on getting a domain and changing this link sometime this summer)

Functioning create account / Login in system

Product list stored in mongoDB and pulled from there

For purposes of this submission for this project I removed api key for stripe as well as functionality, expect errors if this is trying to be ran. This should work on live link above (with dummy data)

Included in the source code is the line "Ecommerce Project :: Walker Moody" at the footer of each page this is not included on the link above

Third party services used: Stripe, MongoDB, Axios, React, TailWind, Toastify, Vite, Cloudinary (for pictures), 

For this to run locally:
run in backend terminal: npm run server
In front end: npm run dev
Admin passcode is not included in .env since that allows for direct edits to the database

Deployment: 
Deployment is done through vercel, json files are added to frontend backend and admin. Whenever a push to main is made through github vercel automatically redeploys a new version