// Демо-данные для экранов Search / Transaction History / Category History / Send Money / Language

export const TRANSACTIONS = [
  { id: 't1', icon: 'logo-apple', title: 'Apple Store', subtitle: 'Entertainment', amount: '- $5,99' },
  { id: 't2', icon: 'musical-notes', tone: 'green', title: 'Spotify', subtitle: 'Music', amount: '- $12,99' },
  { id: 't3', icon: 'download-outline', title: 'Money Transfer', subtitle: 'Transaction', amount: '$300', positive: true },
  { id: 't4', icon: 'cart-outline', tone: 'red', title: 'Grocery', subtitle: 'Shopping', amount: '- $ 88' },
  { id: 't5', icon: 'tv-outline', tone: 'red', title: 'Apple Store', subtitle: 'Entertainment', amount: '- $5,99' },
  { id: 't6', icon: 'download-outline', title: 'Money Transfer', subtitle: 'Transaction', amount: '$300', positive: true },
  { id: 't7', icon: 'logo-apple', title: 'Apple Store', subtitle: 'Entertainment', amount: '- $5,99' },
  { id: 't8', icon: 'musical-notes', tone: 'green', title: 'Spotify', subtitle: 'Music', amount: '- $12,99' },
  { id: 't9', icon: 'cart-outline', tone: 'red', title: 'Grocery', subtitle: 'Shopping', amount: '- $ 88' },
];

export const CONTACTS = [
  { id: 'c1', name: 'Yamilet', color: '#3D5A80' },
  { id: 'c2', name: 'Alexa', color: '#6D597A' },
  { id: 'c3', name: 'Yakub', color: '#355070' },
  { id: 'c4', name: 'Krishna', color: '#B56576' },
];

export const LANGUAGES = [
  { id: 'en', label: 'English', flag: '🇺🇸' },
  { id: 'au', label: 'Australia', flag: '🇦🇺' },
  { id: 'fr', label: 'Franch', flag: '🇫🇷' },
  { id: 'es', label: 'Spanish', flag: '🇪🇸' },
  { id: 'am', label: 'America', flag: '🇦🇲' },
  { id: 'vn', label: 'Vietnam', flag: '🇻🇳' },
];

export const CATEGORIES = [
  { id: 'transaction', label: 'Transaction', color: '#FFA45B', value: 0 },
  { id: 'transfer', label: 'Transfer', color: '#6EE7B7', value: 18 },
  { id: 'travel', label: 'Travel', color: '#22D3EE', value: 0 },
  { id: 'food', label: 'Food', color: '#F472B6', value: 27 },
  { id: 'shopping', label: 'Shopping', color: '#FB923C', value: 0 },
  { id: 'car', label: 'Car', color: '#A7F3D0', value: 0 },
];

// Сегменты кольца (в процентах, сумма 100)
export const DONUT = [
  { color: '#F472B6', value: 27 },
  { color: '#D8B4FE', value: 20 },
  { color: '#A855F7', value: 20 },
  { color: '#6EE7B7', value: 18 },
  { color: '#C084FC', value: 15 },
];

export const TERMS = [
  'L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member.',
  '15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy related to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.',
  '15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.',
  '15.4 By using this Application, you agree to the terms of this Privacy Policy.',
];
