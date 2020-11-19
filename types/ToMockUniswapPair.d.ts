/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ToMockUniswapPairContract
  extends Truffle.Contract<ToMockUniswapPairInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ToMockUniswapPairInstance>;
}

type AllEvents = never;

export interface ToMockUniswapPairInstance extends Truffle.ContractInstance {
  blockTimestampLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getReserves(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN, BN]>;

  price0CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  price1CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  reserve0(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  reserve1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  setCumulativePrices: {
    (
      _price0CumulativeLast: number | BN | string,
      _price1CumulativeLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _price0CumulativeLast: number | BN | string,
      _price1CumulativeLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _price0CumulativeLast: number | BN | string,
      _price1CumulativeLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _price0CumulativeLast: number | BN | string,
      _price1CumulativeLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setReserves: {
    (
      _reserve0: number | BN | string,
      _reserve1: number | BN | string,
      _blockTimestampLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve0: number | BN | string,
      _reserve1: number | BN | string,
      _blockTimestampLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve0: number | BN | string,
      _reserve1: number | BN | string,
      _blockTimestampLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve0: number | BN | string,
      _reserve1: number | BN | string,
      _blockTimestampLast: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    blockTimestampLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getReserves(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN, BN]>;

    price0CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    price1CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    reserve0(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    reserve1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    setCumulativePrices: {
      (
        _price0CumulativeLast: number | BN | string,
        _price1CumulativeLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _price0CumulativeLast: number | BN | string,
        _price1CumulativeLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _price0CumulativeLast: number | BN | string,
        _price1CumulativeLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _price0CumulativeLast: number | BN | string,
        _price1CumulativeLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setReserves: {
      (
        _reserve0: number | BN | string,
        _reserve1: number | BN | string,
        _blockTimestampLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve0: number | BN | string,
        _reserve1: number | BN | string,
        _blockTimestampLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve0: number | BN | string,
        _reserve1: number | BN | string,
        _blockTimestampLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve0: number | BN | string,
        _reserve1: number | BN | string,
        _blockTimestampLast: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}