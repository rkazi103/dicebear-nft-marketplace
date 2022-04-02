const walletShortener = (address: string) =>
  `${address.substring(0, 5)}...${address.substring(address.length - 5)}`;

export default walletShortener;
