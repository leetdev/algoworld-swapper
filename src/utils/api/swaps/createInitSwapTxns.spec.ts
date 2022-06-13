import createInitSwapTxns from './createInitSwapTxns';
import { ChainType } from '../../../models/Chain';
import { Asset } from '../../../models/Asset';
import { INCENTIVE_WALLET as TEST_WALLET } from '../../../common/constants';
import WalletConnect from '@walletconnect/client';
import { LogicSigAccount } from 'algosdk';

jest.mock(`@walletconnect/client`);
jest.mock(`algosdk`);

const mockedWalletConnect = new (<jest.Mock<WalletConnect>>WalletConnect)();
const mockedEscrowAccount = new (<jest.Mock<LogicSigAccount>>LogicSigAccount)();

describe(`createInitSwapTxns`, () => {
  it(`should return expected init swap txns`, async () => {
    const fundingFee = 100;
    const dummyAsset = {
      index: 123,
      creator: TEST_WALLET,
      name: `test`,
      imageUrl: `test`,
      decimals: 6,
      unitName: `TEST`,
      amount: 1,
      frozen: false,
      offeringAmount: 1,
      requestingAmount: 1,
    } as Asset;

    const txns = await createInitSwapTxns(
      ChainType.TestNet,
      TEST_WALLET,
      mockedWalletConnect,
      mockedEscrowAccount,
      fundingFee,
      [dummyAsset],
    );
    expect(txns).toBeCalledTimes(1);
  });
});
