export function generatePassword(length: number): string {
   const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lowercase = 'abcdefghijklmnopqrstuvwxyz';
   const numbers = '0123456789';
   const symbols = '@$&';
   let characters = '';
   let password = '';
   // Include all categories by default
   characters += uppercase + lowercase + numbers + symbols;
   // Ensure at least one character from each desired category is included
   password += uppercase[Math.floor(Math.random() * uppercase.length)];
   password += lowercase[Math.floor(Math.random() * lowercase.length)];
   password += numbers[Math.floor(Math.random() * numbers.length)];
   password += symbols[Math.floor(Math.random() * symbols.length)];
   // Fill the remaining password with random characters from the chosen pool
   for (let i = password.length; i < length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
   }
   // Shuffle the password to ensure randomness
   password = password.split('').sort(() => Math.random() - 0.5).join('');
   return password;
}