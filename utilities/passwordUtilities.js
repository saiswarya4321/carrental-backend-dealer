// const bcrypt=require("bcrypt")


// const hashPassword=async(password)=>{
//     const salt= await bcrypt.genSalt()
//     const hashedPassword=await bcrypt.hash(password,salt);
//     return hashedPassword;
// }
// const comparePassword= async(password,hashedPassword)=>{
//     const passwordMatch= await bcrypt.compare(password,hashedPassword)
//     return passwordMatch;
// }
// module.exports={hashPassword,comparePassword}

const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10; // ⚙️ Adjust this to 8 or 9 if you need faster hashing

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

module.exports = { hashPassword, comparePassword };
