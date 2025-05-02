export const formatPhone = (value: string) => {
  // Remove non-digit characters
  const digitsOnly = value.replace(/\D/g, "")

  // Nigerian phone numbers are typically 10-11 digits (excluding country code)
  // Limit to max 13 digits (3 for country code + 10 for phone number)
  const limitedDigits = digitsOnly.slice(0, 13)

  // Handle the case when input is empty
  if (limitedDigits.length === 0) return ""

  // First determine if country code is included
  let countryCode = ""
  let phoneDigits = limitedDigits

  // Check if the number starts with country code (234)
  if (limitedDigits.startsWith("234")) {
    countryCode = "234"
    phoneDigits = limitedDigits.substring(3) // Remove country code
  }

  // Format according to the pattern: +234 70 380 600 70
  // This breaks down the number into groups of 2-3-3-2
  let formattedNumber = ""

  if (countryCode) {
    formattedNumber = "+" + countryCode + " "
  }

  // Format the remaining digits in groups
  if (phoneDigits.length > 0) {
    // First group (2 digits)
    formattedNumber += phoneDigits.substring(0, Math.min(2, phoneDigits.length))

    // Second group (3 digits)
    if (phoneDigits.length > 2) {
      formattedNumber +=
        " " + phoneDigits.substring(2, Math.min(5, phoneDigits.length))
    }

    // Third group (3 digits)
    if (phoneDigits.length > 5) {
      formattedNumber +=
        " " + phoneDigits.substring(5, Math.min(8, phoneDigits.length))
    }

    // Fourth group (remaining digits)
    if (phoneDigits.length > 8) {
      formattedNumber += " " + phoneDigits.substring(8)
    }
  }

  return formattedNumber
}
