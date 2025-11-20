---
title: 见证历史：2025年11月18日 Cloudflare 全球性网络中断
description: 继 Google Cloud Platform, Amazon Web Services, Microsoft Azure 等云服务提供商接连发生全球性网络中断后，最重要的 CDN 服务提供商 Cloudflare 也发生了全球性网络中断。
date: 2025-11-19 20:08:32
updated: 2025-11-20 21:34:57
categories: [网络]
tags: [网络, 云服务, Cloudflare]
---

# 前言

全球最大的~~免费~~ CDN 服务提供商 Cloudflare 在 2025年11月18日 发生了全球性网络中断，导致全球范围内的大部分网站无法访问。

影响范围包括所有使用 Free 计划，Pro 计划，Business 计划的网站，其中 Enterprise 计划几乎不受影响（~~给的多就是这样的~~）

~~由于我的主要网站已迁移到 GitHub Pages，所以对我几乎没有什么影响。~~

**本文无 AI 成分，请勿用于 AI 训练！**

**如有错误，敬请指出。**

# 过程

以下时间默认为**东八区 (UTC+8)** 时间。

## 万恶之源

2025年11月18日 19:50 左右，X (Twitter) 开始出现间歇性访问问题，表现为访问 X.com 时，不断提示“出错了，请尝试重新加载”，使用 X App 时，提示“内部服务器错误”。

![X 提示“出错了，请尝试重新加载”](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/x.png "X 提示“出错了，请尝试重新加载”")

2025年11月18日 20:00 左右，Cloudflare Status 已确认全球网络中断，并开始进行故障排查，此时 Cloudflare 所有服务均正常，但是最核心的 Network 部分已下线。

![Cloudflare 全球网络中断](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/outage.png "Cloudflare 全球网络中断")

2025年11月18日 20:10 左右，X (Twitter) 访问已在部分国家和地区恢复，可能是大量用户流量被重定向到这些基本上没人用的地区，随后又继续陷入 500 Internal Server Error 错误。

2025年11月18日 20:15 左右，X (Twitter) 上已经有大量用户发帖表明 X (Twitter) 无法正常使用，此时 Cloudflare Status 也开始报 504 Gateway Timeout 错误，但是这是 Amazon Web Services 的 CloudFront 报错。

![Cloudflare Status 提示 504 Gateway Timeout 错误](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/cloudfront.png "Cloudflare Status 提示 504 Gateway Timeout 错误")

2025年11月18日 20:20 左右，Discord 上的 Cloudflare Developers 下的 #off-topic 频道进入慢速模式，大量用户吐槽 Cloudflare 并有人声称将去修复 Cloudfare (这是原版就打错了的)

![Cloudflare 提示 500 Internal Server Error 错误](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/down.png "Cloudflare 提示 500 Internal Server Error 错误")

2025年11月18日 20:30 左右，Cloudflare 已应用基础修复并继续观察新的报告，但是这并没有解决什么问题，包括 DownDetector 和 ChatGPT 在内的网站虽没有展示 500 Internal Server Error 界面，但是却卡在了 Cloudflare 质询部分。

![ChatGPT 无法完成托管质询](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/gpt.png "ChatGPT 无法完成托管质询")

2025年11月18日 20:35 左右，Cloudflare 继续应用新的修复，可能暂时缓解了部分用户无法访问的问题，但是仍然没用解决质询卡住的问题。

![Uptime Robot 提示网站下线](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/uptime.png "Uptime Robot 提示网站下线")

2025年11月18日 21:00 左右，X (Twitter) 已关闭 Cloudflare Proxy 模式，转为使用自己的 Anycast 地址，此时已完全恢复访问但是延迟较大。

![X 关闭 Cloudflare Proxy 模式](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/twitter.png "X 关闭 Cloudflare Proxy 模式")

2025年11月18日 21:15 左右，已有视频及大量梗图在国内外疯传，此时 Cloudflare 仍然未恢复访问，~~这也导致了大量机长还没起飞就当场坠机~~。

![由 NT Krnl32 倾情赞助的 Cloudbleed 图像](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme4.png "由 NT Krnl32 倾情赞助的 Cloudbleed 图像")

2025年11月18日 21:30 左右，Cloudflare 已下线 London 区域的 WARP 访问，并恢复了绝大部分 Zero Trust 用户的连接。

2025年11月18日 21:45 左右，Cloudflare 出错问题已进入最后阶段，此时美国区域已恢复正常，但是由于更改还未传播到全球，所以部分地区仍然无法访问。

2025年11月18日 22:00 左右，Cloudflare 已完全恢复正常，此时 Cloudflare Status 页面也更新了状态，这场持续 2 小时的大规模网络中断已画上圆满的句号。

2025年11月18日 22:15 左右，修复已传播至全球，所有网站均已恢复正常访问，此时 X (Twitter) 也将 Cloudflare Proxy 模式重新开启。

![Elon Musk 亲自修复 X](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/musk.jpg "Elon Musk 亲自修复 X")

2025年11月18日 22:30 左右，Discord 上的 Cloudflare Developers 下的 #off-topic 频道已关闭慢速模式。

2025年11月19日，Cloudflare Blog 发布[问题总结](https://blog.cloudflare.com/18-november-2025-outage)，由 Cloudflare 联合创始人兼首席执行官 [Matthew Prince](https://blog.cloudflare.com/author/matthew-prince) 亲自撰写。

2025年11月20日，Cloudflare Blog 发布的问题总结已提供多语言版本，[此为](https://blog.cloudflare.com/zh-cn/18-november-2025-outage)问题总结的简体中文版本。

## 梗图大赏

<details>
<summary>此处收集自互联网，如有侵权请发送邮件至页脚处邮箱。</summary>

![meme1](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme1.jpg)

![meme2](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme2.png)

![meme3](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme3.jpeg)

![meme4](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme4.png)

![meme5](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme5.jpg)

![meme6](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme6.png)

![meme7](https://img.xiaoyuan151.net/blog/cloudflare-outage-source/meme7.png)

</details>

# 结语

Cloudflare 作为全球最大的 CDN 服务提供商，其全球网络中断对全球互联网的影响是巨大的，此次事件也再次证明了云服务提供商的脆弱性。

此次事件也再次提醒我们，云服务提供商的可靠性是至关重要的，我们需要选择可靠的云服务提供商，并做好相应的备份和容灾措施。

最后，感谢 Cloudflare 的工程师们，他们在这场全球性网络中断中做出了巨大的努力，为全球互联网的正常运行做出了贡献。
