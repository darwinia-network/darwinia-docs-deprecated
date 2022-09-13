import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import 'antd/dist/antd.css';
import {Modal, notification} from 'antd';


const networksList = [
    {
        chainId: "0x2e",
        chainName: "Darwinia Smart Chain",
        nativeCurrency: {
            name: "RING",
            symbol: "RING",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.darwinia.network"],
        blockExplorerUrls: ["https://darwinia.subscan.io/"],
    },
    {
        chainId: "0x2d",
        chainName: "Pangoro Smart Chain",
        nativeCurrency: {
            name: "ORING",
            symbol: "ORING",
            decimals: 18,
        },
        rpcUrls: ["https://pangoro-rpc.darwinia.network"],
        blockExplorerUrls: ["https://pangoro.subscan.io/"],
    },
];

const ellipsisAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

const ConnectWalletButton = () => {
    const [connected, setConnected] = useState(null);
    const provider = useRef();
    const [isDialogVisible, setDialogVisible] = useState(false);
    const handleConnectToWallet = () => {
        setDialogVisible(true);
    }

    const getMetamaskAccounts = async (networkIndex, chainName) => {
        const accounts = await provider.current.request({
            method: "eth_requestAccounts",
        });
        setConnected({
            index: networkIndex,
            account: accounts[0],
            chainName,
        });
        return true;
    }

    const onSelectNetwork = async (index) => {
        if (!provider.current) {
            provider.current = window.ethereum;
        }

        if (typeof provider.current !== 'undefined') {
            // Metamask is installed
            const networkParams = networksList[index];
            try {
                const response = await provider.current.request({
                    method: "wallet_switchEthereumChain",
                    params: [{chainId: networkParams.chainId}],
                });
                // chainId already exists in Metamask
                if (!response) {
                    await getMetamaskAccounts(index, networkParams.chainName);
                }
            } catch (switchNetworkError) {
                if (switchNetworkError.code === 4902) {
                    // chainId doesn't exist in Metamask, add it with wallet_addEthereumChain
                    try {
                        const response = await provider.current.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: networkParams.chainId,
                                    chainName: networkParams.chainName,
                                    nativeCurrency: networkParams.nativeCurrency,
                                    rpcUrls: [...networkParams.rpcUrls],
                                    blockExplorerUrls: [...networkParams.blockExplorerUrls],
                                },
                            ],
                        });
                        if (!response) {
                            await getMetamaskAccounts(index, networkParams.chainName);
                        }
                    } catch (addNetworkError) {
                        notification.error({
                            message: "Oops, something wrong",
                            description: (addNetworkError).message,
                        });
                    }
                } else {
                    notification.error({
                        message: "Oops, something wrong",
                        description: (switchNetworkError).message,
                    });
                }
            }
        } else {
            // Metamask is not installed
            notification.info({
                message: "Oops, something is not quite right.",
                description: (
                    <p>
                        It looks like MetaMask hasn't been installed. Please{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/download.html">
                            install MetaMask
                        </a>{" "}
                        and try again.
                    </p>
                ),
            });
        }
    }

    return (
        <div>
            <Modal
                open={isDialogVisible}
                title={<h3 className={styles.chainSelectModalTitle}>Please select a network to connect</h3>}
                footer={null}
                onCancel={() => setDialogVisible(false)}
                className={styles.networksModal}
            >
                <ul>
                    {
                        networksList.map((item, index) => {
                            return (
                                <li key={index} className={styles.networkItem}>
                                    {
                                        connected && connected.index === index ? (
                                            <span style={{padding: '6px 0', display: 'inline-block', fontWeight: 'bold'}}>
                                                Connected to {connected.chainName}: {ellipsisAddress(connected.account)}
                                            </span>
                                        ): (
                                            <button className={styles.networkOption} onClick={() => {
                                                onSelectNetwork(index)
                                            }}>{item.chainName}</button>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </Modal>
            <button className={styles.connectWalletBtn} onClick={() => {
                handleConnectToWallet()
            }}>Connect Wallet
            </button>
        </div>
    )
}

export default ConnectWalletButton;
