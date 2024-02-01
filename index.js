import { config } from "dotenv";
import connectDb from "./src/db/connectDb.js";
import app from "./app.js";

const port = process.env.PORT || 8080
config()

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`app is Listening of PORT ${port}`);
  })
})

/* 

Q1 how many active users
$match 
==> to find the specific data from db 
{
    $match: {
      isActive: false,
    },
},

$count 
=> count the fetched data from DB
{
    $count: "activeUser",
},
[
  {
    $match: {
      isActive: false,
    },
  },
  {
    $count: "activeUser",
  },
]

Q2 how to get the average age of user
[
  {
    $group: {
   _id:null,
      averageAge:{
        $avg:"$age"
      }
  }
  }
]

$group 
==> used to group the data with same values 
averageAge --> we added we filed as DB it self add _id  
$avg ==> used to find the average of the data

Q3 find the top 5 favorite fruits 

[
  {
    $group: {
      _id: "$favoriteFruit",
      count:{
        $sum:1
      }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 5
  }
]

Q4 find how many males and and females in the document

[
  {
    $group: {
      _id: "$gender",
      countGender: {
        $sum: 1
      }
    }
  }
]

Q5 which country has the much registered user 

[
  {
    $group: {
      _id: "$company.location.country",
      userCount:{
        $sum:1
      }
    }
  },
  {
    $sort: {
      userCount: -1
    }
  }
]

Q6 list all the unique eye colors present in the collection
[
  {
    $group: {
      _id: "$eyeColor",
    }
  },
]

Q7 what is the average number of tags per user?









*/