
# DiceBear NFT Marketplace

I used the [DiceBear](https://avatars.dicebear.com/) avatars to create a Web 3.0 app where you can mint your own NFT!

## Authors

- [@rkazi103](https://www.github.com/rkazi103)


## Tech Stack

**Client:** Next JS, Tailwind CSS

**Server:** Sanity CMS, Thirdweb

## Demo

Click [here](https://dicebear-nft-marketplace.vercel.app/) to view a demo of the app!


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SANITY_PROJECT_ID`

`NEXT_PUBLIC_SANITY_DATASET`

`SANITY_API_TOKEN`

If you want to run the scripts to create your own smart contracts on Thirdweb, you will also need

`PRIVATE_KEY`

`ALCHEMY_API_URL`
## Features

- Authentication with Metamask Wallet
- Fully Mobile Responsive
- Full NFT Minting Functionality 


## Run Locally

Clone the project

```bash
  git clone https://github.com/rkazi103/dicebear-nft-marketplace
```

Go to the project directory

```bash
  cd dicebear-nft-marketplace
```

Install dependencies for Next JS Frontend

```bash
  yarn
```

Install dependencies for Sanity CMS Backend

```bash
cd studio && yarn
```

Start the Next JS Server

```bash
  yarn dev
```

Start the Sanity studio

```bash
cd studio && sanity start
```

## License
[GNU General Public License](https://github.com/rkazi103/ig-ui-app/blob/main/LICENSE) © 2022 [Rayan Kazi](https://github.com/rkazi103)
