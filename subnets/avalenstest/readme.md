## avalenstest

---

Copied  `genesis.json` and `sidecar.json` from `~/.avalanche-cli/subnets`


Teleporter Messenger successfully deployed to c-chain (0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf)
Teleporter Registry successfully deployed to c-chain (0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25)

Loading cli-teleporter-deployer key
Teleporter Messenger successfully deployed to avalenstest (0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf)
Teleporter Registry successfully deployed to avalenstest (0x34f4e19E2f757E3889bcbEC8a1D6C324d3E3c860)




|  __ \     | |      (_) |
| |  | | ___| |_ __ _ _| |___
| |  | |/ _ \ __/ _  | | / __|
| |__| |  __/ || (_| | | \__ \
|_____/ \___|\__\__,_|_|_|___/
+--------------------------------+----------------------------------------------------+
|           PARAMETER            |                       VALUE                        |
+--------------------------------+----------------------------------------------------+
| Subnet Name                    | avalenstest                                        |
+--------------------------------+----------------------------------------------------+
| ChainID                        | 2024                                               |
+--------------------------------+----------------------------------------------------+
| Mainnet ChainID                | 0                                                  |
+--------------------------------+----------------------------------------------------+
| Token Name                     | MERIT                                              |
+--------------------------------+----------------------------------------------------+
| VM Version                     | v0.6.2                                             |
+--------------------------------+----------------------------------------------------+
| VM ID                          | jvYiV2m6b5Gv1zZw3ogZ5GH6vfp68gqa9T9xTpqGkNJJq39HU  |
+--------------------------------+----------------------------------------------------+
| Local Network SubnetID         | 2CZP2ndbQnZxTzGuZjPrJAm5b4s2K2Bcjh8NqWoymi8NZMLYQk |
+--------------------------------+----------------------------------------------------+
| Local Network BlockchainID     | x4xJFRmG4S8t7X2GZNVBGeSiVNePEUdBzreF9L3CBMxpYiBB7  |
+--------------------------------+----------------------------------------------------+
| Local Network Teleporter       | 0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf         |
| Messenger Address              |                                                    |
+--------------------------------+----------------------------------------------------+
| Local Network Teleporter       | 0x34f4e19E2f757E3889bcbEC8a1D6C324d3E3c860         |
| Registry Address               |                                                    |
+--------------------------------+----------------------------------------------------+


github codespace:

https://super-duper-space-meme-x9g45v4wgx4fp75p-9650.app.github.dev






//// curl C-chain for blockchain id

/// the "0xd127dc9b" created by py script file /extract-blockchain-id-c-chain/script.py

curl -X POST --data '{
  "jsonrpc":"2.0",
  "id":1,
  "method":"eth_call",
  "params":[{
      "to": "0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25",
      "data": "0xd127dc9b"
  },"latest"]
}' -H 'content-type: application/json;' https://super-duper-space-meme-x9g45v4wgx4fp75p-9650.app.github.dev/ext/bc/C/rpc


////// result!

{"jsonrpc":"2.0","id":1,"result":"0xabc1bd35cb7313c8a2b62980172e6d7ef42aaa532c870499a148858b0b6a34fd"}
