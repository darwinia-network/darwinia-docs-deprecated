---
id: wiki-bridge-security-mechanism
title: Security Mechanism
sidebar_label: Security Mechanism
---
At the beginning of the Darwinia-Ethereum bidirectional bridge, we applied several security modules.

# Daily Cross-Chain Transfer Limit

A daily transfer limit is set.  Once the limit is reached, the bridge will suspend service.  The used quota will be reset and the service will re-activate after 24 hours.

# Guardian Module

A guardian system is introduced in the bi-directional bridge.  It is a multi-signature system composed of the technical committee members of Darwinia network. Their sole responsibility is to monitor the block data submitted by the bridge miners(relayers) and watch the optimistic verification game process. In the event of an accident, such as an error block header is not successfully challenged for the absence of honest miners or MMR calculation errors, the guardians will kick in and flag the block as illegal after the multi-signature operation. The guardian system can ensure that no false verification occurs, and the verification game enters the next round until it succeeds. The guardian system can only invalidate error block header.  It cannot access the user assets locked in the module.

With the iteration of the development, and the contracts auditing, the daily transfer limit will be gradually increased, and eventually removed together with the guardian system.
