## Subnet Instructions

---

### Setup of:  `avalenstest`

In the terminal:

```bash
curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s
```

Then move `avalanche` script from `~/bin` to `/AvaLens/subnets/bin` directory and add `avalanche` to the PATH.

Create the subnet now:

```bash
avalanche subnet create avalenstest
```

Describe subnet:

```bash
avalanche subnet describe avalenstest
```

Start network:

```bash
avalanche network start
```

Network status:

```bash
avalanche network status
```

Deploy subnet:

```bash
avalanche subnet deploy avalenstest
```


---

QUESTION:

When deploying subnet to `Local Network`:

```bash
Installing AWM-Relayer v1.0.0
Error: failed downloading https://github.com/ava-labs/awm-relayer/releases/download/v1.0.0/awm-relayer_1.0.0_darwin_amd64.tar.gz: unexpected http status code: 404
```

`avalanche network status` still shows healthy network – but will `teleporter` work?

Seems like no release for `darwin_amd64` but my laptop is an old macOS...

---

QUESTION:

In Core wallet, when trying to display assets of account on custom local subnet:

```bash
backgroundPage.js:4 Error: NFTs not supported on the network
    at $9.getNftBalances (backgroundPage.js:4:15475827)
    at async a7.handle (backgroundPage.js:4:15476693)
    at async backgroundPage.js:4:15526929
```



---

RESEARCH:

Is it worth deploying subnet on Fuji testnet – that way both laptops can interact with SC on subnet (not just local). Then also Isshin can deploy the testnet from silicon chip laptop (with teleporter?) and we both can interact.

- [avalanche node manual](https://docs.avax.network/nodes/run/node-manually#run-an-avalanche-node-from-source)

- [add validator to network](https://docs.avax.network/nodes/validate/add-a-validator#add-a-validator-with-core-extension)

- [fuji testnet setup](https://docs.avax.network/build/subnet/deploy/fuji-testnet-subnet)

