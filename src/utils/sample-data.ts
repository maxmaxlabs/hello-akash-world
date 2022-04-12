import { Assets, NFT, User } from '@src/interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleNFTs: NFT[] = [
  { id: 1, name: "Egao#4164", collection: "Karafuru", price: 2.6, token: "eth", link: "https://opensea.io/assets/0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6/4164", imageUrl: "/images/temp/karafuru.jpg" },
  { id: 2, name: "CryptoPunk#9590", collection: "CryptoPunk", price: 77.85, token: "eth", link: "https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9590", imageUrl: "/images/temp/punk.png" },
  { id: 3, name: "4136", collection: "Bored Ape Yatch Club", price: 122.11, token: "eth", link: "https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/4136", imageUrl: "/images/temp/bored_ape.png" },
]

// TODO
export const sampleAssets: Assets[] = [
  { id: 1, ticker: "ETH", amount: 6.9, value: 20700 },
  { id: 2, ticker: "ATOM", amount: 420.36, value: 12600 },
  { id: 3, ticker: "AKT", amount: 6969.69, value: 10600 },
  { id: 4, ticker: "OSMO", amount: 1111, value: 11666 },
  { id: 5, ticker: "JUNO", amount: 2222, value: 66666 },
  { id: 6, ticker: "EVMOS", amount: 3333, value: 33333 },
  { id: 7, ticker: "STARS", amount: 222222, value: 111111 },
];
