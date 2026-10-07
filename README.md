# Perps Lens — demo

All your perps positions in one place and one order ticket: Pacifica (Solana on-chain perps) next to
Binance USDT-M Futures. Tabs: Trade · Accounts · Market (live markets, funding, top traders).

- Page: https://xelagate.github.io/perps-lens-demo/
- Pacifica: market orders on **testnet**, signed in Phantom. Use a separate empty wallet: a Pacifica
  signature does not name the network and stays valid on mainnet for its 30 s window. Testnet funds:
  devnet SOL and mock USDP on https://test-app.pacifica.fi (Start Trading → Deposit).
- Binance: **Mainnet trades real money** — confirm dialog and a $50 cap per opening order. Use a key
  with Futures only, no Withdraw. Demo keys are view-only (Binance Demo blocks browser orders via CORS).
  The key stays in the browser tab; it is sent only to Binance.

Static page, no build step, no backend. Source of truth lives in a private repo; this is a published copy.
