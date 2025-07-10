const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://creativenetworkbijay:creativenetworkbijayp@cluster0.1wqsalg.mongodb.net/"
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //  //Create user using new + save
    const user = new User({
      name: "yoyo",
      email: "update@user.com",
      age: 900,
      isActive: true,
      tags: ["dev", "manager"],
    });

    await user.save();

    // //  Fetch all users
    // const allUsers = await User.find({});
    // console.log(allUsers);

    // // count the total number of users present in the DB
    // const totalUsers = await User.countDocuments();
    // console.log("Total users:", totalUsers);

    // // Fetch a particular user
    // const getUserofActiveFalse= await User.find({isActive: true})
    // console.log(getUserofActiveFalse)

    // //Find one- find the 1st user which will match the criteria
    // const findTheFirstUser= await User.findOne({name:'bijay'})
    // console.log(findTheFirstUser)

    // //find the user which is created latest
    // const getLastCreatedUserByUserId = await User.findById(user._id)
    // console.log(getLastCreatedUserByUserId)

    // //find the data of particular selected feilds
    // const selectedFeilds= await User.find().select('name email -_id'); //here i want to show with feilds name and email, but don't wanat to show the id
    // console.log(selectedFeilds)

    // //limited user's used for pagination
    // const limitedUsers= await User.find().limit(4).skip(2) //this will show 4 users but will skip the top 2 users
    // console.log(limitedUsers)

    // // shorting of users
    // const sortedUsers= await User.find().sort({age:-1}) //this will short users acc to age in decending order
    // console.log(sortedUsers)

    // //count documents
    // const countDocuments= await User.countDocuments({isActive:false}) //it will count the users whose is active is false
    // console.log(countDocuments)

    // // delete a user
    // const deleteUser = await User.findByIdAndDelete("686287257890e6861bc09d4a");
    // console.log("Deleted user:", deleteUser);

    // //update the user
    const updateUser = await User.findByIdAndUpdate(
      user._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );

    console.log("updated user", updateUser);

    await mongoose.connection.close();
  } catch (e) {
    console.log("error is ", e);
  }
}

runQueryExamples();


