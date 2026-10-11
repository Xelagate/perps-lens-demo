// Solana wallet for Pacifica signing: Phantom when it is in the page (desktop extension, Phantom's in-app browser),
// otherwise Mobile Wallet Adapter (Seed Vault in the Seeker APK). Returns null when neither exists.
import { mwaWallet } from "./mwa.js";

export async function connectWallet() {
  const phantom = window.phantom?.solana;
  if (phantom?.isPhantom) {
    const account = (await phantom.connect()).publicKey.toString();
    return { account, signMessage: async m => (await phantom.signMessage(m, "utf8")).signature };
  }
  const w = mwaWallet();
  if (!w) return null;
  const [acc] = (await w.features["standard:connect"].connect()).accounts;
  return { account: acc.address,
    signMessage: async m => (await w.features["solana:signMessage"].signMessage({ account: acc, message: m }))[0].signature };
}
