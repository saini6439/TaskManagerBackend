# TaskmanagerBackend


In Config File and add your mongo db credentials. in loaders/mongodb.js add uri "mongodb://localhost:27017/task-manager(dbname://host:prt/dbname).
then go to main directory run command "npm i". then after this run node app.js .

then go into your mongo db console. and then select task-manager and inster below data into userschema.
{
    "_id" : ObjectId("5fd9bda197e46363b4d50b96"),
    "api_key" : "8P2918W-VK24E0J-K103CBB-JKWETCX",
    "status" : "pending",
    "name" : "yourname",
    "email" : "test@gmail.com",
    "designation" : "Software engineer",
    "password" : "$2a$10$SWgs6pHCvtVeASaZQ9tSCOC.QvtLzbvMT7VuS8hsFPGO99chZm2Kq",
    "usertype" : "admin",
    "updatedAt" : ISODate("2020-12-16T07:56:17.459Z"),
    "createdAt" : ISODate("2020-12-16T07:56:17.459Z"),
    "__v" : 0
}
