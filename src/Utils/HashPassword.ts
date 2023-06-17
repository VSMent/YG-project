/* global TextEncoder, crypto */
const hashPassword = async (passString: string) => {
  if (passString.length < 1) return ''
  const msgUint8 = new TextEncoder().encode(passString) // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8) // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  // convert bytes to hex string
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}
export default hashPassword
