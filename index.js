


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo) {
  const user = {
    username: "Terence",
    password: "12345"
  }
  let attemptCount = 0;
  const maxAttempts = 3;

const loginAttempt = (passwordAttempt) => {

    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed login attempts.";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
        return "Login successful!";
    }

    if (attemptCount >= maxAttempts) {
        return "Account locked. Too many failed login attempts.";
    }

    return `Incorrect password. Attempts remaining: ${maxAttempts - attemptCount}`;
};

return loginAttempt;
}