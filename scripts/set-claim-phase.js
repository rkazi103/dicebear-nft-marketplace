import sdk from "./init-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const nftDrop = sdk.getNFTDrop("0x4FcFE963E1e40DCDf7f3F6b7260499FE673972a5");

(async () => {
  try {
    const claimConditions = [
      {
        startTime: new Date(),
        price: 0.05,
        quantityLimitPerTransaction: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await nftDrop.claimConditions.set(claimConditions);
  } catch (err) {
    console.error("Failed to set claim phase", err);
  }
})();
