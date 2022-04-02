import nfts from "./create-nft-data.js";
import sdk from "./init-sdk.js";

const nftDrop = sdk.getNFTDrop("0x4FcFE963E1e40DCDf7f3F6b7260499FE673972a5");

(async () => {
  try {
    await nftDrop.createBatch(nfts);
    console.log("✅ Sucessfully NFTs minted.");
  } catch (err) {
    console.log("❌ Failed to mint NFTs");
    console.error(err);
    process.exit(1);
  }
})();
