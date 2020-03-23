---
id: crab-tut-validator
title: 如何成为验证人
sidebar_label: 成为验证人
custom_edit_url: https://github.com/darwinia-network/docs/edit/master/content/zh-CN/crab-tut-validator.md
---

## 检查地址

进入Darwinia Web Wallet ，确保您已经有2个可用地址，包含上述Session key。

将当前账户切换为保管资产的Stash 地址。

## Staking

左侧菜单栏`节点`，点击`开始Staking`

> Validator请选择`节点`，Nominator请选择`投票`，“投票者” 和 “验证节点” 两种身份互斥。

弹出`冻结资产`窗口，可冻结RING/KTON，设置冻结参数。

> `Controller Account`用于管理验证、投票等活动，不可重复使用。  
> `Payment Destination`用于获取收益的地址。  
> `Value Bonded`输入需要冻结的数量（精度为9）和资产种类（RING/KTON）。  
> `Lock Limit`冻结期限可设置3-36月的时长，冻结后将获得额外的KTON奖励。  
> `You Will Get`根据您设置的冻结资产数量和期限，作出的Power/KTON预估。

## 增加冻结/解冻

左侧菜单栏`投票`页`Power管理`中，点击`冻结`新增更多冻结资产，点击`解冻`解冻资产。

> `解冻中`的资产有14天的解冻期，解冻期过后会自动发放到账户`可用资产`中。
>
> 有锁定期限的RING，请先至左侧菜单栏`资产`冻结历史中，解除时间上的锁定限制，再返回本页，使用解冻资产。
>
> 提前解锁有锁定期限的RING，需要支付KTON奖励3倍的罚款。

## Set Session Key

Bonded资产后，将进入Set Session Key流程。

在此处填入生成好的Session Key，生成方式见`启动节点`-`生成Session Key`。

> 您可暂时跳过，在确保节点稳定运行后再设置。
>
> 一定要绑定真实的Session Key，参与验证前务必确保节点正在运行，否则可能会因漏块受到惩罚。

## 参加竞选

设置节点参数，参与节点竞选。参与验证前，务必确保节点正在运行

> `Node Name`节点名称  
> `Reward Commission`节点自留收益的比重（此部分将不与投票者分成，由节点独享）

**现在，您可以去「Explorer」 查看您的节点啦！竞选信息每1000个块/era会更新一次，因此页面数据可能出现延迟，属正常现象。**