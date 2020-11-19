/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ContextContract } from "./Context";
import { Erc20Contract } from "./Erc20";
import { Ierc20Contract } from "./Ierc20";
import { ReentrancyGuardContract } from "./ReentrancyGuard";
import { Ierc20Contract } from "./Ierc20";
import { IUniswapV2CalleeContract } from "./IUniswapV2Callee";
import { IUniswapV2Erc20Contract } from "./IUniswapV2Erc20";
import { IUniswapV2FactoryContract } from "./IUniswapV2Factory";
import { IUniswapV2PairContract } from "./IUniswapV2Pair";
import { UniswapV2Erc20Contract } from "./UniswapV2Erc20";
import { UniswapV2FactoryContract } from "./UniswapV2Factory";
import { UniswapV2PairContract } from "./UniswapV2Pair";
import { Ierc20Contract } from "./Ierc20";
import { IUniswapV2Router01Contract } from "./IUniswapV2Router01";
import { IwethContract } from "./Iweth";
import { UniswapV2Router01Contract } from "./UniswapV2Router01";
import { InxmMasterContract } from "./InxmMaster";
import { InxmTokenContract } from "./InxmToken";
import { IupgradableContract } from "./Iupgradable";
import { MasterAwareContract } from "./MasterAware";
import { DeployerContract } from "./Deployer";
import { IUniswapV2Router01Contract } from "./IUniswapV2Router01";
import { Weth9Contract } from "./Weth9";
import { ExchangeContract } from "./Exchange";
import { FactoryContract } from "./Factory";
import { IClaimsRewardContract } from "./IClaimsReward";
import { IMasterAwareContract } from "./IMasterAware";
import { IMemberRolesContract } from "./IMemberRoles";
import { IPooledStakingContract } from "./IPooledStaking";
import { ITokenControllerContract } from "./ITokenController";
import { ITokenDataContract } from "./ITokenData";
import { ITokenFunctionsContract } from "./ITokenFunctions";
import { DisposableGovernanceContract } from "./DisposableGovernance";
import { DisposableMemberRolesContract } from "./DisposableMemberRoles";
import { DisposableNxMasterContract } from "./DisposableNxMaster";
import { DisposablePooledStakingContract } from "./DisposablePooledStaking";
import { DisposableProposalCategoryContract } from "./DisposableProposalCategory";
import { DisposableTokenControllerContract } from "./DisposableTokenController";
import { Erc20MockContract } from "./Erc20Mock";
import { ExchangeFactoryMockContract } from "./ExchangeFactoryMock";
import { ExchangeMockContract } from "./ExchangeMock";
import { MasterMockContract } from "./MasterMock";
import { MemberRolesMockContract } from "./MemberRolesMock";
import { NxmdsValueMockContract } from "./NxmdsValueMock";
import { NxmTokenMockContract } from "./NxmTokenMock";
import { TokenControllerMockContract } from "./TokenControllerMock";
import { ToMockUniswapPairContract } from "./ToMockUniswapPair";
import { McrContract } from "./Mcr";
import { AggregatorContract } from "./Aggregator";
import { NxmdsValueContract } from "./NxmdsValue";
import { PoolContract } from "./Pool";
import { Pool1Contract } from "./Pool1";
import { Pool2Contract } from "./Pool2";
import { DsValueContract } from "./DsValue";
import { PoolDataContract } from "./PoolData";
import { ClaimProofsContract } from "./ClaimProofs";
import { ClaimsContract } from "./Claims";
import { ClaimsDataContract } from "./ClaimsData";
import { ClaimsRewardContract } from "./ClaimsReward";
import { QuotationContract } from "./Quotation";
import { QuotationDataContract } from "./QuotationData";
import { GovernedContract } from "./Governed";
import { IMasterContract } from "./IMaster";
import { IGovernanceContract } from "./IGovernance";
import { IProposalCategoryContract } from "./IProposalCategory";
import { OwnedUpgradeabilityProxyContract } from "./OwnedUpgradeabilityProxy";
import { ProxyContract } from "./Proxy";
import { UpgradeabilityProxyContract } from "./UpgradeabilityProxy";
import { GovernanceContract } from "./Governance";
import { MemberRolesContract } from "./MemberRoles";
import { NxMasterContract } from "./NxMaster";
import { ProposalCategoryContract } from "./ProposalCategory";
import { OracleAggregatorContract } from "./OracleAggregator";
import { TwapOracleContract } from "./TwapOracle";
import { PooledStakingContract } from "./PooledStaking";
import { Ierc1132Contract } from "./Ierc1132";
import { Ozierc20Contract } from "./Ozierc20";
import { NxmTokenContract } from "./NxmToken";
import { TokenControllerContract } from "./TokenController";
import { TokenDataContract } from "./TokenData";
import { TokenFunctionsContract } from "./TokenFunctions";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Context"): ContextContract;
      require(name: "ERC20"): Erc20Contract;
      require(name: "IERC20"): Ierc20Contract;
      require(name: "ReentrancyGuard"): ReentrancyGuardContract;
      require(name: "IERC20"): Ierc20Contract;
      require(name: "IUniswapV2Callee"): IUniswapV2CalleeContract;
      require(name: "IUniswapV2ERC20"): IUniswapV2Erc20Contract;
      require(name: "IUniswapV2Factory"): IUniswapV2FactoryContract;
      require(name: "IUniswapV2Pair"): IUniswapV2PairContract;
      require(name: "UniswapV2ERC20"): UniswapV2Erc20Contract;
      require(name: "UniswapV2Factory"): UniswapV2FactoryContract;
      require(name: "UniswapV2Pair"): UniswapV2PairContract;
      require(name: "IERC20"): Ierc20Contract;
      require(name: "IUniswapV2Router01"): IUniswapV2Router01Contract;
      require(name: "IWETH"): IwethContract;
      require(name: "UniswapV2Router01"): UniswapV2Router01Contract;
      require(name: "INXMMaster"): InxmMasterContract;
      require(name: "INXMToken"): InxmTokenContract;
      require(name: "Iupgradable"): IupgradableContract;
      require(name: "MasterAware"): MasterAwareContract;
      require(name: "Deployer"): DeployerContract;
      require(name: "IUniswapV2Router01"): IUniswapV2Router01Contract;
      require(name: "WETH9"): Weth9Contract;
      require(name: "Exchange"): ExchangeContract;
      require(name: "Factory"): FactoryContract;
      require(name: "IClaimsReward"): IClaimsRewardContract;
      require(name: "IMasterAware"): IMasterAwareContract;
      require(name: "IMemberRoles"): IMemberRolesContract;
      require(name: "IPooledStaking"): IPooledStakingContract;
      require(name: "ITokenController"): ITokenControllerContract;
      require(name: "ITokenData"): ITokenDataContract;
      require(name: "ITokenFunctions"): ITokenFunctionsContract;
      require(name: "DisposableGovernance"): DisposableGovernanceContract;
      require(name: "DisposableMemberRoles"): DisposableMemberRolesContract;
      require(name: "DisposableNXMaster"): DisposableNxMasterContract;
      require(name: "DisposablePooledStaking"): DisposablePooledStakingContract;
      require(
        name: "DisposableProposalCategory"
      ): DisposableProposalCategoryContract;
      require(
        name: "DisposableTokenController"
      ): DisposableTokenControllerContract;
      require(name: "ERC20Mock"): Erc20MockContract;
      require(name: "ExchangeFactoryMock"): ExchangeFactoryMockContract;
      require(name: "ExchangeMock"): ExchangeMockContract;
      require(name: "MasterMock"): MasterMockContract;
      require(name: "MemberRolesMock"): MemberRolesMockContract;
      require(name: "NXMDSValueMock"): NxmdsValueMockContract;
      require(name: "NXMTokenMock"): NxmTokenMockContract;
      require(name: "TokenControllerMock"): TokenControllerMockContract;
      require(name: "TOMockUniswapPair"): ToMockUniswapPairContract;
      require(name: "MCR"): McrContract;
      require(name: "Aggregator"): AggregatorContract;
      require(name: "NXMDSValue"): NxmdsValueContract;
      require(name: "Pool"): PoolContract;
      require(name: "Pool1"): Pool1Contract;
      require(name: "Pool2"): Pool2Contract;
      require(name: "DSValue"): DsValueContract;
      require(name: "PoolData"): PoolDataContract;
      require(name: "ClaimProofs"): ClaimProofsContract;
      require(name: "Claims"): ClaimsContract;
      require(name: "ClaimsData"): ClaimsDataContract;
      require(name: "ClaimsReward"): ClaimsRewardContract;
      require(name: "Quotation"): QuotationContract;
      require(name: "QuotationData"): QuotationDataContract;
      require(name: "Governed"): GovernedContract;
      require(name: "IMaster"): IMasterContract;
      require(name: "IGovernance"): IGovernanceContract;
      require(name: "IProposalCategory"): IProposalCategoryContract;
      require(
        name: "OwnedUpgradeabilityProxy"
      ): OwnedUpgradeabilityProxyContract;
      require(name: "Proxy"): ProxyContract;
      require(name: "UpgradeabilityProxy"): UpgradeabilityProxyContract;
      require(name: "Governance"): GovernanceContract;
      require(name: "MemberRoles"): MemberRolesContract;
      require(name: "NXMaster"): NxMasterContract;
      require(name: "ProposalCategory"): ProposalCategoryContract;
      require(name: "OracleAggregator"): OracleAggregatorContract;
      require(name: "TwapOracle"): TwapOracleContract;
      require(name: "PooledStaking"): PooledStakingContract;
      require(name: "IERC1132"): Ierc1132Contract;
      require(name: "OZIERC20"): Ozierc20Contract;
      require(name: "NXMToken"): NxmTokenContract;
      require(name: "TokenController"): TokenControllerContract;
      require(name: "TokenData"): TokenDataContract;
      require(name: "TokenFunctions"): TokenFunctionsContract;
    }
  }
}

