## need keccak of blockchainID() for querying TeleporterRegistry SC on avalens C-chain on codespace

from web3.auto import w3

# Function signature
signature = 'blockchainID()'

# Calculate Keccak-256 hash of the signature
hash = w3.keccak(text=signature).hex()

# Function selector is the first 8 characters of the hash
selector = hash[:10]  # Includes '0x' prefix
print(selector)