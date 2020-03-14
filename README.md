# Father Ledger
![](https://i.imgur.com/Zmmtgao.jpg)


# Demo

Here is a working live demo: 
https://father-ledger.herokuapp.com/

## Testing Data

|   User | Email |  Password |
| -------- | -------- | -------- |
|  user1        |  user1@example.com        | 12345678         |



# Technologies

* Built a web with Node.js and Express.js
* Managed data with CRUD with MongoDB
* Analyzed each category of expenses in a period and displayed with Chart.js
* Applied Handlebars to generate HTML template
* Integrated Bcrypt.js to hash password
* Applied Moment.js to handle time converting
* Implemented Connect-Flash to display error message
* Supported Facebook Login with Passport and Passport Facebook
* Integreted Bootstrap to build better user interface


# Features

### CRUD with each account 
&nbsp;&nbsp;Users can add, search,  modify and delete each account

### Sort list by date and price 
&nbsp;&nbsp;Displayed the list with ascend or descend mode to make it easy to search

### Display chart in a period of time 
&nbsp;&nbsp;Supported chart display mode 
### Member systems
&nbsp;&nbsp;Provided native login and Facebook login



## Routes

| Features | Details  | Routes   |
| -------- | -------- | -------- |
| Search   | Date | /account/selectDate |
| Sort list   | Date & Price | /account/sortDate |
| Add  | Date is required | /account/new |
| Edit         |          | /account/edit         | 
| Delete         | Confirm message          |/account/delete          | 
| Chart Display         |  Week & Month & half year        |  /chart/week or month or Half year        |
| Login & Logout     | Facebook login included     | /users/login & /users/logout    |



## Installation
1. Github clone

    `git clone https://github.com/ken556621/FatherLedger.git`
    
2. Use terminal open file "myRestaurantList"

     `cd FatherLedger`
     
3. Use terminal add new file name ".env"

    `touch .env`
    
4. Inside the env folder type

    `FACEBOOK_ID=//your client ID`
    `FACEBOOK_SECRET=//your facebook secret`
    `FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback`
    > This is for facebook login secret key
     
5. NPM install

    `npm install`
    
6. NPM run start

    `npm run start`
    
7. Open browser 
    
    `http://localhost:3000`
    

   
## Environment
1. Express
2. Express-session
3. Nodemon
4. Dotenv
5. Express-handlebars
6. Body-parser
7. Connect-flash
8. Moment js
9. Chart js
> Data base
* Mongodb
> ODM
* Mongoose

