export const recentWinners = [
  {
    id: 1,
    name: "Adebayo O.",
    phone: "080********45",
    prize: "₦1,000,000",
    date: "April 22, 2025",
    drawType: "Weekday Jackpot",
    quote:
      "I couldn't believe it when I got the message. This money will help me expand my business!",
  },
  {
    id: 2,
    name: "Chioma E.",
    phone: "070********12",
    prize: "₦350,000",
    date: "April 22, 2025",
    drawType: "2nd Prize",
    quote:
      "I'm so grateful to MTN for this opportunity. I'll use this money to pay for my children's education.",
  },
  {
    id: 3,
    name: "Mohammed I.",
    phone: "081********78",
    prize: "₦150,000",
    date: "April 22, 2025",
    drawType: "3rd Prize",
    quote:
      "This is a blessing! I've been an MTN customer for years, and now it has paid off.",
  },
  {
    id: 4,
    name: "Blessing A.",
    phone: "090********23",
    prize: "₦75,000",
    date: "April 22, 2025",
    drawType: "Concession Prize",
    quote:
      "I was so surprised when I got the call. Thank you MTN for this amazing gift!",
  },
  {
    id: 5,
    name: "Emeka O.",
    phone: "080********67",
    prize: "₦3,000,000",
    date: "April 20, 2025",
    drawType: "Saturday Special Jackpot",
    quote:
      "This is life-changing! I can now invest in my dream project. MTN has made my dreams come true!",
  },
  {
    id: 6,
    name: "Fatima Y.",
    phone: "070********34",
    prize: "₦1,000,000",
    date: "April 20, 2025",
    drawType: "Saturday 2nd Prize",
    quote:
      "I'm overwhelmed with joy. This prize came at the perfect time for me and my family.",
  },
]

export const jackpotWinners = recentWinners.filter(winner =>
  winner.drawType.includes("Jackpot")
)

export const allTimeWinners = [
  ...recentWinners,
  {
    id: 7,
    name: "Oluwaseun D.",
    phone: "081********90",
    prize: "₦1,000,000",
    date: "April 15, 2025",
    drawType: "Weekday Jackpot",
    quote:
      "I've been topping up my MTN line regularly, and it finally paid off!",
  },
  {
    id: 8,
    name: "Grace T.",
    phone: "090********56",
    prize: "₦350,000",
    date: "April 15, 2025",
    drawType: "2nd Prize",
    quote: "This prize will help me complete my house project. Thank you MTN!",
  },
  {
    id: 9,
    name: "Ibrahim M.",
    phone: "080********78",
    prize: "₦3,000,000",
    date: "April 13, 2025",
    drawType: "Saturday Special Jackpot",
    quote:
      "I'm still in shock! This is the biggest blessing I've received this year.",
  },
]
