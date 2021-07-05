---
id: quick-start-account
title: 创建账号
sidebar_label: 创建账号
---

有三种方法可以创建账户：使用达尔文应用程序门户、浏览器插件**Polkadot.js**或命令行工具**subkey**。你可以酌情选择任何一种方式。**Subkey**是为高级用户准备的，本文中不涉及。如果你已经创建了一个账户，只要你有相应的 "助记词"（Mnemonic）或 "密钥种子"，你就可以从不同的地方导入你的账户。本文中，我们将**创建**、**添加**和**设置**视为同义词，根据上下文不同而交替使用。

## 使用达尔文应用程序门户

第一次访问达尔文应用程序门户时，你会看到提示 "*你还没有账户 ... 添加一个账户试试.*"

![Account](assets/quick_start_zh-CN/darwinia-create-account-01.png)

### 创建账号

点击关闭提示。创建账号前，你需要确保目前是连在达尔文网络的主网上。

![Account](assets/quick_start_zh-CN/darwinia-create-account-02.png)

点击“*添加账户*”按钮开始创建账户。

![Account](assets/quick_start_zh-CN/darwinia-create-account-03.png)

助记词已经自动生成。助记词用于产生密钥，对保证资产安全至关重要。**建议将其抄写至一张纸上并保存至一个隐秘安全的地方**。名称是对账户的描述，密码用于对私钥进行加密。设置完成后点击“*保存*”。

![Account](assets/quick_start_zh-CN/darwinia-create-account-04.png)

点击“创建并且备份账户”按钮，备份该账户的JSON文件。

![Account](assets/quick_start_zh-CN/darwinia-create-account-05.png)

你可以从窗口的左下方看到一个备份的JSON文件将被下载到你的电脑上。你也可以通过点击它来检查JSON文件的位置。

![Account](assets/quick_start_zh-CN/darwinia-create-account-06.png)

你还会看到你的账户出现在窗口的右上方。至此，你已经成功创建了你的达尔文账户。

![Account](assets/quick_start_zh-CN/darwinia-create-account-07.png)


### 使用JSON备份文件恢复账户

如果你以前在其他地方创建过账户，只要你有备份的JSON文件和密码，你就可以把你的账户迁移到你现在的浏览器。在 "暂无账户 "窗口，点击 "使用JSON恢复"。

![Account](assets/quick_start_zh-CN/darwinia-json-account-01.png)

点击“备份文件”文本框，选择你的备份JSON文件。

![Account](assets/quick_start_zh-CN/darwinia-json-account-02.png)

![Account](assets/quick_start_zh-CN/darwinia-json-account-03.png)

输入密码并点击“恢复”按钮。

![Account](assets/quick_start_zh-CN/darwinia-json-account-04.png)

当你看到以下提示时，说明你的账户已成功导入（迁移）到你的账户。

![Account](assets/quick_start_zh-CN/darwinia-json-account-05.png)

### 通过助记词创建账号

有一定经验的用户可以选择使用助记词来设置（创建/迁移/恢复）账号。这个操作不要求你有JSON备份文件和密码。步骤与“*创建账户*”大致相同，不同之处在于不采用系统自动生成的助记词，而是使用自己之前记录的或者生成的助记词。


![Account](assets/quick_start_zh-CN/darwinia-mnemonic-account.png)

## 使用*Polkadot.js*浏览器插件

### 安装*Polkadot.js*浏览器插件

Polkadot.js浏览器插件目前支持 [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=zh-CN) 和 [FireFox](https://addons.mozilla.org/zh-CN/firefox/addon/polkadot-js-extension). 下面以Chrome为例讲解安装及使用过程。 

先点击 "*添加至Chrome*" 按钮,

![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-01.png)

然后点击"*Add extension*".

![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-02.png)

安装完成后，界面如下所示。
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-03.png)

### 使用*Polkadot.js*创建账户

点击浏览器菜单栏中的Polkadot.js图标启动插件。如果浏览器安装的插件多，则可能找不到图标。点击“Extension”图标后在下拉菜单中可以找到。

![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-04.png)

![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-05.png)

第一次启动Polkadot.js插件时，你会看到一个弹出的欢迎窗口。点击 "*Understood, let me continue*"来继续。

![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-06.png)

点击"**+**"按钮创建账号.
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-07.png)

系统将自动生成一个由12个单词构成的助记词. **将其抄写至一张纸上并并保存在安全的地方**,  勾选"I have saved my mnemonic seed safely", 然后点击"Next step"按钮继续.
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-08.png)

给你的账户起一个描述性的名字，并设置一个密码，然后你就可以添加账户了。
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-09.png)

### 访问达尔文应用程序门户
添加账户后，你可以访问达尔文应用程序门户网站确保安装成功。你需要授权Polkadot.js使用你的新账户。
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-10.png)

最后你可以看到你的账户出现在窗口的右上方区域。
![Polkadot](assets/quick_start_zh-CN/darwinia-polkadot-account-11.png)
