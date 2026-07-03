

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker(userInfo) {
// Initialize login attempts
let attemptCount = 0;

// Nested arrow function
const loginAttempt = (passwordAttempt) => {

  // Increment attempts
  attemptCount++;

  // Account locked after 3 attempts
  if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
  }

  // Check password
  if (passwordAttempt === userInfo.password) {
      return "Login successful";
  }

  // Incorrect password
  return `Attempt ${attemptCount}: Login failed`;
};

return loginAttempt;
}