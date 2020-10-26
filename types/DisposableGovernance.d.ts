/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DisposableGovernanceContract
  extends Truffle.Contract<DisposableGovernanceInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<DisposableGovernanceInstance>;
}

export interface ActionSuccess {
  name: "ActionSuccess";
  args: {
    proposalId: BN;
    0: BN;
  };
}

export interface CloseProposalOnTime {
  name: "CloseProposalOnTime";
  args: {
    proposalId: BN;
    time: BN;
    0: BN;
    1: BN;
  };
}

export interface Proposal {
  name: "Proposal";
  args: {
    proposalOwner: string;
    proposalId: BN;
    dateAdd: BN;
    proposalTitle: string;
    proposalSD: string;
    proposalDescHash: string;
    0: string;
    1: BN;
    2: BN;
    3: string;
    4: string;
    5: string;
  };
}

export interface ProposalAccepted {
  name: "ProposalAccepted";
  args: {
    proposalId: BN;
    0: BN;
  };
}

export interface RewardClaimed {
  name: "RewardClaimed";
  args: {
    member: string;
    gbtReward: BN;
    0: string;
    1: BN;
  };
}

export interface Solution {
  name: "Solution";
  args: {
    proposalId: BN;
    solutionOwner: string;
    solutionId: BN;
    solutionDescHash: string;
    dateAdd: BN;
    0: BN;
    1: string;
    2: BN;
    3: string;
    4: BN;
  };
}

export interface Vote {
  name: "Vote";
  args: {
    from: string;
    proposalId: BN;
    voteId: BN;
    dateAdd: BN;
    solutionChosen: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
    4: BN;
  };
}

export interface VoteCast {
  name: "VoteCast";
  args: {
    proposalId: BN;
    0: BN;
  };
}

type AllEvents =
  | ActionSuccess
  | CloseProposalOnTime
  | Proposal
  | ProposalAccepted
  | RewardClaimed
  | Solution
  | Vote
  | VoteCast;

export interface DisposableGovernanceInstance extends Truffle.ContractInstance {
  allDelegation(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[string, string, BN]>;

  allowedToCatgorize(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  canCloseProposal(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  categorizeProposal: {
    (
      arg0: number | BN | string,
      arg1: number | BN | string,
      arg2: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      arg1: number | BN | string,
      arg2: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      arg1: number | BN | string,
      arg2: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      arg1: number | BN | string,
      arg2: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  changeDependentContractAddress: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  changeMasterAddress: {
    (_masterAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  claimReward: {
    (
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  closeProposal: {
    (
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  createProposal: {
    (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  createProposalwithSolution: {
    (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      arg4: string,
      arg5: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      arg4: string,
      arg5: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      arg4: string,
      arg5: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number | BN | string,
      arg4: string,
      arg5: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  followerDelegation(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  initialize: {
    (
      _tokenHoldingTime: number | BN | string,
      _maxDraftTime: number | BN | string,
      _maxVoteWeigthPer: number | BN | string,
      _maxFollowers: number | BN | string,
      _specialResolutionMajPerc: number | BN | string,
      _actionWaitingTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenHoldingTime: number | BN | string,
      _maxDraftTime: number | BN | string,
      _maxVoteWeigthPer: number | BN | string,
      _maxFollowers: number | BN | string,
      _specialResolutionMajPerc: number | BN | string,
      _actionWaitingTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenHoldingTime: number | BN | string,
      _maxDraftTime: number | BN | string,
      _maxVoteWeigthPer: number | BN | string,
      _maxFollowers: number | BN | string,
      _specialResolutionMajPerc: number | BN | string,
      _actionWaitingTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenHoldingTime: number | BN | string,
      _maxDraftTime: number | BN | string,
      _maxVoteWeigthPer: number | BN | string,
      _maxFollowers: number | BN | string,
      _specialResolutionMajPerc: number | BN | string,
      _actionWaitingTime: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isOpenForDelegation(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  lastRewardClaimed(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  memberProposalVote(
    arg0: string,
    arg1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  ms(txDetails?: Truffle.TransactionDetails): Promise<string>;

  nxMasterAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  proposal(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN, BN, BN, BN]>;

  proposalActionStatus(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  proposalRejectedByAB(
    arg0: number | BN | string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  proposalVoteTally(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  rewardClaimed(
    arg0: number | BN | string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  submitProposalWithSolution: {
    (
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  submitVote: {
    (
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  tokenHoldingTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  updateProposal: {
    (
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      arg3: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      arg3: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      arg3: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      arg0: number | BN | string,
      arg1: string,
      arg2: string,
      arg3: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    allDelegation(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[string, string, BN]>;

    allowedToCatgorize(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    canCloseProposal(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    categorizeProposal: {
      (
        arg0: number | BN | string,
        arg1: number | BN | string,
        arg2: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        arg1: number | BN | string,
        arg2: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        arg1: number | BN | string,
        arg2: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        arg1: number | BN | string,
        arg2: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    changeDependentContractAddress: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    changeMasterAddress: {
      (_masterAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    claimReward: {
      (
        arg0: string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        arg0: string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    closeProposal: {
      (
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    createProposal: {
      (
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    createProposalwithSolution: {
      (
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        arg4: string,
        arg5: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        arg4: string,
        arg5: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        arg4: string,
        arg5: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: string,
        arg1: string,
        arg2: string,
        arg3: number | BN | string,
        arg4: string,
        arg5: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    followerDelegation(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    initialize: {
      (
        _tokenHoldingTime: number | BN | string,
        _maxDraftTime: number | BN | string,
        _maxVoteWeigthPer: number | BN | string,
        _maxFollowers: number | BN | string,
        _specialResolutionMajPerc: number | BN | string,
        _actionWaitingTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenHoldingTime: number | BN | string,
        _maxDraftTime: number | BN | string,
        _maxVoteWeigthPer: number | BN | string,
        _maxFollowers: number | BN | string,
        _specialResolutionMajPerc: number | BN | string,
        _actionWaitingTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenHoldingTime: number | BN | string,
        _maxDraftTime: number | BN | string,
        _maxVoteWeigthPer: number | BN | string,
        _maxFollowers: number | BN | string,
        _specialResolutionMajPerc: number | BN | string,
        _actionWaitingTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenHoldingTime: number | BN | string,
        _maxDraftTime: number | BN | string,
        _maxVoteWeigthPer: number | BN | string,
        _maxFollowers: number | BN | string,
        _specialResolutionMajPerc: number | BN | string,
        _actionWaitingTime: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isOpenForDelegation(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    lastRewardClaimed(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    memberProposalVote(
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    ms(txDetails?: Truffle.TransactionDetails): Promise<string>;

    nxMasterAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    proposal(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN, BN, BN, BN]>;

    proposalActionStatus(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    proposalRejectedByAB(
      arg0: number | BN | string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    proposalVoteTally(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    rewardClaimed(
      arg0: number | BN | string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    submitProposalWithSolution: {
      (
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    submitVote: {
      (
        arg0: number | BN | string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        arg1: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    tokenHoldingTime(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    updateProposal: {
      (
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        arg3: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        arg3: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        arg3: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        arg0: number | BN | string,
        arg1: string,
        arg2: string,
        arg3: string,
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