/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if(password == "" || typeof password !== "string")  return "weak"
  let str = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  let count = 0
  let uppercase = false
  let lowercase = false
  let number = false
  let special = false
  
  
  for(let i=0;i<password.length;i++){
    let s = password[i]
    let ascii = s.charCodeAt(0)
    if(ascii>=65 && ascii<=90 && uppercase == false)  {
      count++
      uppercase = true
    }
    if(ascii>=97 && ascii<=122 && lowercase == false)  {
      count++
      lowercase = true
      
    }
    if(ascii>=48 && ascii<=57 && number == false)  {
      count++
      number = true
      
    }
    if(str.includes(s) && special == false)  {
      count++
      special = true

    }
    
    if(count==4)  break
  }
  if(password.length >= 8)  count++;

  if(count==1)  return "weak"
  else if(count==2 || count==3) return "medium"
  else if(count==4) return "strong"
  else return "very strong"
}
