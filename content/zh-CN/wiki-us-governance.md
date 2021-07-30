---
id: wiki-us-governance
title: Governance
sidebar_label: Governance
---

## 简介

Darwinia 网络的治理机制和手段都源于 [波卡](https://wiki.polkadot.network/docs/learn-governance/)。

治理的目标是，确保 “大多数 stake” 始终可以控制网络。

为了达到这个目标，对Darwinia 网络协议的所有更改都必须通过 “stake加权（stake-weighted）的全民公投” 来达成一致后才能做出。

## 机制

由 `公众`（活跃的代币持有者） 和 `议会` 一起来管理网络升级决策。 无论提案是由 `公众` 还是 `议会` 提出，最终都必须经过`全民公投`（referendum），让所有持有者按权益权重做出决定。 

## 公投

公投是简单、包容、基于 stake 的投票方案。

每次公投都有一个与之相关的特定提案，该提案的内容是 “执行某个运行时call”（其中最强大的 call 是：`set_code`，它能够切换运行时的整个代码）。

每次公投有一个固定的投票时间，然后进行统计，如果投票获得批准则进行 “执行call”。 公投总是二元的，您要么投“同意”，要么投“反对” 或 完全弃权。

可以通过以下几种方式之一开始一次公投：

- `公众`提案（公众提议举行公投）；
- `议会`动议（议会提议举行公投）；
- 作为前序公投执行的一部分而提交的提案；
- 由`技术委员会`提交并经`议会`批准的`紧急提案`。

所有公投都有会有个延迟颁布的时间（enactment delay）。 这是公投结束与生效之间的时间段。 对于发起公投的前两种方式，这是一个固定的时间。 **在 Crab 网络中是 8 天；在 Darwinia 网络中是 28 天**。 对于第三种类型，可以根据需要进行设置。

`紧急提案` 被用来处理哪些需要被 "fast-tracked" 的重大问题。这种`紧急提案`将有更短的颁布时间。

### 提议举行公投（Proposing a Referendum）

#### 公众提议举行公投（公众提案 / Democracy proposal）

任何人都可以通过在一定时期内（区块数量）存入最低数量的代币来提议举行公投。 如果有人同意该提案，他们可能会存入**相同数量**的代币来支持它——这个动作被称为附议。 支持率（存入的代笔数量）最高的提案将被选为下一个投票周期的公投。

请注意，计算附议不是计算账户数； 例如，三个账户每个绑定 20 RING 将“超过”十个账户每个绑定一个 RING。 一旦提案被提交（即进入投票阶段），这些附议的代币将被释放。

公众提案队列中最多可以有 100 个提案。

#### 议会提议举行公投（议会动议 / Council motion）

议会动议由议会成员提出。

全体同意的提案 - 当 `议会` 所有成员都同意一项提案时，提案会被移至全民公投。 本次公投将产用负投票率偏差（即，投票数量越小，其通过所需的票数就越少——请参阅下面的“自适应投票人数偏差”）。

多数同意的提案 - 当仅获得简单多数 `议会` 成员的同意时，也可以进入全民公投，但需要在公投中获得以多数票支持才能被通过（51% 获胜）。

不管是公众提案还是议会提案，在任何给定时间只能进行一次有效的公投，除非还有正在进行的紧急公投。

**只有议会的提议才能被加速。**

#### 公投投票时间线s

在 Darwinia 上每 28 天或在 Crab 上每 7 天，就会进行一次新的公投进行投票，前提是其中一个队列中至少有一个提案。 有一个议会提案队列和一个公众提案队列。 在两个队列中的最高提案之间交替进行。

要投票，选民的代币至少在公投结束后的颁布延迟期（enactment delay）内会被锁定锁定。 这是为了确保投票结果需要一些最低限度的经济投入，并避免卖票行为。

![timeline](assets/wiki-us-governance-timeline.png)

你还可以选择锁定更长时间来获得更多的选票（时间越长，计算选票时的乘数越大）。如果你愿意投入时间来锁定，持有少量代币也有可能影响公投结果。你可以在自愿锁定（Voluntary Locking）中了解更多，比如下面的例子：

```markdown
Peter: 用 10 个 RING 投票了反对票，锁定 128 周，那么他的实际票数是 => 10 * 6 = 60 Votes
Logan: 用 20 个 RING 投票了赞成票，锁定 4   周，那么他的实际票数是 => 20 * 1 = 20 Votes
Kevin: 用 15 个 RING 投票了赞成票，锁定 8   周，那么他的实际票数是 => 15 * 2 = 30 Votes
```

尽管 Logan 和 Kevin 投入的代币都比 Peter 多，但两人的锁定期都比 Peter 少，导致他们的投票比 Peter 少。

#### 计票机制

根据不同的实体（`公众` 或 `议会`）提出的议案，以及是否所有 `议会` 成员都投票赞成，有三种不同的方案。我们可以参考下表。

| 类型                | 计票机制                      |
| ------------------- | ----------------------------- |
| 公众提案            | 正投票率偏差 (绝对多数赞成制) |
| 议会提案 (全体同意) | 负投票率偏差 (绝对多数反对制) |
| 议会提案 (多数同意) | 简单多数制                    |

例如，让我们以公众提案为例，应用绝对多数赞成（Super-Majority Approve）公式。没有严格的法定投票人数，但随着投票率的降低，所需的绝对多数席位会增加。

下面，我们使用下面列出的公式之一来计算投票结果。

我们先准备以下信息：

```markdown
approve（赞成） - 赞成票数（aye）
against（反对） - 反对票数（nay）
turnout（投票率） - 投票的代币总数，does not include conviction
electorate（总投票数） - 代币发行总量
```

**绝对多数赞成制（Super-Majority Approve）**

正投票率偏差，需要在投票率低的情况下获得**绝对多数赞成票**，但当投票率增加至100％时,它其实就变成了最后一种简单多数的情况。

<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D" style="width:200px !important" />

**绝对多数反对制（Super-Majority Against）**

负投票率偏差，需要在投票率低的情况下获得**绝对多数反对票**，但是当投票率增加到100％时，它就变成了最后一种简单多数的情况。

<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D" style="width:200px !important" />

**简单多数制（Simple-Majority）**

多数票通过，票数的简单比较；如果赞成票多于反对票，那么该提案将获得通过，无论提案中有多少票。

<img src="https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D" style="width:200px !important" />

**简单多数制（Simple-Majority）**

多数票通过，票数的简单比较；如果赞成票多于反对票，那么该提案将获得通过，无论提案中有多少票。

![https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D](https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D)

*要了解有关上述公式来源的更多信息，请阅读 [democracy pallet](https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs).*

[Subscan](https://darwinia.subscan.io/) 提供了很方便的视图来查看投票计数的详细信息，如下面的**绝对多数赞成制**例子：

![timeline](assets/wiki-us-governance-subscan.png)

Subscan 中查看公投详情

#### 自愿锁定（Voluntary Locking）

达尔文采用了波卡设计的一种称为`自愿锁定`的方式，允许代币持有者声明愿意锁定自己的代币多长时间来增加其投票数，因此，每个代币持有者的投票数将通过以下公式计算：

```markdown
投票数 = 代币数量 * 信仰乘数（conviction_multiplier ）
```

锁定期每翻倍一次，信仰乘数会增加1。

| Lock Periods | Vote Multiplier |
| ------------ | --------------- |
| 0            | 0.1             |
| 1            | 1               |
| 2            | 2               |
| 4            | 3               |
| 8            | 4               |
| 16           | 5               |
| 32           | 6               |

锁定期的最大信仰乘数为 6（因此总共有 32 个锁定期），一个锁定期在 Darwinia 上等于 28 天，在 Crab 上等于 8 天（这个时间长度是和颁布延迟期保持一致）。 只允许加倍； 例如，您不能锁定 24 个周期并将您的信念增加 5.5。

当代币被锁定时，您仍然可以使用它进行 voting 和 staking； 您只被禁止将这些代币转移到另一个帐户。

无论代币被锁定多长时间，投票仍会同时“计数”（在投票期结束时）。

#### 自适应投票人数偏差

这是由波卡提出的概念，详见 [波卡 Adaptive Quorum Biasing](https://wiki.polkadot.network/docs/learn-governance/#adaptive-quorum-biasing)

# 议会

`议会` 代表被动的利益相关者。`议会` 是一个由多个参与者组成的链上实体，每个参与者代表一个链上账户。目前在 Darwinia 和 Crab 上，`议会` 由 7 名成员组成。

除了**控制国库**，`议会` 主要被要求执行三项治理任务：**提出明智的公投、取消毫无争议的危险或恶意的公投以及选举** `技术委员会`。

对于 `议会` 提议的公投，必须获得绝对多数成员的赞成，没有成员行使否决权。 成员对任何一项提案只能行使一次否决权； 如果在冷静期（ Darwinia 和 Crab 都是 7 天）后重新提交提案，他们可能不会再次否决它。

对于 `议会` 以绝对多数票（3/5）通过，但未获得一致支持的动议（Motion），将以中立、多数票通过的投票方案进行公众公投。如果 `议会` 的所有成员都投票赞成某项动议，则该投票被认为是一致通过的，并成为具有负自适应投票人数偏差（negative adaptive quorum biasing）的公投。

### 取消

如果技术委员会一致同意，或者如果 Root origin（例如 sudo）触发此功能，则可以取消提案。 已取消提案的押金将被 burned。

此外，`议会` 三分之二多数可以取消公投。 如果在公投提案中发现问题（例如议案将执行的 runtime 代码中有 bug），则这可能是最后的手段。

如果取消公投的争议很大，以至于 `议会` 无法获得三分之二多数同意，那么将由利益相关者集体决定提案的命运。

### 列入黑名单

提案可以被 Root origin（例如 sudo）列入黑名单。 列入黑名单的提案及其相关公投（如果有）将立即取消。 此外，列入黑名单的提案的哈希不能重新出现在提案队列中。 黑名单在删除可能使用相同哈希提交的错误提案时很有用。

提交者在看到他们的提案被删除后，没有正确了解这套民主系统的提交者可能会被诱惑重新提交相同的提案。 也就是说，这远不是防止提交无效提案的万无一失的方法 - 提案文本中的单个更改字符也会更改提案的哈希值，从而使每个哈希值的黑名单无效。

### 如何成为 `议会` 成员？

所有利益相关者（stakeholders）都可以自由地表示他们对任何注册候选人的认可。

议会选举方式和选举验证者的方式相同（Phragmén 选举算法）。但是要，代币持有人对议员的投票，与他们对验证人的任何提名是分开的。议员任期在 Crab 上持续一天，在 Darwinia 上持续一周。

在每个任期结束时，Phragmén 选举算法运行，结果将根据所有选民的投票选择新的议员。 选举还选择了一定数量的 runners up（目前在 Crab 上为 7 位，在 Polkadot 上为 5 位），他们将留在队列中（并保持投票数不变）。

与选民只能从名单中投票给一名候选人的“先入为主”的选举制度相反，Phragmén 选举是一种更具表现力的方式来包含每个选民的意见。 代币持有者可以将其视为一种支持尽可能多的候选人的方式。 选举算法将找到一个公平的候选人子集，该子集与整个选民的表达最匹配。

### Prime Members

`议会` 是 [Substrate's Collective pallet](https://github.com/paritytech/substrate/tree/master/frame/collective) 的实例，实现了所谓的 prime member，该成员的投票将作为其他在超时之前未投票的成员的默认投票。

主要成员是根据 [Borda count](https://en.wikipedia.org/wiki/Borda_count) 选择的。

`议会` Prime Members 存在的目的，是即使在数名成员弃票时，也能确保投票人数。`议会` 成员可能会通过不投票而让其他成员投票，来表决 “软拒绝” 或 “软赞成”。有了 Prime Members，它迫使`议会` 成员要么在投票中表现得很明确，要么让自己的选票计入 Prime Members 所投的票中。

## 技术委员会

`技术委员会` 由成功实施 Darwinia/Crab 运行时或 达尔文 Host 的团队组成。 通过 `议会` 的简单多数投票，可以从技术委员会中添加或删除成员。

`技术委员会` 可以与 `议会` 一起制定紧急公投（Emergency Referenda），可以快速进行投票和实施。它们用于紧急错误修复，或将经过实战考验的新功能快速添加到运行时中。

快速公投（fast-tracked referenda）是唯一可以与其他有效公投同时进行的公投类型。因此，通过快速公投，可以同时进行两个有效的公投。对一个进行投票不会阻止用户对另一个进行投票。

## 资料

[Democracy快速治理升级操作流程(Emergency Referenda)](https://www.notion.so/Democracy-Emergency-Referenda-3ef76248a03e4a7db1be15eedb719f82) 

[使用 Subscan 进行 Darwinia 治理的教程](https://www.notion.so/Subscan-Darwinia-35e61e203dec49e48a317d6ccf59b868)
