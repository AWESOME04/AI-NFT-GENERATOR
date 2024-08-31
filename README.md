# NFT Creator

This project is a React-based decentralized application (dApp) that allows users to generate unique NFTs (Non-Fungible Tokens) using AI-generated images. The images are created using the ORA plugin with web3.js on the Sepolia Testnet and are securely stored on the blockchain.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
  - [Estimate Fee](#estimate-fee)
  - [Generate Image](#generate-image)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The NFT Creator app enables users to generate AI-based images that are minted as NFTs on the blockchain. Users can connect their MetaMask wallet, enter a creative prompt, estimate the transaction fee, and generate an image. The generated image is then stored on IPFS, and the transaction details, including the image's IPFS hash, are displayed.

## Features

- **AI-Powered Image Generation**: Leverage AI models to generate unique images based on user prompts.
- **Blockchain Integration**: Mint NFTs and store them securely on the blockchain using the Sepolia Testnet.
- **IPFS Storage**: Generated images are stored on IPFS, providing a decentralized and secure storage solution.
- **MetaMask Integration**: Easily connect your MetaMask wallet to interact with the dApp.
- **Interactive UI**: User-friendly interface with real-time updates on transaction status and generated results.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**
- **MetaMask** browser extension

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/nft-creator.git
    cd nft-creator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the App

1. **Start the development server**:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

2. **Open your browser** and navigate to `http://localhost:3000`. Make sure your MetaMask wallet is connected to the Sepolia Testnet.

## Usage

### Estimate Fee

- Enter a prompt in the input field.
- Click the "Estimate Fee" button to get the estimated cost of generating an NFT based on the entered prompt.

### Generate Image

- After estimating the fee, click the "Generate Image" button.
- The application will send a transaction to the blockchain, which you can track using the displayed transaction hash.
- Wait for about 30 seconds for the image to be generated.
- The generated image's IPFS hash will be displayed, along with a preview of the image.

## Project Structure

```bash
nft-creator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `public/`: Static files like `index.html`.
- `src/components/`: React components.
- `src/App.js`: Main application component.
- `src/App.css`: Styles for the application.

## Technology Stack

- **React**: Frontend library for building user interfaces.
- **Web3.js**: Ethereum JavaScript API to interact with the blockchain.
- **ORA Plugin**: Web3 plugin for interacting with AI models and generating NFTs.
- **MetaMask**: Wallet for managing blockchain transactions.
- **IPFS**: Decentralized storage system for storing the generated images.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Make sure to follow the coding standards and write tests for any new features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