export { ContextContract, ContextInstance } from "./Context";
export { Erc20Contract, Erc20Instance } from "./Erc20";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export {
  ReentrancyGuardContract,
  ReentrancyGuardInstance,
} from "./ReentrancyGuard";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export {
  IUniswapV2CalleeContract,
  IUniswapV2CalleeInstance,
} from "./IUniswapV2Callee";
export {
  IUniswapV2Erc20Contract,
  IUniswapV2Erc20Instance,
} from "./IUniswapV2Erc20";
export {
  IUniswapV2FactoryContract,
  IUniswapV2FactoryInstance,
} from "./IUniswapV2Factory";
export {
  IUniswapV2PairContract,
  IUniswapV2PairInstance,
} from "./IUniswapV2Pair";
export {
  UniswapV2Erc20Contract,
  UniswapV2Erc20Instance,
} from "./UniswapV2Erc20";
export {
  UniswapV2FactoryContract,
  UniswapV2FactoryInstance,
} from "./UniswapV2Factory";
export { UniswapV2PairContract, UniswapV2PairInstance } from "./UniswapV2Pair";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export {
  IUniswapV2Router01Contract,
  IUniswapV2Router01Instance,
} from "./IUniswapV2Router01";
export { IwethContract, IwethInstance } from "./Iweth";
export {
  UniswapV2Router01Contract,
  UniswapV2Router01Instance,
} from "./UniswapV2Router01";
export { InxmMasterContract, InxmMasterInstance } from "./InxmMaster";
export { InxmTokenContract, InxmTokenInstance } from "./InxmToken";
export { IupgradableContract, IupgradableInstance } from "./Iupgradable";
export { MasterAwareContract, MasterAwareInstance } from "./MasterAware";
export { DeployerContract, DeployerInstance } from "./Deployer";
export {
  IUniswapV2Router01Contract,
  IUniswapV2Router01Instance,
} from "./IUniswapV2Router01";
export { Weth9Contract, Weth9Instance } from "./Weth9";
export { ExchangeContract, ExchangeInstance } from "./Exchange";
export { FactoryContract, FactoryInstance } from "./Factory";
export { IClaimsRewardContract, IClaimsRewardInstance } from "./IClaimsReward";
export { IMasterAwareContract, IMasterAwareInstance } from "./IMasterAware";
export { IMemberRolesContract, IMemberRolesInstance } from "./IMemberRoles";
export {
  IPooledStakingContract,
  IPooledStakingInstance,
} from "./IPooledStaking";
export {
  ITokenControllerContract,
  ITokenControllerInstance,
} from "./ITokenController";
export { ITokenDataContract, ITokenDataInstance } from "./ITokenData";
export {
  ITokenFunctionsContract,
  ITokenFunctionsInstance,
} from "./ITokenFunctions";
export {
  DisposableGovernanceContract,
  DisposableGovernanceInstance,
} from "./DisposableGovernance";
export {
  DisposableMemberRolesContract,
  DisposableMemberRolesInstance,
} from "./DisposableMemberRoles";
export {
  DisposableNxMasterContract,
  DisposableNxMasterInstance,
} from "./DisposableNxMaster";
export {
  DisposablePooledStakingContract,
  DisposablePooledStakingInstance,
} from "./DisposablePooledStaking";
export {
  DisposableProposalCategoryContract,
  DisposableProposalCategoryInstance,
} from "./DisposableProposalCategory";
export {
  DisposableTokenControllerContract,
  DisposableTokenControllerInstance,
} from "./DisposableTokenController";
export { Erc20MockContract, Erc20MockInstance } from "./Erc20Mock";
export {
  ExchangeFactoryMockContract,
  ExchangeFactoryMockInstance,
} from "./ExchangeFactoryMock";
export { ExchangeMockContract, ExchangeMockInstance } from "./ExchangeMock";
export { MasterMockContract, MasterMockInstance } from "./MasterMock";
export {
  MemberRolesMockContract,
  MemberRolesMockInstance,
} from "./MemberRolesMock";
export {
  NxmdsValueMockContract,
  NxmdsValueMockInstance,
} from "./NxmdsValueMock";
export { NxmTokenMockContract, NxmTokenMockInstance } from "./NxmTokenMock";
export {
  TokenControllerMockContract,
  TokenControllerMockInstance,
} from "./TokenControllerMock";
export {
  ToMockUniswapPairContract,
  ToMockUniswapPairInstance,
} from "./ToMockUniswapPair";
export { McrContract, McrInstance } from "./Mcr";
export { AggregatorContract, AggregatorInstance } from "./Aggregator";
export { NxmdsValueContract, NxmdsValueInstance } from "./NxmdsValue";
export { PoolContract, PoolInstance } from "./Pool";
export { Pool1Contract, Pool1Instance } from "./Pool1";
export { Pool2Contract, Pool2Instance } from "./Pool2";
export { DsValueContract, DsValueInstance } from "./DsValue";
export { PoolDataContract, PoolDataInstance } from "./PoolData";
export { ClaimProofsContract, ClaimProofsInstance } from "./ClaimProofs";
export { ClaimsContract, ClaimsInstance } from "./Claims";
export { ClaimsDataContract, ClaimsDataInstance } from "./ClaimsData";
export { ClaimsRewardContract, ClaimsRewardInstance } from "./ClaimsReward";
export { QuotationContract, QuotationInstance } from "./Quotation";
export { QuotationDataContract, QuotationDataInstance } from "./QuotationData";
export { GovernedContract, GovernedInstance } from "./Governed";
export { IMasterContract, IMasterInstance } from "./IMaster";
export { IGovernanceContract, IGovernanceInstance } from "./IGovernance";
export {
  IProposalCategoryContract,
  IProposalCategoryInstance,
} from "./IProposalCategory";
export {
  OwnedUpgradeabilityProxyContract,
  OwnedUpgradeabilityProxyInstance,
} from "./OwnedUpgradeabilityProxy";
export { ProxyContract, ProxyInstance } from "./Proxy";
export {
  UpgradeabilityProxyContract,
  UpgradeabilityProxyInstance,
} from "./UpgradeabilityProxy";
export { GovernanceContract, GovernanceInstance } from "./Governance";
export { MemberRolesContract, MemberRolesInstance } from "./MemberRoles";
export { NxMasterContract, NxMasterInstance } from "./NxMaster";
export {
  ProposalCategoryContract,
  ProposalCategoryInstance,
} from "./ProposalCategory";
export {
  OracleAggregatorContract,
  OracleAggregatorInstance,
} from "./OracleAggregator";
export { TwapOracleContract, TwapOracleInstance } from "./TwapOracle";
export { PooledStakingContract, PooledStakingInstance } from "./PooledStaking";
export { Ierc1132Contract, Ierc1132Instance } from "./Ierc1132";
export { Ozierc20Contract, Ozierc20Instance } from "./Ozierc20";
export { NxmTokenContract, NxmTokenInstance } from "./NxmToken";
export {
  TokenControllerContract,
  TokenControllerInstance,
} from "./TokenController";
export { TokenDataContract, TokenDataInstance } from "./TokenData";
export {
  TokenFunctionsContract,
  TokenFunctionsInstance,
} from "./TokenFunctions";
