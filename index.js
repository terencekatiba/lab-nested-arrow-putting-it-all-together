


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
const userInfo = {
    username: "terence",
    password: "12345"
};

const login = createLoginTracker(userInfo);

function createLoginTracker(userInfo) {

let attemptCount = 0;


const loginAttempt = (passwordAttempt) => {

  attemptCount++;

  if (attemptCount > 3) {
      return "Account locked";
  }

  if (passwordAttempt === userInfo.password) {
      return "Login successful";
  } else {
      return `Login attempt ${attemptCount}: Login failed`;
  }
};

return loginAttempt;
}