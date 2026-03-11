# OpenClaw 深度研究报告

**——一个奥地利程序员的"随手之作"，如何在 60 天内改写开源历史**

> 报告版本：v1.0.0｜发布日期：2026 年 3 月 11 日
>
> 研究范围截止日期：2026 年 3 月 10 日

---

## 目录

- [一、开篇：一只龙虾的诞生](#一开篇一只龙虾的诞生)
- [二、读懂 OpenClaw 之前：AI Agent 是什么？](#二读懂-openclaw-之前ai-agent-是什么)
- [三、OpenClaw 技术全景：一只龙虾的身体构造](#三openclaw-技术全景一只龙虾的身体构造)
- [四、动手试试：从零部署你的第一只"龙虾"](#四动手试试从零部署你的第一只龙虾)
- [五、硬币的另一面：安全风险与信任危机](#五硬币的另一面安全风险与信任危机)
- [六、群雄逐鹿：OpenClaw 的对手们](#六群雄逐鹿openclaw-的对手们)
- [七、商业化与落地](#七商业化与落地)
- [八、未来：AI 时代的 Linux？](#八未来ai-时代的-linux)
- [九、结语：每个人都值得拥有一只"龙虾"](#九结语每个人都值得拥有一只龙虾)
- [十、参考文献与延伸阅读](#十参考文献与延伸阅读)

---

## 一、开篇：一只龙虾的诞生

2025 年 11 月的一个深夜，奥地利维也纳，一位名叫 Peter Steinberger 的程序员正坐在家中，随手写着代码。他并不缺少成就——作为 PSPDFKit 的创始人，他早已在移动开发领域功成名就。但这一次，他只是想做一个"玩具"：一个能通过 Telegram 帮自己处理杂事的聊天机器人。

他给它起了个名字——**Clawdbot**。

这个名字来自 Anthropic 的 AI 模型"Claude"的谐音（Claw = 爪子），加上"bot"。彼时的 Steinberger 大概不会想到，这只"爪子机器人"将在短短 60 天内超越 React——一个花了 13 年才积累了 24.3 万 GitHub Stars 的前端框架——成为 GitHub 上被收藏最多的软件项目。

**从 Clawdbot 到 OpenClaw 的三次更名**

故事的开头并不顺利。Clawdbot 上线后迅速走红，但也很快收到了 Anthropic 的律师函——"Clawdbot"这个名字与"Claude"太过接近，涉嫌商标侵权。Steinberger 不得不将项目更名为 **Moltbot**（"Molt"意为蜕皮，龙虾成长的隐喻），但社区反响平平。最终，2026 年 1 月，项目正式定名为 **OpenClaw**，这个名字既保留了"爪子"的意象，又以"Open"宣示了开源的立场。

龙虾（Lobster）从此成为项目的精神图腾——一种在深海中不断蜕壳成长、理论上可以永生的生物。

**数字奇迹**

- **72 小时**：上线后首批 60,000 GitHub Stars
- **60 天**：超越 React 的 250,000 Stars
- **100 天**：突破 280,000 Stars，成为 GitHub 历史上增速最快的开源项目
- **MIT 协议**：完全免费，任何人都可以使用、修改、分发

2026 年 2 月，OpenAI 向 Steinberger 抛出了橄榄枝，他接受了聘用，加入 OpenAI 负责 AI Agent 相关项目。与此同时，Mark Zuckerberg、Sam Altman、Satya Nadella 都曾就收购或合作进行接触。但 Steinberger 做了一个关键决定：**OpenClaw 将继续开源**，并通过新成立的 OpenClaw 基金会独立运营。

这就是 OpenClaw 的故事。它不是一个精心策划的商业产品，而是一个程序员的"随手之作"在正确的时间点上引爆的现象级项目。要理解它为什么能成功，我们需要先理解一个更大的背景——**AI Agent 时代的到来**。

---

## 二、读懂 OpenClaw 之前：AI Agent 是什么？

### 2.1 从"聊天机器人"到"能干活的助手"

过去两年，大多数人对 AI 的认知停留在"聊天"上——你问 ChatGPT 一个问题，它给你一个答案。这很有用，但本质上它只是一个"顾问"：你说什么，它回应什么，但它不会主动去做任何事。

**AI Agent（AI 智能体）则完全不同。** 如果说 ChatGPT 是你请来的咨询顾问，那 AI Agent 就是你雇来的全职员工——它不仅能思考和回答问题，还能**真正动手干活**：帮你发邮件、管日历、订机票、写代码、操作你的电脑。

> **一句话定义：AI Agent = 大脑（大语言模型）+ 手脚（工具调用能力）+ 记忆（上下文保持）**

### 2.2 Agent 是怎么工作的？一个外卖的类比

想象你对 AI Agent 说："帮我订一份今晚 7 点的日料外卖。"

一个普通的聊天机器人会回答："好的，你可以打开美团外卖 App，搜索日料……"——它只是告诉你怎么做。

而 AI Agent 会这样处理：

1. **想（Think）**："用户要订日料外卖，我需要查看他的位置、偏好和预算。"
2. **做（Act）**：打开外卖平台，搜索附近的日料店，筛选评分 4.5 以上的。
3. **看（Observe）**：发现"鲜の三文鱼"评分最高，但配送时间可能超过 7 点。
4. **再想（Re-Think）**："换一家配送更快的。让我看看'樱花寿司'。"
5. **再做（Re-Act）**：下单并设置 6:30 配送，发消息告诉用户："已帮你在'樱花寿司'下单，预计 6:45 送达。"

这个"**想 → 做 → 看 → 再想**"的循环，在学术界有一个正式的名字：**ReAct（Reasoning + Acting）**。它由 Google 研究团队在 2022 年提出，是当今几乎所有 AI Agent 的核心工作模式。

### 2.3 五大核心能力

根据多篇学术综述的总结，一个成熟的 AI Agent 通常具备五种关键能力：

| 能力 | 通俗解释 | 类比 |
|------|---------|------|
| **工具调用（Tool Use）** | 能使用外部工具完成任务 | 员工会用 Excel、邮箱、浏览器 |
| **反思（Reflection）** | 对自己的输出进行检查和修正 | 写完邮件后自己检查一遍 |
| **ReAct** | 思考与行动交替进行的闭环 | 边做边调整计划 |
| **规划（Planning）** | 把复杂任务拆解为多个步骤 | 做项目前先列计划 |
| **多智能体协作（Multi-Agent）** | 多个 Agent 分工合作 | 团队协作，各司其职 |

### 2.4 为什么 2026 年才爆发？

AI Agent 的概念并不新——AutoGPT 早在 2023 年 4 月就火过一轮。但当时的大语言模型（如 GPT-4 初版）能力不足，Agent 经常"想歪"、"做错"、陷入死循环。用学术界的话说，**Demo 很炫酷，但实际部署一塌糊涂**。

到了 2025 年底，事情发生了质变：

- **Claude Opus 4.x** 的推理能力大幅提升，能在复杂多步任务中保持一致性
- **GPT-5.x** 的工具调用精度显著提高
- **Gemini 2.x** 在多模态理解上取得突破
- **DeepSeek**、**Kimi K2.5** 等国产模型将 API 成本压低到此前的 1/10

模型能力到达了一个"临界点"——Agent 终于能够可靠地完成真实世界的任务，而不只是在 Demo 里表演。

**市场规模印证了这一趋势：**

- 2024 年全球 AI Agent 市场规模约 **53 亿美元**
- 预计 2030 年将达到 **520 亿美元**（复合年增长率 44.8%）

正是在这个背景下，OpenClaw 应运而生。

### 2.5 学术参考索引

以下六篇学术综述为本报告的理论基础提供了支撑：

1. **Plaat et al.** "Agentic Large Language Models, a Survey" (2025) — 将 Agentic LLM 分为推理、行动、交互三大类别
2. **"Agentic AI: The Age of Reasoning"** (ScienceDirect, 2025) — 提出五大核心模式的分类框架
3. **Sang et al.** "Beyond Pipelines" (2025) — 揭示从 Pipeline 到 Model-Native 的范式转移
4. **"Agentic AI: Architectures, Applications, and Future Directions"** (Springer, 2025) — 双范式框架，90 篇文献系统综述
5. **Stanford & Harvard** (2025) — 解释为什么 Agent Demo 炫酷但实际部署难
6. **"The Rise of Agentic AI"** (MDPI, 2025) — 143 篇文献综述，市场规模预测

---

## 三、OpenClaw 技术全景：一只龙虾的身体构造

如果把 OpenClaw 比作一只龙虾，那么它的身体由五个核心部分组成——塔台、大脑、装备库、黑匣子和跑道。

### 3.1 整体架构——"机场塔台"式指挥调度

OpenClaw 采用的是**中心辐射式架构（Hub-and-Spoke）**，就像一座繁忙的机场：

```
                    ┌──────────────┐
                    │   你（用户）   │
                    └──────┬───────┘
                           │ 微信/Telegram/Discord...
                    ┌──────▼───────┐
                    │   Gateway    │ ← 塔台：接收指令、分发任务、安全审查
                    │  (网关守护进程) │
                    └──────┬───────┘
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │  Agent   │ │  Skills  │ │  Memory  │
        │  引擎    │ │  插件    │ │  记忆    │
        │ (大脑)   │ │ (装备库) │ │ (黑匣子) │
        └──────────┘ └──────────┘ └──────────┘
```

- **Gateway（塔台）**：运行在你电脑上的 Node.js 守护进程。它负责监听所有通信频道（微信、Telegram、Discord、飞书……），接收你的消息，做安全审查，然后分发给 Agent 引擎处理。就像机场塔台一样——所有飞机的起降都经过它调度。
- **Agent 引擎 / Pi 运行时（大脑）**：接到任务后，它调用大语言模型进行思考和决策。核心算法正是前文提到的 ReAct 循环：**思考 → 行动 → 观察 → 再思考**，直到任务完成。
- **Skills 插件（装备库）**：Agent 的"工具箱"。每个 Skill 赋予 Agent 一种新能力——发邮件、操作浏览器、管理 GitHub、生成图片……目前 ClawHub 上已有约 4,000 个社区贡献的 Skills。
- **Memory 系统（黑匣子）**：跨对话的持久记忆。Agent 能记住你的偏好、习惯、历史对话，下次交流时无需重复交代背景。
- **Nodes & Channels（跑道）**：连接外部世界的接口——各种聊天平台、邮箱、日历、API，都是 Agent 的"跑道"。

### 3.2 大脑：多模型"换 SIM 卡"式支持

OpenClaw 的一大亮点是**模型无关性**——你可以像换手机 SIM 卡一样，自由切换底层 AI 模型：

| 模型 | 提供商 | 特点 |
|------|--------|------|
| Claude Opus / Sonnet | Anthropic | 推理最强，长上下文 200K |
| GPT-5.x | OpenAI | 工具调用精准，生态成熟 |
| Gemini 2.x | Google | 多模态理解突出 |
| DeepSeek | 深度求索 | 性价比极高，开源 |
| Kimi K2.5 | 月之暗面 | 万亿参数，Agent Swarm 能力 |
| MiniMax M2.5 | MiniMax | OpenClaw 生态用量第一 |
| 本地模型（Ollama） | 各种开源模型 | 零数据外泄，完全离线 |

切换方式极为简单——只需修改配置文件 `openclaw.json` 中的 `providers` 字段即可。支持两种 API 协议：

- **openai-completions**：兼容 OpenAI 格式，`baseUrl` 需包含 `/v1`
- **anthropic-messages**：兼容 Anthropic 格式，`baseUrl` **不能**包含 `/v1`（协议会自动追加）

> **踩坑提示**：这是许多新用户遇到的第一个 Bug。两种协议的 `baseUrl` 格式不同，搞混了会导致"HTTP 502"假性报错（实际是路径重复或超时）。详见第四章的实战排坑。

### 3.3 四肢：Skills 生态

Skills 是 OpenClaw 最具生命力的部分。安装一个 Skill 只需一行命令：

```bash
npx skills add <owner/repo>
```

**精选 Skills 速览：**

| 类别 | Skill 名称 | 一句话描述 |
|------|-----------|-----------|
| 知识管理 | NotebookLM Skill | 对接 Google NotebookLM，自动上传资料做知识问答 |
| 笔记 | Obsidian Skills | 生成 Obsidian 风格 Markdown，支持画布和内链 |
| 前端开发 | frontend-design | 覆盖字体、颜色、动效、背景四维度的前端设计 |
| 任务规划 | planning-with-files | 通过持久化文件追踪任务进度，解决上下文飘移 |
| Skill 创建 | skill-creator | Anthropic 官方出品，帮你创建符合最佳实践的 Skill |
| 多应用连接 | Rube MCP | 一个服务器连接 500+ 应用（Slack/Notion/Gmail…） |
| 内容创作 | baoyu-skills | 长文自动配图、自动发推/发公众号 |

截至 2026 年 3 月，ClawHub 上已收录约 **4,000 个 Skills**，覆盖社交媒体、内容创作、DevOps、办公自动化、研究学习、金融投研等领域。

### 3.4 神经网络：在你最常用的聊天软件里指挥 AI

OpenClaw 最反直觉的设计决策是：**它没有自己的 App 界面**。

你与它的交互完全发生在你已经在用的聊天软件中——Telegram、Discord、WhatsApp、微信、飞书、Slack、iMessage、Signal……就像给这些软件加了一个"超级助手"。

这意味着：
- 不需要学习新的界面
- 不需要切换应用
- 在手机上也能远程控制家里电脑上运行的 Agent

### 3.5 它到底能干什么？——社区验证的 36 个真实用例

OpenClaw 社区整理了 36 个经验证的真实使用场景，按六大类分组。以下是最具代表性的案例：

**场景一：每日新闻摘要机器人**

> "我希望你每天下午 5 点，从我关注的 Reddit 板块和 YouTube 频道中提取最值得看的内容，生成摘要推送给我。如果是我不感兴趣的类型（比如表情包），自动过滤掉。"

Agent 会自动浏览内容、记住你的偏好、每天定时推送，并根据你的反馈持续优化推荐策略。

**场景二：多智能体内容工厂**

在 Discord 中部署三个协作 Agent——研究员负责搜集素材、写手负责撰写文章、设计师负责生成缩略图。每天自动产出内容，无需人工干预。

**场景三：自愈式家庭服务器**

将 OpenClaw 变成 7×24 小时的基础设施管家。它通过 SSH 访问你的服务器，自动检测异常、诊断问题、执行修复。每天早上还会发送一份"系统健康简报"。

**场景四：个人 CRM**

自动扫描你的邮箱和日历，发现新联系人并建档。每次开会前，Agent 会自动查询该联系人的历史互动记录，生成背景简报推送给你。

**场景五：金融投研助理**

多家券商（方正、国金、广发）已发布专题报告，展示如何利用 OpenClaw 构建个人投研助理——从数据抓取、报告生成到投资组合监控，覆盖 17 个以上的金融应用场景。

**场景六：电话语音助手**

通过 ClawdTalk 技能，让 OpenClaw 接听电话。开车时可以语音指挥 Agent 查日历、搜新闻、更新任务列表——免提、免打字。

---

## 四、动手试试：从零部署你的第一只"龙虾"

### 4.1 你需要什么？

**好消息：你不需要一台高配电脑。** OpenClaw 本身是一个轻量级的 Node.js 应用，"老电脑"就能跑。真正的计算（大模型推理）发生在云端 API 那头。

**你需要准备的：**

| 项目 | 说明 |
|------|------|
| 电脑 | macOS / Windows / Linux 均可，配置不限 |
| Node.js | v18 或更高版本 |
| API Key | 至少一个大模型的 API Key（Claude / GPT / DeepSeek / Kimi 等） |
| 聊天平台 | 至少一个消息渠道（推荐从 Telegram 或 Discord 开始） |

### 4.2 部署路径选择

| 平台 | 推荐方式 | 难度 |
|------|---------|------|
| macOS | `brew install openclaw` 或直接下载安装包 | 简单 |
| Windows | NextClaw 一键安装包（社区维护） | 简单 |
| Linux | npm 全局安装或 Docker | 中等 |
| Docker | 官方 Docker 镜像，适合服务器部署 | 中等 |

### 4.3 模型配置实战：从"502 错误"到成功的排坑故事

以下是一位社区用户在 Windows Server 上为 OpenClaw 配置第三方 AI 模型 API 的真实排坑记录，典型到几乎每个新用户都会踩一遍：

**第一步：写入配置，信心满满**

在 `openclaw.json` 中配置了 API 地址和密钥，重启 Gateway，然后满心期待地在 Discord 发消息……

```
The AI service is temporarily unavailable (HTTP 502). Please try again in a moment.
```

**第二步：怀疑网络，但网络没问题**

在服务器上直接调用 API，返回 200，5.8 秒响应。网络完全正常。

**第三步：乱加配置字段，Gateway 直接起不来**

试图添加 `"streamingMode": "disabled"` 来关闭流式传输，结果 OpenClaw 的配置有严格 Schema 校验，加了不存在的字段，直接报 `Invalid config` 拒绝启动。

> **教训：OpenClaw 配置不能乱加字段。** 如果不小心加了，可以用 `openclaw doctor --fix` 自动移除。

**第四步：看日志，发现真相**

日志中的关键一行：
```
[EventQueue] Listener DiscordMessageListener timed out after 30000ms
```

原来不是真的 502，而是 **OpenClaw 内部等待 API 响应超时 30 秒后，自己报了个 502**。

**第五步：换协议，发现路径重复**

改用 `anthropic-messages` 协议后，错误变了：
```
HTTP 404: Invalid URL (POST /v1/v1/messages)
```

原因：`anthropic-messages` 协议会自动在 `baseUrl` 后追加 `/v1/messages`。如果 `baseUrl` 已经包含了 `/v1`，就会变成 `/v1/v1/messages`。

**解决方案：去掉 `baseUrl` 末尾的 `/v1`。**

| 协议 | baseUrl 格式 |
|------|-------------|
| `openai-completions` | `https://api.example.com/v1`（要带 /v1） |
| `anthropic-messages` | `https://api.example.com`（不带 /v1） |

**最终配置模板：**

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "my-provider": {
        "baseUrl": "https://your-api.com",
        "apiKey": "your-api-key",
        "auth": "api-key",
        "api": "anthropic-messages",
        "models": [
          {
            "id": "your-model-name",
            "name": "your-model-name",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "my-provider/your-model-name"
      }
    }
  }
}
```

### 4.4 第一个 Skill 安装与使用

Skill 安装使用 Vercel 开发的 `skills` CLI 工具：

```bash
# 安装一个 Skill（例如 Obsidian Skills）
npx skills add kepano/obsidian-skills

# 安装指定仓库的特定 Skill
npx skills add anthropics/skills --skill skill-creator

# 全局安装 + 指定目标工具
npx skills add <owner/repo> -g -a claude-code
```

安装后向 Agent 发消息即可触发对应能力——无需额外配置。

### 4.5 新手常见问题 FAQ

| 问题 | 解答 |
|------|------|
| API 费用大概多少？ | 取决于使用量和模型选择。使用 DeepSeek 或 MiniMax 等性价比模型，日常使用月费可控在 ¥50-200。使用 Claude Opus 重度使用可达 $700+/月。 |
| 数据安全吗？ | OpenClaw 本身运行在本地，不上传数据。但调用云端模型 API 时，你的消息内容会发送到模型提供商。如需完全离线，可使用 Ollama 加载本地模型。 |
| 手机能用吗？ | OpenClaw 运行在电脑上，但你可以通过手机上的 Telegram/微信等远程发送指令。 |
| 需要一直开着电脑吗？ | 是的，Gateway 需要持续运行。可以部署在家庭服务器、VPS 或 Mac Mini 上实现 24/7 运行。 |
| 支持中文吗？ | 完全支持。底层模型（Claude/GPT/Kimi 等）均支持中文交互。社区也有大量中文文档和教程。 |

---

## 五、硬币的另一面：安全风险与信任危机

### 5.1 给 AI 配了一把家门钥匙

想象一下：你请了一位能力超强的私人助理，然后把家门钥匙、银行卡密码、邮箱密码全部交给了他。他确实能帮你高效办事——但如果这位助理本身不够可靠，或者有人能冒充你给他下达指令呢？

这就是 OpenClaw 面临的安全困境。安全研究者 Simon Willison 将其总结为**"致命三角"**：

1. **它能看到你的秘密**：OpenClaw 可以读取你的文件、邮箱、日历、API 密钥——这是它干活的前提，但也意味着敏感信息暴露在 Agent 面前。
2. **它会听信陌生人的话**：从 ClawHub 安装的第三方 Skills、Agent 浏览的网页、处理的邮件中，都可能藏着恶意指令（"提示注入攻击"）。Agent 无法区分"主人的命令"和"伪装成正常内容的恶意指令"。
3. **它能对外发消息**：OpenClaw 默认监听网络端口，安全机构发现有 13.5 万个 OpenClaw 实例暴露在公网上——任何人都可以尝试连接。

### 5.2 应用商店里的"木马 App"

2026 年 2 月，安全研究员 Oren Yomtov 对 ClawHub 上的 2,857 个 Skills 进行了全面审计，结果令人震惊：

- **341 个 Skills 被确认为恶意软件**，其中 335 个属于同一个有组织的攻击行动（代号"ClawHavoc"）
- 这些伪装成正常工具的 Skills，实际上会在用户的 Mac 上安装一种叫 **Atomic Stealer** 的窃密木马
- 安全公司 Snyk 的更大范围审计发现，**每 5 个 Skill 中就有 1 个存在安全隐患**
- **36% 的 Skills 包含可被利用的提示注入漏洞**

这就像 App Store 刚上线时的"野蛮生长"阶段——任何人都能上传应用，没有严格的审核机制。在 ClawHub 上发布一个 Skill，你只需要一个创建满一周的 GitHub 账号和一个 Markdown 文件，**不需要代码签名，不需要安全审查，不需要沙箱隔离**。

### 5.3 各方怎么说？

**微软**（Microsoft Defender 安全研究团队）：
> "OpenClaw 应被视为不可信的代码执行环境。**不适合在标准的个人或企业工作站上运行**。"

**卡巴斯基**（全球知名安全公司）：
> "一些专家已经将 OpenClaw 称为 **2026 年最大的内部威胁**。"

**高校**：
> 多所大学已发布禁用令，明确表示 OpenClaw **不得在学校管理的设备上安装使用**。

### 5.4 社区的自我修复：开源的韧性

尽管安全问题严重，但开源社区展现出了强大的自我修复能力——**问题暴露快，修复也快**。

- **多轮安全补丁**：从 2026 年 1 月到 2 月，连续发布了 v2026.1.20、1.29、2.1、2.2、2.14 等多个安全修复版本
- **VirusTotal 集成**：与 VirusTotal 达成合作，所有上传到 ClawHub 的 Skills 都会自动进行恶意软件分析
- **社区安全审计**：Snyk、Cisco、Koi Security 等多家安全公司主动参与审计并公开报告
- **架构改进**：v2026.3.7 引入了可插拔的 ContextEngine，增强了权限隔离

> **类比：** 早年的 Android 系统也曾因恶意 App 泛滥而备受批评，但通过 Google Play Protect、App 签名机制、权限管理等措施，逐步建立起了安全生态。OpenClaw 正在走类似的路径——从"完全信任"到"零信任"的安全进化。

**给普通用户的安全建议：**

1. 始终使用最新版本的 OpenClaw
2. 只安装来源可信的 Skills（查看 Stars、审计报告、作者信誉）
3. 不要将 OpenClaw 端口暴露到公网（关闭 0.0.0.0 监听）
4. 敏感操作（如发邮件、转账）设置人工确认环节
5. 定期检查 Agent 的记忆和日志，了解它在做什么

---

## 六、群雄逐鹿：OpenClaw 的对手们

OpenClaw 并不孤独。2026 年初，AI Agent 赛道已成为全球科技竞争的新焦点。以下从海外和国内两大阵营，全面梳理截至 2026 年 3 月 10 日的竞品格局。

### 6.1 海外阵营

| 产品 | 公司 | 上线日期 | 定位 | 费用 | 优势 | 劣势 |
|------|------|---------|------|------|------|------|
| **OpenClaw** | 开源基金会 | 2025.11 → 2026.01 更名 | 开源本地 Agent 框架 | 免费 + API 费 | 280K+ Stars；本地隐私；多模型多平台；生态最丰富 | 安全隐患；配置门槛高；API 月费可达 $700+ |
| **Manus AI** | Meta（$20 亿收购） | 2025 底 → 2026.01 收购 | 云端全托管 Agent | $20-200/月 | 零配置；非技术友好；稳定可靠 | 数据在 Meta 云端；复杂任务烧积分；价格不透明 |
| **AutoGPT** | 开源 | 2023.04 | 开源目标执行 Agent | 免费 + API | 181K Stars；Docker 沙箱；开创性项目 | GPT 绑定深；架构陈旧；社区活跃度下降 |
| **Claude Computer Use** | Anthropic | 2024.10 → 持续迭代 | API 级电脑操控 | €20-80/月 | 推理最强；200K 上下文；安全设计好 | 面向开发者；需编码集成 |
| **Perplexity Computer** | Perplexity AI | 2026.02 | 多模型研究编排 | $200/月 | 19 模型协同；研究场景最强；无代码 Web 界面 | 最贵；云端处理 |
| **Devin** | Cognition AI | 2024.03 → 2025 商用 | 自主 AI 程序员 | $20/月（Core） | 全自主编程；自带沙箱 | 仅限编程场景 |
| **Apple Siri（Agentic）** | Apple | 2026.02（iOS 26.4） | 系统级跨 App Agent | 设备内置 | 隐私优先；跨 App 联动；语义理解 | 仅限 Apple 生态；功能分期上线 |
| **Microsoft Copilot** | Microsoft | 2023.11 → 持续迭代 | 企业办公 Agent | M365 订阅 + 按量 | 深度集成 Office/Windows；65% 企业首选 | 完整功能需企业订阅 |
| **Google Gemini Agent** | Google | 2024 → 2026 企业版 | 企业搜索 + Agent | Enterprise 套餐 | 搜索 + 知识图谱；MCP 协议 | 企业份额仅 26% |
| **Nvidia NemoClaw** | Nvidia | 2026.03（规划中） | 企业级开源 Agent | 待定 | Jensen Huang 称"史上最重要软件" | 尚未发布 |

### 6.2 国内阵营

| 产品 | 公司 | 上线日期 | 定位 | 费用 | 优势 | 劣势 |
|------|------|---------|------|------|------|------|
| **QClaw** | 腾讯 | 2026.03.09 内测 | 微信/QQ 嵌入式 Agent | 内测免费 | 微信 QQ 一键接入；傻瓜式安装；国产模型内置 | 刚内测；依赖腾讯生态 |
| **WorkBuddy** | 腾讯云 | 2026.02.06 内测 → 03.09 上线 | 企业级办公 Agent | 5000 积分体验 | 兼容 OpenClaw 技能；20+ 内置 Skill；多模型 | 刚上线；生态待建 |
| **Kimi Claw** | 月之暗面 | 2026 年初 | 云托管 OpenClaw | ~39-199 元/月 | 免部署；K2.5 万亿参数；100 子代理；价格为 Claude 的 1/10 | 云端处理非本地 |
| **MaxClaw** | MiniMax | 2026.02.25 | 云托管 Agent | ~$1/小时 | M2.5 性价比极高；Media Agent 多模态 | 生态弱；品牌认知低 |
| **扣子 2.0** | 字节跳动 | 2026.01.19 | AI Agent 构建平台 | 基础免费 | 豆包 DAU 过亿；四大核心能力；已开源 | 平台锁定；非纯 Agent 框架 |
| **CoPaw** | 阿里通义 | 2026.02.28 开源 | 个人智能体工作台 | 免费（Apache 2.0） | 3 条命令部署；成本约 OpenClaw 的 1/10 | 生态刚起步 |
| **千帆深度研究 Agent** | 百度 | 2026.02.04 | 学术深度研究 Agent | 按量付费 | 22 学科覆盖；博士级研究分钟级完成 | 垂直场景非通用 |
| **GenFlow 2.0** | 百度文库 | 2025.08.18 | 多 Agent 协同 | 文库会员 | 100+ AI 专家同时工作 | 绑定百度文库 |
| **钉钉 AI 助理** | 阿里 | 2024 → 持续迭代 | 企业协同 Agent | 钉钉订阅 | 打通考勤/审批/人事/财务 | 仅限钉钉内 |
| **ModelArts Versatile** | 华为 | 2025 → 持续迭代 | 企业级 Agent 平台 | 企业定价 | 信创适配（昇腾/鸿蒙/麒麟） | 非消费级 |
| **实在 Agent** | 实在智能 | 2023.08 首发 | 企业 RPA+AI 数字员工 | 企业付费 | 最早布局；屏幕语义理解；老系统也能操作 | 非开源；定价不透明 |
| **NanoClaw** | 开源 | 2026.01 底 | 安全容器化 Agent | 免费（MIT） | 容器隔离；4000 行代码可审计 | 功能少；生态薄 |
| **Nanobot** | 港大 HKUDS | 2026 年初 | 轻量 Python 框架 | 免费开源 | 22K Stars；极简 MCP 支持 | 偏学习用 |

### 6.3 三大流派与趋势洞察

纵览全球竞品，可以清晰地看到**三大流派**：

**1. 开源本地派**——OpenClaw、NanoClaw、CoPaw、AutoGPT
- 核心理念：数据留在本地，用户完全掌控
- 优势：隐私、自由、可定制
- 挑战：配置门槛、安全治理、用户需自行承担维护成本

**2. 云端托管派**——Manus AI、Kimi Claw、MaxClaw、Perplexity Computer
- 核心理念：零配置，开箱即用
- 优势：易上手、稳定、7×24 小时云端运行
- 挑战：数据隐私、持续订阅费用、厂商锁定

**3. 平台生态派**——扣子/Coze、Microsoft Copilot、Google Gemini、钉钉、Apple Siri
- 核心理念：嵌入现有生态，做"超级入口"
- 优势：用户基数大、无缝集成、企业级支持
- 挑战：生态封闭、通用性受限、价格不菲

**一个值得关注的趋势：国产模型在 OpenClaw 生态中的崛起。** MiniMax M2.5 已成为 OpenClaw 中使用量最高的模型，Kimi、GLM、DeepSeek 等国产模型正在成为新的调用主力。这标志着国产 AI 不仅在"造模型"上追赶，更在"用模型"的生态层面实现了突围。

> **结论：没有万能 Agent。** 未来的趋势是"混合编排"——不同场景使用不同的 Agent 和模型，就像今天我们不会只用一个 App 处理所有事情一样。

---

## 七、商业化与落地

### 7.1 企业级实践

**案例一：Global Mofy AI**

2026 年 3 月 10 日，美股上市公司 Global Mofy AI Limited 宣布将 OpenClaw 整合进核心内容生产流水线，用于驱动其 AI 内容生产战略。这是 OpenClaw 首个引起资本市场关注的企业级落地案例。

**案例二：金融投研**

国内三家头部券商先后发布了 OpenClaw 在金融投研领域的应用报告：

- **方正证券**（2026.02.21）：17 个高效应用案例，覆盖数据抓取、研报生成、风险预警
- **国金证券**（2026.02.24）：个人投研助理搭建，Skills 配置与投研工作案例
- **广发证券**（2026.02.28）：多平台部署与投研应用实战

这些报告标志着 OpenClaw 从"极客玩具"正式进入"专业工具"的范畴。

### 7.2 商业模式探索

OpenClaw 本身是免费开源的（MIT 协议），那它怎么维持运营？

**赞助制**

| 等级 | 月费 | 名称 |
|------|------|------|
| 入门 | $5/月 | 磷虾（Krill） |
| 中级 | 多档 | — |
| 顶级 | $500/月 | 海神（Poseidon） |

Steinberger 表示，赞助收入不会归他个人所有，而是用于"弄清楚如何给维护者发工资——如果可能的话，全职发"。

**基金会化运营**

在 Steinberger 加入 OpenAI 后，OpenClaw 通过独立基金会运营，确保项目不受任何单一公司控制。

**围绕 OpenClaw 的创业生态**

- **OpenClawd**：第三方托管平台，提供一键部署和管理服务
- **Kimi Claw / MaxClaw / QClaw**：各大厂推出的 OpenClaw 兼容/增强产品
- **安全审计服务**：Snyk、Koi Security 等围绕 OpenClaw 生态提供专业安全服务

### 7.3 个人用户的"成本账"

许多人关心的问题：用 OpenClaw 到底要花多少钱？

| 方案 | 月成本估算 | 适合谁 |
|------|----------|--------|
| DeepSeek + 轻度使用 | ¥30-50 | 尝鲜用户 |
| MiniMax M2.5 + 中度使用 | ¥100-300 | 日常用户 |
| Claude Sonnet + 日常办公 | $30-80 | 专业用户 |
| Claude Opus + 重度使用 | $300-700+ | 极客/开发者 |
| Ollama 本地模型 | ¥0（电费除外） | 隐私极客 |

**省钱技巧**：
1. 简单任务用便宜模型，复杂任务才切换到高端模型
2. 利用 Skills 缓存，避免重复调用 API
3. 设置合理的 `maxTokens`，避免模型"话痨"
4. 国产模型（MiniMax/Kimi/DeepSeek）的性价比通常是国际模型的 5-10 倍

---

## 八、未来：AI 时代的 Linux？

### 8.1 Steinberger 的抉择

Peter Steinberger 面前摆着一道选择题：

- **选项 A**：接受 Zuckerberg 或 Altman 的数十亿美元收购，OpenClaw 成为某家巨头的产品
- **选项 B**：拿 VC 的钱创建自己的公司，但他担心这会"分散精力，偏离构建的初心"
- **选项 C**：保持开源，通过基金会运营，让社区决定方向

他目前选择了 **C**——同时以个人身份加入 OpenAI，但 OpenClaw 保持独立。这与 Linus Torvalds 当年对 Linux 的选择如出一辙：创造者可以有雇主，但作品属于全世界。

### 8.2 技术路线图

**v2026.3.7**（架构级升级，89 commits、200+ Bug 修复）：

1. **可插拔 ContextEngine**：Agent 的"记忆系统"变成了模块化插件，开发者可以自定义 Agent 如何理解和保持上下文。这为多租户、企业级部署打开了大门。
2. **分布式频道绑定**：一个 OpenClaw 实例可以同时服务多个用户、多个平台，为"Agent 即服务"奠定基础。
3. **GPT-5.4 全面支持**：紧跟最新模型，保持模型无关性的承诺。

**v2026.3.8**（2026.03.09 发布，43 位贡献者，侧重安全加固与运维成熟度）：

1. **本地备份 CLI**：新增 `openclaw backup create` 和 `openclaw backup verify` 命令，用户终于可以一键备份配置和状态，不再需要手动拷贝文件。
2. **ACP 溯源机制**：Agent 通信协议（ACP）新增来源元数据注入，支持会话追踪 ID，让 Agent 之间的协作变得"可审计、可追溯"。
3. **Gateway 重启加固**：修复了重启时 launchd/systemd 误判"正常退出"的 Bug，确保崩溃后真正自动重启。
4. **12+ 安全补丁**：覆盖 Podman/SELinux 权限、Android Play Store 权限清理、WSL2 浏览器工具修复等多平台安全增强。
5. **Talk 静默超时可配**：语音模式新增 `talk.silenceTimeoutMs`，用户可自定义"沉默多久自动发送"。

这两个版本的节奏（3.7 做架构、3.8 做加固）标志着 OpenClaw 正在从"快速迭代"转向"稳定可靠"的工程化阶段。

### 8.3 从"野蛮生长"到"可信 Agent"

OpenClaw 的安全进化路径越来越清晰：

- **短期**（2026 H1）：VirusTotal 集成、Skills 签名机制、社区审核
- **中期**（2026 H2）：沙箱执行环境、细粒度权限管理、企业级审计日志
- **长期**（2027+）：类似 iOS 的"App Review"式审核流程、硬件级安全隔离

NanoClaw 的出现（容器化方案）可能是一个信号——未来的 AI Agent 安全不应该是可选项，而应该是默认项。

### 8.4 监管前瞻：当 Agent 能替你发邮件、管资金

当 AI Agent 能够代替用户执行具有法律效力的操作时，一系列棘手的问题浮出水面：

- **责任归属**：Agent 发了一封错误的邮件导致合同纠纷，谁负责？
- **隐私合规**：Agent 跨境传输用户数据，是否违反 GDPR？
- **金融监管**：Agent 自动执行交易，是否需要牌照？
- **身份认证**：如何确保是"你"在指挥 Agent，而不是入侵者？

目前全球尚无专门针对"Agentic AI"的立法框架，但可以预见，这将成为 2026-2027 年监管层关注的焦点。

### 8.5 "AI 时代的 Linux"：可能性与挑战

清新研究在其报告中将 OpenClaw 的愿景定位为"AI 时代的 Linux"——一个完全开源、社区驱动、无处不在的基础设施。

**相似之处：**
- 创始人的个人项目 → 社区接管 → 基金会化运营
- 企业在其上构建商业产品（类似 Red Hat 之于 Linux）
- MIT 协议带来的极度自由

**面临的挑战：**
- Linux 的成功建立在数十年的安全加固之上，OpenClaw 才几个月大
- Linux 面对的是硬件和操作系统，OpenClaw 面对的是敏感个人数据和社交关系
- Linux 社区以工程师为主，OpenClaw 的目标用户是"每个人"——安全教育的难度指数级增加

能否真正成为"AI 时代的 Linux"，取决于 OpenClaw 能否在**开放性**和**安全性**之间找到平衡。这不仅是技术问题，更是治理问题。

---

## 九、结语：每个人都值得拥有一只"龙虾"

2025 年 11 月到 2026 年 3 月，短短四个多月，OpenClaw 从一个人的深夜实验变成了 28 万人追捧的全球现象。它证明了一件事：**AI 不应该只是科技巨头的专利，每个人都应该能拥有一个属于自己的、运行在自己电脑上的、完全可控的 AI 助手。**

龙虾之所以被选为图腾，是因为它通过不断蜕壳来成长——每一次蜕壳都是一次脆弱与风险，但也是变得更强大的唯一方式。

OpenClaw 正在经历它最关键的一次"蜕壳"：从极客玩具到可信基础设施，从安全丑闻到治理成熟，从一个人的项目到一个社区的公共品。

这次蜕壳能否成功，将决定"每个人都拥有 AI 助手"的未来是否真的到来。

而你——无论是想尝鲜的普通用户、想提效的职场人、想创业的开发者、还是想研究的学者——现在就可以开始，养你的第一只"龙虾"。

---

## 十、参考文献与延伸阅读

### 学术论文

1. Plaat, A. et al. (2025). "Agentic Large Language Models, a Survey." *arXiv:2503.23037*. https://arxiv.org/abs/2503.23037
2. "Agentic AI: The Age of Reasoning — A Review." (2025). *ScienceDirect*. https://www.sciencedirect.com/science/article/pii/S2949855425000516
3. Sang, J. et al. (2025). "Beyond Pipelines: A Survey of the Paradigm Shift toward Model-Native Agentic AI." *arXiv*. https://github.com/ADaM-BJTU/model-native-agentic-ai
4. "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions." (2025). *Springer Artificial Intelligence Review*. https://link.springer.com/article/10.1007/s10462-025-11422-4
5. Stanford & Harvard. (2025). "Why Most Agentic AI Systems Fall Apart in Real Use." *MarkTechPost*. https://www.marktechpost.com/2025/12/24/
6. "The Rise of Agentic AI." (2025). *MDPI Future Internet, 17(9), 404*. https://www.mdpi.com/1999-5903/17/9/404

### 行业报告

7. 方正证券. (2026.02.21). "OpenClaw 赋能金融投研，17 个高效应用案例详解."
8. 国金证券. (2026.02.24). "大模型赋能投研之十八：OpenClaw 搭建个人投研助理."
9. 广发证券. (2026.02.28). "OpenClaw 多平台部署与投研应用."
10. 阿里研究院. (2026). "Agent 新春特刊——智能体的形态演进与治理思考."
11. 清新研究. (2026.03). "2026 年 OpenClaw 自我研究报告 1.0 版."

### 社区资源

12. OpenClaw 橙皮书——从入门到精通. https://github.com/openclaw/openclaw
13. OpenClaw 全部用例详解（36 个社区验证案例）. awesome-openclaw-usecases
14. 减肥的拉格朗日. (2026). "2026 OpenClaw 完全指南（307 页）."
15. 数据行者. (2026). "OpenClaw 完全使用手册（45 页）."
16. pseudoyu. (2026). "OpenClaw 分享."
17. OpenClaw 社区资源指南.
18. Skill 安装指南.

### 媒体报道

19. Yahoo Finance. "OpenClaw Creator Gets Big Offers to Acquire AI Sensation." https://finance.yahoo.com/news/openclaw-creator-gets-big-offers-200103606.html
20. The New Stack. "OpenClaw Rocks to GitHub's Most-Starred Status, But Is It Safe?" https://thenewstack.io/openclaw-github-stars-security/
21. CNBC. "Nvidia Plans Open-Source AI Agent Platform 'NemoClaw'." https://www.cnbc.com/2026/03/10/nvidia-open-source-ai-agent-platform-nemoclaw
22. VentureBeat. "Perplexity Launches 'Computer' AI Agent." https://venturebeat.com/technology/perplexity-launches-computer-ai-agent
23. TechCrunch. "China's Moonshot Releases Kimi K2.5 and a Coding Agent." https://techcrunch.com/2026/01/27/
24. The Hacker News. "Researchers Find 341 Malicious ClawHub Skills." https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html
25. Snyk. "ToxicSkills: Malicious AI Agent Skills Supply Chain Compromise." https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/
26. Microsoft Security Blog. "Running OpenClaw Safely." https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely
27. 36 氪. "OpenClaw 登顶后，Agent 悄悄杀死了'应用'." https://36kr.com/p/3709890881975048
28. 极客公园. "字节扣子 2.0 发布." https://www.geekpark.net/news/359437
29. IT 之家. "腾讯版'小龙虾' WorkBuddy 上线." https://www.ithome.com/0/927/230.htm
30. GlobeNewsWire. "Global Mofy Integrates OpenClaw." https://www.globenewswire.com/news-release/2026/03/10/

---

> **免责声明**：本报告仅供研究参考，不构成任何投资建议。报告中的信息基于公开可获取的资料，作者尽力确保准确性，但不对信息的完整性和时效性做保证。
>
> **版权声明**：本报告采用 CC BY-NC-SA 4.0 协议发布，欢迎非商业性转载，转载请注明出处。
