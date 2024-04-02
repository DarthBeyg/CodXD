let userName = "Bilal";
let passWord = 123;
let securityCode = 456;
 
if (userName == "bilal" && passWord == 123) {
  console.log("Please wait, authenticating security code");
  if(securityCode == 456){
    console.log(`Hi ${userName}, Your Password is ${passWord}`); 
  }
  else {
    console.log("Security code authenticating failed.");
  }
} else {
  console.log("Invalid Username or Password");
}
