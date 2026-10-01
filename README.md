# Perps Lens — demo

Solana on-chain perps (Pacifica) next to your CEX: live markets, top traders, positions by wallet.
Read-only on mainnet; market orders on Pacifica **testnet**, signed in Phantom.

- Read-only: https://xelagate.github.io/perps-lens-demo/
- Testnet trading: https://xelagate.github.io/perps-lens-demo/?net=testnet

Use a separate empty wallet for testnet trading: a Pacifica signature does not name the network and
stays valid on mainnet for its 30 s window. Testnet funds: devnet SOL and mock USDP on
https://test-app.pacifica.fi (Start Trading → Deposit).

Static page, no build step, no backend. Source of truth lives in a private repo; this is a published copy.
