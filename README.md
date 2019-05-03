# zayoBackend
 I designed a simple backend api with only a single route to get the information. I would have applied more routes if time allowed it but I wanted to present working code for you all. I also planned to host it to heroku but I was having version issues with it so I decided to just hand over the repo! 
# To start the server: 
Fork and clone the repo.
Initialize the app with YARN.
(make sure you have "pg" installed)
Make a local database on your application using the postgres command "createdb zayo_items"
Once you have created the local database, you need to run your migrations and seeds within the project so run the commands "knex migrate:latest" and then "knex seed:run"
Start the server with nodemon.
Enjoy!
