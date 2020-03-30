---
id: wiki-us-staking-power
title: Staking Power
sidebar_label: Staking Power
---

The Hash Rate is used in Proof-of-work (PoW) blockchain system, such as Bitcoin, the value of the hash rate stands for the computing power provided by the account.  And the reward of the account in the POW system is based on the hash rate.  

In Darwinia Network, the ability to elongate blockchain to get the token rewards is not by the computing power but by the entity having a larger amount of RING and KTON pledged.  This mechanism is named as Nominated Proof-of-Stake (NPoS), it is one of the Proof-of-Stake (PoS) mechanisms.  Herein, the Staking Hash Rate can be analogized to the Hash Rate in PoW and be used to represent the current contribution of Hash Rate of a certain account. The security of PoW system is provided by computing power competition, but it is wasted computing power and time-consuming. The security of PoS system is provided by the service or product provider using the utility tokens with higher frequency or larger volume.

In detail, there are two roles of the NPoS mechanism, the validator, and the nominator, and a time period for a completed process of an NPoS mechanism is an era.  A validator can hold an entity in an era (a period of time), and nominators can participate in it.  The era is a period of time around 1 week will be delayed or ahead based on the different network and computing environments of the participants.  An account participating in Darwinia Network can be a validator or a nominator at free will, but only one role in the one era.  

In other words, a validator is the leader of the entity to obtain the token rewards, and a nominator can use the pledged RING and KTON to partake one or more validators to help the entity become a larger entity with more pledged RING and KTON.  Therefore, there is only one validator in the entity, and a nominator can belong to one or more entities base on the pledged RING and KTON his participating.  The action that a nominator decides to use his pledged RING and KTON to partake one or more validators is called voting in NPoS mechanism.  After voting, the small amounts of entities with the largest number of pledged RING and KTON will be selected, and the validators of the selected entities are the elected validators.  There may be some nominators belonging to one or more selected entities.  Only the elected validators have the right to elongate the blockchain of Darwinia Network in the era, so the token rewards are only given to the validators and the nominators of the small amounts entities.  If the elected validator is not diligent on elongating the blockchain of Darwinia Network, all pledged RING and KTON of that entity will be automatically destroyed by the system within the Darwinia Network. Besides, the validator can decide the token reward portions between the validator and the nominators before the voting.  In general, the validators and nominators are service providers or manufacturers, they provide their service and use RING as a utility token to exchange their services or their products.  The difference between the validators and nominators is not on the service they provide, but based on the Hash Rate they contribute to the Darwinia Network.  The validators provide Hash Rate to the Darwinia Network directly, and the nominators will provide the same indirectly by voting for higher quality validators. An account that usually heavily relies on the RING to exchange his or their services or provides services with a larger value of RING will join the Darwinia Network with better infrastructure.  An account using less RING to exchange their services with can also participate with the Darwinia Network by voting better validators with good infrastructures. The business of account using RING to provide a service may change in a different time period, so the Darwinia Network allows the account to change the roles between nominators and validators easily.  As mentioned before, the PoS has advanced on calculating power and time consuming than the PoW, the NPoS mechanism used in Darwinia Network comparing with the pure PoS system can be better, due to only small amounts of elected validators participating in the elongation process.  On the other hand, the small amounts of elected validators can take a good balance between the robustness of the system and the efficiency.

In an era, the validators provide one or more computation nodes with network accessibility to act as a web and network service provider in order to help the users of Darwinia Network to insert and query the data in the Darwinia Network, so the benefits from this service will be given to the network users. After the era, additional RING (as token rewards) that are generated on the Platform is separated into two equal portions. One is for the nominators and the validators who pledged RING, another is for the nominators and the validators who pledged KTON.  And then, each portion will send to the selected entities based on the percentage of pledged RING and the percentage of pledged KTON.  And then the token rewards of each entity will be sent to the validator and the nominators in the entity based on the benefits portion decided before the voting. The aforementioned process is performed automatically by the Darwinia Network without operation from validators.  Besides, another voting process will be performed, such that there will be newly elected validators to elongate the blockchain of Darwinia Network in the next era.

In other words, the token rewards received by an account are based on the portions, and the portion can be present as the Staking Hash Rate.  

- The Staking hash rate for a certain account represents the current contribution of this account.
- The staking hash rate can be analogized to the Hash Rate in POW. 
- The staking hash rate for each account is determined by the amount of pledged RING and KTON, once unpledged, corresponding hash rate provided to the Darwinia Network will vanish. 
  
The Staking hash rate for an account is constantly changing with the amount of tokens pledged.  Staking Participants can change their voting validator without unpledging tokens.  Staking Hash Rate may play an important role in system governance (Note 2). 

Staking Hash Rate Percentage is the Staking Hash Rate Proportion of one account to Total Staking Hash Rate (THE).

    Staking Hash Rate = Total Staking Hash Rate（THE） × Staking Hash Rate Percentage
    Staking Hash Rate Percentage for THE account =  Staking Hash Rate Percentage(RING) + Staking Hash Rate Percentage(KTON)

Staking benefit of THE account:

    Staking benefit of THE account = (Total  number of additional RING generated on the Darwinia Network × Y) × Staking Hash Rate Percentage for THE account

Voting weight formula for THE account:

    Voting weight = Total Voting weight ×  Staking Hash Rate Percentage for THE account

Remark 1: Default hash rate Contribution ratio of RING is 0.5.

Remark 2: Because KTONs can be sold on the secondary market, it may not fully represent long term commitments. Only pledged “tokens×days” can accurately represent the commitment to Darwinia’s network. 