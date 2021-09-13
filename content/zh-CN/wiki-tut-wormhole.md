---
id: wiki-tut-wormhole
title: 虫洞用户指南
sidebar_label: 虫洞用户指南
---

## 名词释义

源网络： 跨链转账中资金转出账户所在的网络。

目标网络：跨链转账中资金转入账户所在的网络。

## 网络

在跨链转账前，你必须设置正确的源网络和目标网络。 当源网络未选择时，你将无法看到任何与转账相关的表单选项。 当目标网络未选择时，部分表单选项将无法使用，转账操作将无法完成。

### 网络选择

![Network Selection](assets/tut/wiki-tut-wormhole-user-guide-01_zh.png)

源网络：点击顶部网络选择源网络。

目标网络：点击底部网络选择目标网络。

- 先选择源网络还是先选择目标网络完全取决于你。需要注意的是，当您选择了源网络后，目标网络的数量和类型将发生相应的变化，目标网络菜单中将只会显示那些可以从所选的源网络发生跨链转账的网络。反之，如果你先选择了目标网络，那么源网络菜单中可选择的网络也会相应的改变。
- 如果你希望看到所有可用的源（目标）网络，你需要将目标（源）网络清空。

### 连接网络

当你选择了源网络后，可以通过点击下方相应的按钮连接到相应的网络。

![Connect](assets/tut/wiki-tut-wormhole-user-guide-02_zh.png)

点击后将连接到你所选择的源网络。

连接成功后，如果源网络发生了变化，你需要点击切换按钮重新发起连接。

![Switch](assets/tut/wiki-tut-wormhole-user-guide-03_zh.png)

### 断开网络

在网络成功连接之后，你可以在转账面板的右下角找到断开连接按，点击后将断开当前网络的连接。

![Disconnect](assets/tut/wiki-tut-wormhole-user-guide-04_zh.png)

### 网络状态

你可以在源网络选择面板的右上角找到网络连接状态。

![Network Status](assets/tut/wiki-tut-wormhole-user-guide-05_zh.png)

- 红色：当前网络处于断开状态。
- 绿色：已经连接到当前所选的源网络。
- 黄色：网络已连接，但连接的网络和当前所选的源网络不一致。

### 快速切换和重置

通过点击源网络和目标网络间的切换图标将源网络和目标网络对调。

![Switch](assets/tut/wiki-tut-wormhole-user-guide-06_zh.png)

通过点击网络选择面板右上角的清除图标，可以快速清除已经选择的源网络和目标网络。

![Reset](assets/tut/wiki-tut-wormhole-user-guide-07_zh.png)

### 显示/隐藏 测试网络

默认情况下，网络选择面板中只显示正式网络，如果你希望使用测试网络，可以通过点击网站右上角的开关来打开或关闭测试网络。

![Show](assets/tut/wiki-tut-wormhole-user-guide-08_zh.png)

当你允许测试网络显示后，可以在选择网络时看到测试网选项。

![Test](assets/tut/wiki-tut-wormhole-user-guide-09_zh.png)

## 跨链转账

当网络设置完成后，你可以看到完成当前跨链转账操作所需要填写的表单项。

### 流程

当填写完成并且页面无错误时，你可以点击面板左下角的提交按钮，进行转账操作。

![Transfer](assets/tut/wiki-tut-wormhole-user-guide-10_zh.png)

完整的转账操作流程通常包含以下环节（以 Pangolin 到 Ropsten 为例）：

1. 填写转账表单，确保所填选项无错误。

    ![Fill](assets/tut/wiki-tut-wormhole-user-guide-11_zh.png)

2. 点击“提交”按钮，进入转账流程。
3. 确认转账资产及金额。

    ![Confirm](assets/tut/wiki-tut-wormhole-user-guide-12_zh.png)

4. 源网络授权。

    ![Authorization](assets/tut/wiki-tut-wormhole-user-guide-13_zh.png)

5. 收到转账完成的提示。

    ![Alert](assets/tut/wiki-tut-wormhole-user-guide-14_zh.png)

点击“提交”按钮后， 你可以在页面右上角看到转账进度的提示信息。

### 手续费

不同的跨链操作所需要填写的表单信息一般不同，具体信息请以实际表单显示为准。

每次跨链操作均需要消耗一定手续费，请确保转出账号中的余额足以支付手续费。手续费的金额在执行跨链操作时实时查询，请以实际查询结果为准。

### 特殊项

某些跨链转账需要特殊的条件，如：

### **Ethereum To Darwinia**

当填写转账金额后，如果授权金额不足，则会出现以下错误提示，点击授权按钮，完成授权之后此错误即会消失。通常在首次使用某账号进行转账时会出现此情况。

![E2D](assets/tut/wiki-tut-wormhole-user-guide-15_zh.png)

### ERC20

敬请期待。
