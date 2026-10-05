export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  status: string;
  capabilities: string[];
  evidence: string;
  image?: string;
  imageAlt?: string;
  imageBadge?: string;
  caseStudyAvailable?: boolean;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "plm-knowledge-agent",
    title: "项目1：PLM知识问答助手",
    englishTitle: "Enterprise Knowledge Agent",
    summary: "将高频 PLM 用户问题与历史解决方案沉淀为知识库，让用户优先自助检索，未命中时再转管理员处理。",
    problem: "大量重复咨询依赖系统管理员人工答复，历史解决方案缺少统一沉淀与复用。",
    solution: "高频问题梳理 + 知识库沉淀 + 用户自助检索 + 未命中转人工。",
    role: "需求与产品负责人 / 业务规则梳理 / 集成验收",
    status: "可运行 PoC",
    capabilities: ["Agent", "轻量 RAG", "Workflow", "飞书集成", "Risk Control"],
    evidence: "727 条知识索引；运行日志记录 17 次成功回复；公开脱敏 Demo 已部署。",
    image: "/projects/plm-knowledge-agent/feishu-real-run.png",
    imageAlt: "PLM 知识问答助手在飞书中回答文档发布报错问题",
    caseStudyAvailable: true,
    demoUrl: "https://plm-knowledge-agent-demo.j71315618.chatgpt.site/#rules",
  },
  {
    slug: "code-generator",
    title: "项目2：编码自动生成器",
    englishTitle: "Business Rules Automation",
    summary: "将分散的编码规则、历史台账查询与编号登记整合为一套离线自动生成工具。",
    problem: "编码规则分散且存在多种例外，人工查规则、核对历史编号和登记台账，容易出现重号、漏号和分类错误。",
    solution: "规则结构化 + 历史编号检索 + 自动生成与重复校验 + 确认后写入台账。",
    role: "业务产品负责人 / 规则建模 / 反例验收 / 交付推动",
    status: "桌面工具 + 公开 Demo",
    capabilities: ["Business Rules", "Automation", "Excel", "AI-assisted Dev", "Delivery"],
    evidence: "四类编码主路径、9 个业务 Sheet、5 个核心测试通过、Windows 绿色版。",
    image: "/projects/code-generator/public-demo.png",
    imageAlt: "编码自动生成器公开交互演示站首页",
    imageBadge: "公开交互 Demo",
    caseStudyAvailable: true,
    demoUrl: "https://code-generator-demo-cn.j71315618.chatgpt.site/",
  },
  {
    slug: "creatoros",
    title: "CreatorOS 热点趋势情报台",
    englishTitle: "AI Content Intelligence",
    summary: "把多平台内容采集、研究沉淀和两阶段 AI 选题分析串成一个工作台。",
    problem: "跨平台内容结构不一致，人工搬运分散，热门内容难以转化为可追溯选题。",
    solution: "统一内容模型 + SQLite 历史库 + 飞书同步 + 两阶段 AI 分析。",
    role: "产品发起人 / AI 应用实施 / 数据规则定义 / 集成验收",
    status: "本地可运行原型",
    capabilities: ["Two-stage AI", "API Integration", "SQLite", "飞书研究库", "Data Modeling"],
    evidence: "9 张 SQLite 表；8 条本地内容与同步记录；2 次 AI 报告运行；10 条选题洞察。",
    image: "/projects/creatoros-homepage.png",
    imageAlt: "CreatorOS 热点趋势情报台本地首页顶部工作区",
    imageBadge: "本地工作台首页",
    caseStudyAvailable: true,
  },
  {
    slug: "ai-content-studio",
    title: "AI 内容创作工作台",
    englishTitle: "Structured Content Workflow",
    summary: "通过结构化输入、标题选择和多资产输出，把内容创作变成可管理工作流。",
    problem: "用户不会写 Prompt，标题、正文、封面和配图分散且缺少一致性。",
    solution: "结构化表单 + 候选标题 + 人工确认 + 正文/视觉资产 + 保存导出。",
    role: "需求拆解 / 产品规则 / AI 辅助实施与验收",
    status: "两个原型子案例",
    capabilities: ["Product Design", "Human-in-the-loop", "Content Safety", "Mock / AI"],
    evidence: "小红书 MVP 26 项测试通过；公众号形成可直接运行的单文件工具。",
    image: "/projects/ai-content-studio/xiaohongshu-demo.png",
    imageAlt: "小红书爆款图文智能体本地运行界面",
    imageBadge: "本地 MVP 运行截图",
    caseStudyAvailable: true,
  },
  {
    slug: "transcription-assistant",
    title: "项目3：会议纪要转录助手",
    englishTitle: "Audio & Video Intelligence",
    summary: "将媒体链接、本地音视频与飞书妙记内容统一转录、总结，并输出结构化 Markdown 结果。",
    problem: "转录、整理与总结分散在多个工具中，处理链路长、重复操作多，长任务缺少进度反馈。",
    solution: "统一飞书入口 + 异步任务编排 + 音视频处理 / 转录 + 结构化总结与 Markdown 输出。",
    role: "需求与产品设计 / Agent 工具编排 / 飞书接入与验收",
    status: "本地可运行 Agent PoC + 公开 Demo",
    capabilities: ["Transcription", "Summarization", "Agent Workflow", "飞书", "MCP / Tools"],
    evidence: "真实飞书运行截图；现有目录保留 7 个 Markdown 交付文件与 5 份任务状态。",
    image: "/projects/transcription-assistant/feishu-real-run.png",
    imageAlt: "音视频转录助手在飞书中检查转录工具运行环境",
    caseStudyAvailable: true,
    demoUrl: "https://audio-video-agent-demo.j71315618.chatgpt.site/",
  },
];

export const featuredProjects = [projects[0], projects[1], projects[4]];
export const otherProjects = [projects[2], projects[3]];

export const plmCaseStudy = {
  overview: "面向公司内部 PLM 使用人员的飞书知识问答 Agent。它把用户的自然语言问题路由到 Hermes 和本地 PLM 问题库，输出有知识依据的处理建议，并对权限、系统异常、SQL 与配置修改等高风险场景进行限制。",
  before: [
    "用户描述报错或操作问题",
    "人工提取模块、动作与报错信息",
    "在 Excel 与历史记录中多轮搜索",
    "人工判断答案是否适用",
    "手工改写回复或转交管理员",
  ],
  after: [
    "用户在飞书私聊或群聊 @机器人",
    "系统过滤、去重并识别问题类型",
    "Hermes 调用本地知识检索工具",
    "规则判断置信度、冲突与风险",
    "回答、追问或提示人工确认",
  ],
  breakdown: [
    { label: "业务问题", value: "高频重复咨询长期依赖管理员人工处理，历史解决方案分散，难以持续复用。" },
    { label: "核心规则", value: "回答必须有知识依据；无明确答案不编造，检索未命中或无法判断时转人工。" },
    { label: "产品需求", value: "统一飞书入口，支持知识检索、答案返回、来源追溯与未命中转人工。" },
    { label: "技术实现", value: "飞书消息入口 + Hermes 工作流编排 + 本地知识检索 + 规则判断与人工兜底。" },
  ],
  solution: ["飞书消息", "事件过滤与去重", "Hermes 意图与工具编排", "727 条本地知识索引", "风险与冲突校验", "回复 / 追问 / 人工确认"],
  boundaries: [
    { title: "AI", text: "理解用户自然语言问题、识别意图，并基于检索结果组织自然语言回答。" },
    { title: "Rule-based", text: "判断是否有明确知识依据；无匹配、低置信或存在冲突时不直接回答，转入兜底流程。" },
    { title: "Automation", text: "接收飞书消息、触发知识检索、记录问答结果，并按规则完成回复或转人工。" },
    { title: "API / Platform", text: "飞书承载消息入口与交互；Hermes 负责任务编排与工具调用；知识检索和模型能力通过对应服务完成。" },
    { title: "Human", text: "处理知识库未覆盖、答案冲突、权限配置、系统异常等需要人工判断或实际操作的问题。" },
  ],
  decisions: [
    { question: "入口应该放在哪里？", choice: "选择飞书，而不是新增独立后台。", why: "用户已经在飞书工作，降低切换和培训成本。" },
    { question: "模型可以自由回答吗？", choice: "PLM 事实必须来自本地知识检索。", why: "企业系统问题的错误建议可能影响真实业务。" },
    { question: "是否直接替换旧链路？", choice: "Hermes 主链 + DeepSeek/规则回退。", why: "渐进替换便于验证、降级和排错。" },
    { question: "如何公开展示？", choice: "真实运行与脱敏 Demo 完全隔离。", why: "兼顾作品展示、企业数据与权限安全。" },
  ],
  challenges: [
    { title: "01｜分散记录 → 可复用知识资产", problem: "历史问题和解决方案散落在 Excel 与记录中，格式不统一，无法直接用于稳定检索。", solution: "梳理问题、答案、来源、标签和风险字段，将历史记录转为结构化知识数据。", result: "形成 727 条可检索知识条目，为后续问答和来源追溯提供基础。" },
    { title: "02｜用户怎么问 → 系统都能理解", problem: "用户习惯说“打不开、报错了、发不出去”，与知识库中的标准术语并不一致，直接关键词检索容易漏掉答案。", solution: "围绕真实用户表达优化检索方式，让自然语言问题能够匹配对应的系统问题和历史解决方案。", result: "典型口语化问题可以命中对应知识，并进入统一问答流程。" },
    { title: "03｜能回答 → 可信回答", problem: "模型表达自然，但可能扩写不存在的 PLM 事实。", solution: "模型负责理解和表达，知识库提供事实，固定规则负责安全。", result: "形成“有依据则回答 / 无依据则转人工”的受控问答机制。" },
  ],
  results: [
    "完成 727 条历史问答的结构化整理与索引化，形成可检索知识资产",
    "建立 11 类主题标签、4 类风险标记与 3 类答案质量标记",
    "跑通飞书私聊 / 群聊触发、消息去重与自动回复流程",
    "完成 Hermes 编排、知识检索与规则兜底链路验证",
    "运行日志已记录 4 次启动、4 次事件处理与 17 次成功回复",
    "已提供公开演示页面，用于展示产品流程与交互逻辑",
  ],
  limitations: [
    "管理员自动通知、截图理解及 PLM / ERP 实时接口仍待补齐",
    "尚未建立正式评测集、生产监控与知识审核发布机制",
    "用户规模、准确率、效率收益等业务指标尚未形成持续验证",
    "下一阶段重点：多人试用 → 评测指标 → 监控与审核 → 生产化部署",
  ],
};

export const codeGeneratorCaseStudy = {
  overview: "面向制造业务编码管理员的本地离线编码生成与 Excel 台账管理工具。它把分散在规则文档、个人经验和历史台账中的逻辑，转化为四类可执行、可校验、可追溯的确定性流程，并配套一个与真实数据完全隔离的公开交互 Demo。",
  before: [
    "申请者提供物料、平台、机种或文件类型等信息",
    "管理员人工判断编码类别并查阅规则",
    "打开 Excel 筛选同类历史记录与最大流水号",
    "人工拼接字段、判断重复和图号复用",
    "手工写回台账并向申请者反馈结果",
  ],
  after: [
    "管理员选择四类编码入口并填写结构化表单",
    "系统校验字段并识别目标 Sheet 与平台",
    "读取历史台账，计算流水号并检查重复",
    "先生成只读预览，由管理员确认业务信息",
    "再次校验，Excel 保存成功后才正式占号",
  ],
  breakdown: [
    { label: "业务问题", value: "复杂规则和历史查询依赖个人经验，错取类别、漏查记录或写错台账会直接形成错误编号。" },
    { label: "核心规则", value: "四类编码分别处理；完整号重复拦截；特定 P/Q 数字组合共享图号；保存成功才占号。" },
    { label: "产品需求", value: "离线可用、继续使用 Excel、结果先预览、失败可重试、正式数据与公开展示隔离。" },
    { label: "技术实现", value: "Tkinter 表单、Python 规则层、openpyxl 读取 9 个 Sheet、PyInstaller 绿色版分发。" },
  ],
  solution: ["结构化业务输入", "格式与必填校验", "Excel 历史检索", "规则与冲突判断", "只读结果预览", "确认写入 / 取消 / 重试"],
  boundaries: [
    { title: "AI", text: "只在研发期协助需求澄清、代码实现、测试、排错、打包和展示站建设，不参与运行时编号生成。" },
    { title: "Deterministic", text: "正则解析、前缀映射、流水号计算、重复检查和 P/Q 配对由确定性程序完成。" },
    { title: "Business Rules", text: "四类字段、578 例外、平台分表、图号共享与占号原则来自业务知识和反例验收。" },
    { title: "Platform", text: "openpyxl 负责 Excel 读写，PyInstaller 负责 Windows 分发；正式工具没有外部业务 API。" },
    { title: "Human", text: "申请信息真实性、预览确认、规则裁决与企业安全审批仍由管理员及业务责任人负责。" },
  ],
  decisions: [
    { question: "为什么第一版不做在线系统？", choice: "采用本地离线管理员工具。", why: "满足公司内网与数据不出本机约束，也避免过早建设账号、审批和云端服务。" },
    { question: "为什么继续使用 Excel？", choice: "保留 Excel 作为正式台账。", why: "业务已经熟悉现有台账，V1 优先降低迁移阻力，再用程序补足查询和校验能力。" },
    { question: "为什么不用大模型生成编号？", choice: "正式编号由确定性规则引擎生成。", why: "编号要求同输入同结果、可解释、可复核，概率模型不适合承担核心决策。" },
    { question: "如何兼顾公开展示与数据安全？", choice: "桌面正式工具与公开模拟 Demo 完全隔离。", why: "网页不接 Excel、数据库、API 或完整正式规则，只展示代表性交互。" },
  ],
  challenges: [
    { title: "人工 Excel → 可查询台账", problem: "9 个 Sheet 的列结构、混合格式和合并单元格面向人工阅读，不具备数据库约束。", solution: "按表头定位列、回填读取合并单元格，并按目标 Sheet 与编码前缀检索同类历史。", result: "核心层可读取不同类别历史，支持平台分表、同类插入和 P/Q 图号复用。" },
    { title: "模糊复用 → 两条独立规则", problem: "相同项目代号不一定是同一产品，但特定 P/Q 数字组合又必须共用图号。", solution: "先用完整完成品号拦截重复，再将 1/2、3/4、5/6、7/8 建立独立共享键。", result: "测试验证完整号重复被拒绝、p4/q3 共享、q1 与 q3 不共享。" },
    { title: "预览结果 → 一致占号", problem: "预览、取消或保存失败若提前占号会造成跳号，写入前台账也可能发生变化。", solution: "用 Preview 保存临时结果，确认时重新检查重复和文件可写性，只有保存成功才占号。", result: "预览、取消和写入异常不修改台账，界面支持重试或取消。" },
    { title: "源码可运行 → 企业电脑可交付", problem: "目标电脑没有 Python，代理、安全软件和依赖遗漏会影响运行与传输。", solution: "使用离线 PyInstaller 环境、显式补齐 openpyxl/et_xmlfile、完整绿色版目录和 SHA256 校验。", result: "已形成约 9.35 MB 的 Windows 发布 ZIP；真实长期运行范围仍待本人确认。" },
  ],
  results: [
    "实现零部件、578 马达、V28/V30/EVO 电机图号和文件编码四类入口",
    "实现 9 个 Excel Sheet 的初始化、读取、分类写入和完整台账导出",
    "实现完整号重复校验、P/Q 配对图号复用和合并单元格历史读取",
    "实现预览、确认写入、失败重试、取消以及保存成功才占号",
    "桌面核心层 5 个自动化测试全部通过",
    "形成 Windows 绿色版 ZIP 并提供 SHA256 校验文件",
    "公开交互 Demo 已上线，但使用 0 项真实数据、无业务 API、无正式台账连接",
  ],
  limitations: [
    "Excel 不提供数据库级事务与唯一约束，不适合多人并发和复杂恢复",
    "企业自动加密可能使台账无法读取，该问题不能通过绕过安全策略解决",
    "规则仍硬编码，变更需要改代码、补测试并重新发布",
    "缺少审计日志、权限模型、正式使用指标和更多边界测试",
    "公开网页是模拟演示，不能证明完整桌面规则引擎在线运行",
    "真实用户数、效率提升、错号下降和正式上线阶段均待本人确认",
  ],
};

export const aiContentStudioCaseStudy = {
  overview: "一组面向内容创作者的结构化创作工作流实验：公众号子案例用单文件规则原型验证从选题到标题、正文和配图提示词的最短闭环；小红书子案例进一步加入分阶段生成、人工选标题、Express API、SQLite 历史管理、内容安全和可选真实模型适配层。",
  before: [
    "用户从模糊选题开始，分别构思标题、正文和视觉方向",
    "在多个工具之间反复复制提示词与生成结果",
    "标题变化后手工同步正文、封面和配图文案",
    "内容生成后缺少统一保存、恢复和版本管理",
    "发布前依赖个人经验检查事实、安全与平台规范",
  ],
  after: [
    "用表单明确主题、受众、类型、风格、篇幅和素材",
    "系统按结构合同生成多组候选标题与内容资产",
    "用户先选择主标题，再联动正文和封面内容",
    "复制、下载，并在小红书版本中保存和恢复历史",
    "由规则审核与人工复核共同把控最终发布内容",
  ],
  breakdown: [
    { label: "业务问题", value: "内容创作不是单一写作任务，而是选题、标题、正文、封面、配图和发布建议组成的连续交付链路。" },
    { label: "核心规则", value: "输入结构化、候选标题先选后用、多资产共享同一主题、模型结果不可直接代表事实。" },
    { label: "产品需求", value: "小白可理解、等待过程可感知、结果可复制与下载、关键节点保留人工选择。" },
    { label: "技术实现", value: "公众号为单文件规则原型；小红书为原生前端 + Express API + SQLite + Mock/真实模型适配。" },
  ],
  solution: ["结构化创作输入", "分阶段生成反馈", "候选标题与评分", "人工选择主标题", "正文 / 封面 / 配图", "审核 / 保存 / 导出"],
  subcases: [
    {
      key: "wechat",
      title: "公众号爆文生成器",
      subtitle: "规则原型 · 单文件交付",
      description: "通过选题、受众、文章类型、风格、字数与图片开关，生成 5 个标题、简介、七段式正文、封面提示词和 3 条正文配图提示词。",
      status: "本地单文件原型",
      image: "/projects/ai-content-studio/wechat-demo.png",
      imageAlt: "公众号爆文生成器本地单文件界面",
      demoUrl: "/demos/wechat-article-generator.html",
      verified: "48,250 字节单文件；无后端、无网络请求；支持标题联动、复制和 TXT 导出。",
      boundary: "运行时没有 AI，内容来自模板抽样与变量替换；“生成图片”实际只生成图片提示词。",
    },
    {
      key: "xiaohongshu",
      title: "小红书爆款图文智能体",
      subtitle: "全栈 MVP · 当前 Mock 模式",
      description: "通过七类创作输入、六步生成反馈和 10 个候选标题，形成正文、封面、3 张配图提示词、标签与发布建议，并管理历史记录。",
      status: "本地可运行全栈 MVP",
      image: "/projects/ai-content-studio/xiaohongshu-demo.png",
      imageAlt: "小红书爆款图文智能体本地运行界面",
      verified: "Express REST API、SQLite 历史管理、10 类安全规则；26 项自动化测试通过。",
      boundary: "真实模型适配代码已存在，但当前运行实例为 Mock，缺少真实模型成功调用证据。",
    },
  ],
  boundaries: [
    { title: "AI", text: "小红书真实模式可通过兼容 Chat Completions 的接口生成结构化内容，但当前没有成功调用证据；公众号运行时无 AI。" },
    { title: "Rule-based", text: "标题数量、正文结构、图片位、发布建议和 10 类安全规则由产品规则与确定性代码约束。" },
    { title: "Automation", text: "表单校验、进度反馈、标题联动、复制、下载、历史 CRUD 和 JSON 修复属于普通程序逻辑。" },
    { title: "API / Data", text: "小红书使用 Express REST API 与 SQLite；公众号完全在浏览器内运行且刷新后结果丢失。" },
    { title: "Human", text: "用户选择主标题、补充真实事实与个人经验，并在发布前复核内容安全、版权和平台规范。" },
  ],
  decisions: [
    { question: "为什么不用一个聊天框？", choice: "将创作过程拆成结构化表单和结果卡片。", why: "降低 Prompt 门槛，也让标题、正文、封面和配图共享明确的数据合同。" },
    { question: "为什么先给候选标题？", choice: "让用户先选标题，再联动后续内容。", why: "标题影响整套内容方向，人工确认点比一次性生成最终稿更可控。" },
    { question: "为什么先做 Mock？", choice: "先验证完整产品闭环，再接真实模型。", why: "避免密钥、供应商、成本和返回稳定性阻塞交互、存储与安全能力验证。" },
    { question: "为什么不自动发布？", choice: "结果只复制、下载或保存，发布留给用户。", why: "当前没有平台授权、事实核验和生产级审核，人工确认不能被跳过。" },
  ],
  challenges: [
    { title: "“爆款”目标 → 可执行结构", problem: "“写一篇爆文”是结果期待，不是可开发、可验收的需求。", solution: "拆成主题、受众、类型、风格、篇幅、素材以及标题、正文、封面、配图等结构合同。", result: "公众号形成完整规则链路；小红书形成 10 个标题和多资产输出流程，但流量效果未验证。" },
    { title: "多候选标题 → 内容一致", problem: "切换主标题后，正文标题、封面文案和复制结果容易不同步。", solution: "用单一选中标题状态驱动结果重绘，并把选择节点放在后续内容使用之前。", result: "两个子案例均支持标题选择与内容联动，用户保留最终方向控制权。" },
    { title: "模型输出 → 稳定数据合同", problem: "LLM 可能返回代码块、尾逗号、缺字段或错误数组长度。", solution: "小红书真实模式加入 JSON 提取、局部修复、字段校验和一次模型修复，失败时返回中文错误。", result: "结构修复与失败分支有测试覆盖；Mock 与真实正文合同仍未完全统一。" },
    { title: "生成自由度 → 安全边界", problem: "内容可能包含绝对化营销、隐私、高风险建议或虚构案例。", solution: "Prompt 约束之外增加 10 类本地规则审核，并要求用户补充事实、人工复核后再发布。", result: "安全阻断路径通过测试，但关键词规则无法替代上下文判断和人工审核。" },
  ],
  results: [
    "公众号形成可直接打开的 48,250 字节单文件工具，无后端、无网络请求",
    "公众号实现 6 类输入条件、5 个标题、七段正文和 4 条图片提示词",
    "公众号实现标题联动、分模块复制、复制全部和带 UTF-8 BOM 的 TXT 导出",
    "小红书形成输入、生成、选择、展示、复制、保存、恢复、删除与下载闭环",
    "小红书实现 Express API、SQLite 表、Mock 生成、真实模型适配与内容安全代码",
    "小红书自动化测试 26 项通过，当前 3210 健康检查为 Mock 模式",
    "两个子案例均保留人工标题选择与发布前复核节点",
  ],
  limitations: [
    "“爆款”尚无阅读、点赞、收藏、转发或 A/B 测试数据验证",
    "小红书当前没有可验证的真实模型供应商配置和成功调用记录",
    "小红书 Mock 与真实 AI 正文合同未完全统一，新旧入口和端口仍有工程债务",
    "公众号内容模板同质化、字数控制不精确，且可能生成需人工改写的案例叙述",
    "两个子案例均未实现真实图片生成、发布平台集成和生产级内容治理",
    "真实用户数、采用率、节约时间、上线阶段与内容效果均待本人确认",
  ],
};

export const transcriptionAssistantCaseStudy = {
  overview: "面向视频内容、会议音频与飞书妙记的转录 Agent PoC。用户从飞书提交链接或任务后，系统识别来源、异步执行下载与音频处理，通过本地 Whisper 转写，并把逐字稿、会议总结等结果保存为 Markdown，再回到飞书通知完成。公开网页仅用于说明产品流程，不连接这套真实运行链路。",
  before: [
    "人工确认链接或文件是否可访问",
    "在不同工具间下载视频并抽取音轨",
    "启动转写后长时间等待，缺少统一进度",
    "手工整理逐字稿、会议主题与行动项",
    "再把文件路径或结果复制回沟通工具",
  ],
  after: [
    "用户在飞书提交媒体链接、文件或妙记来源",
    "Agent 识别来源并检查本地工具与输入条件",
    "任务进入异步队列，记录状态、进度与去重信息",
    "媒体执行下载、抽取和 Whisper 转写；妙记复用原逐字稿",
    "生成 Markdown 逐字稿 / 会议总结并在飞书通知结果",
  ],
  breakdown: [
    { label: "业务问题", value: "音视频信息难检索、难引用；从获取文件到整理纪要的链路分散，重复劳动多。" },
    { label: "核心规则", value: "不同来源走不同处理链；长任务异步执行；已处理来源不重复跑；总结引用必须能回到原逐字稿。" },
    { label: "产品需求", value: "保留飞书入口、返回任务状态、支持失败排查与恢复，并把结果沉淀成可继续编辑的 Markdown。" },
    { label: "技术实现", value: "Feishu Bridge + Hermes / FastMCP + yt-dlp + ffmpeg + Whisper + JSON 任务状态 + 会议总结流程。" },
  ],
  solution: ["飞书输入", "来源识别 / 环境检查", "异步任务 / 去重", "下载或获取逐字稿", "转写 / 总结 / 可选翻译", "Markdown 交付 / 飞书通知"],
  boundaries: [
    { title: "AI", text: "Whisper 负责语音识别；LLM / Hermes 用于会议内容总结与可选翻译。模型输出不是未经复核即可发布的事实。" },
    { title: "Deterministic", text: "来源判断、下载、音轨抽取、路径管理、任务状态、去重、超时和总结引用校验由确定性程序完成。" },
    { title: "Agent / MCP", text: "Hermes 通过 FastMCP 工具发起转录任务、查询状态与组织后续动作；耗时工作由独立 worker 执行。" },
    { title: "API / Platform", text: "飞书承担消息入口与结果通知；飞书妙记提供原始逐字稿；本地工具链处理通用媒体来源。" },
    { title: "Human", text: "用户负责确认来源权限、复核专业词和行动项，并决定敏感音视频及总结是否可以对外分享。" },
  ],
  decisions: [
    { question: "为什么入口放在飞书？", choice: "沿用用户已有沟通场景，而不是先做独立后台。", why: "提交链接、追问状态和接收结果都能留在同一工作环境，降低使用门槛。" },
    { question: "为什么必须做异步任务？", choice: "提交后立即返回 task_id，让下载与转写在后台执行。", why: "下载、ffmpeg 和 Whisper 都可能耗时，阻塞消息链路会造成超时，也无法表达进度。" },
    { question: "飞书妙记为什么不重新转写？", choice: "优先复用平台已有逐字稿，再做证据化总结。", why: "避免重复计算，也保留说话人和时间戳，便于核对总结依据。" },
    { question: "如何兼顾公开展示与真实运行？", choice: "真实飞书证据与公开网页 Demo 完全分离。", why: "网页只展示交互与能力边界，不暴露内部消息、文件、密钥或本地任务目录。" },
  ],
  challenges: [
    { title: "依赖环境 → 可诊断工具链", problem: "yt-dlp、ffmpeg 与 Whisper 的安装位置和 PATH 状态会直接影响任务启动。", solution: "启动前显式检查依赖，并使用项目内脚本路径、日志和状态文件记录失败位置。", result: "飞书真实截图可验证 Agent 执行环境检查；后续实现保留 ffmpeg 与 Whisper 日志。" },
    { title: "长耗时处理 → 异步可恢复", problem: "同步等待容易超时，任务中断后也难判断进行到哪一步。", solution: "引入任务目录、task_id、状态与进度字段、独立 worker，以及未完成任务恢复和活动任务去重。", result: "现有目录保留 5 份任务状态，其中 3 份完成、2 份停留在转写中，可直接观察执行状态。" },
    { title: "多种来源 → 分路径处理", problem: "网页视频、本地媒体与飞书妙记的获取方式、元数据和后续动作不同。", solution: "先识别 source_type：通用媒体走下载、抽取、转写；妙记走原逐字稿获取与会议总结。", result: "输出目录同时保留通用媒体转录文件与飞书妙记逐字稿、会议纪要文件。" },
    { title: "长会议总结 → 有据可核", problem: "长逐字稿容易超出上下文，模型也可能生成找不到原文依据的说话人与时间点。", solution: "预处理并分块长文本，限制主题数量，要求固定结构，并校验总结引用是否存在于允许的说话人 / 时间戳集合中。", result: "现有资料中形成逐字稿、会议纪要和优化版纪要；总结准确率仍缺少正式评测。" },
  ],
  results: [
    "完成飞书机器人身份验证，并保留私聊、群聊消息接收与自动回复测试记录",
    "形成通用媒体与飞书妙记两类处理路径，支持链接识别、任务去重与已处理来源判断",
    "实现异步任务创建、进度查询、后台 worker、失败记录与未完成任务恢复逻辑",
    "通用媒体链路包含 yt-dlp 下载、ffmpeg 单声道 16 kHz 音频抽取与本地 Whisper 转写",
    "飞书妙记链路复用原逐字稿，并形成带结构要求和引用校验的会议总结流程",
    "现有输出目录保留 7 个 Markdown 文件，包含转录测试、真实飞书任务、妙记逐字稿与会议纪要产物",
    "公开展示 Demo 已提供，但不连接真实飞书 Agent、本地文件或任务数据",
  ],
  limitations: [
    "现有项目复盘文件夹为空，本页依据运行代码、配置说明、截图与输出产物整理，个人分工细节仍需本人确认",
    "5 份任务状态中仍有 2 份停留在 transcribing，说明中断清理、超时终止与恢复验收尚未完全闭环",
    "本地 Windows 工具链与 Whisper tiny 模型会影响部署便利性和专业词转录准确率",
    "尚无 WER、会议总结准确率、处理时长、失败率或不同音质条件下的正式评测集",
    "模型供应商、数据传输边界、文件留存与敏感会议权限策略仍需本人确认",
    "真实用户数、持续运行规模、效率收益、成本与生产上线状态均待本人确认",
  ],
};

export const creatorOsCaseStudy = {
  overview: "面向内容运营与选题研究的本地优先工作台。它按研究主题组织多平台关键词和链接采集，把不同平台内容转换为统一数据模型，沉淀到 SQLite 与飞书研究库，再通过“逐篇结构化摘录 → 跨文章选题洞察”的两阶段 AI 流程，把分散内容线索转成可追溯的选题建议。",
  before: [
    "分别进入多个内容平台搜索关键词与对标内容",
    "人工复制标题、正文、互动数据、图片和链接",
    "临时搜索与失败记录没有统一历史",
    "凭经验阅读热门内容并归纳选题方向",
    "最终报告难以回看引用了哪些原始文章",
  ],
  after: [
    "按研究主题配置关键词、平台或粘贴单篇链接",
    "平台适配器采集并转换为统一内容模型",
    "SQLite 保存内容、运行历史、原始响应与同步状态",
    "可选同步到飞书多维表格形成协作研究库",
    "AI 先逐篇摘录，再生成带来源的结构化选题洞察",
  ],
  breakdown: [
    { label: "业务问题", value: "多平台研究不是缺少内容，而是缺少统一采集、可复盘沉淀和从热门信号到可执行选题的连续流程。" },
    { label: "核心规则", value: "主题高于平台；内容统一建模并保留原始响应；Top 内容先摘录后洞察；外部同步失败不回滚本地采集。" },
    { label: "产品需求", value: "覆盖持续监控与临时链接两种入口，提供内容池、历史库、报告和飞书研究库，并保留人工判断节点。" },
    { label: "技术实现", value: "Next.js BFF + 平台适配层 + SQLite 九表数据模型 + TikHub + OpenAI 兼容接口 + lark-cli。" },
  ],
  solution: ["主题与采集配置", "链接 / 关键词采集", "统一模型与原始响应", "SQLite 历史沉淀", "逐篇摘录 → 跨文洞察", "飞书研究库 / 人工采用"],
  boundaries: [
    { title: "AI", text: "只负责逐篇摘要、关键信息提取和跨文章选题归纳；结构与数量有程序兜底，但洞察质量和事实仍需人工判断。" },
    { title: "Rule-based", text: "平台识别、时间窗口、Top 数量、热度排序、至少 5 条输出和来源关联由业务规则与确定性代码控制。" },
    { title: "Automation", text: "HTTP 采集、字段映射、去重更新、历史保存、日报检查和飞书同步属于自动化，不包装成 AI 能力。" },
    { title: "API / Data", text: "TikHub 提供平台数据；SQLite 是本地事实源；飞书是人工浏览与协作研究库；当前没有向量检索或 RAG。" },
    { title: "Human", text: "运营人员确认研究主题、复核来源和洞察、决定是否采用与发布，并负责内容版权、平台条款和数据合规判断。" },
  ],
  decisions: [
    { question: "为什么按主题而不是平台组织？", choice: "把监控分类设为顶层对象，平台作为采集维度。", why: "用户研究的是 Claude Code 等主题，同一主题会跨越多个平台，报告也需要跨平台归纳。" },
    { question: "为什么不让模型直接读完所有文章出报告？", choice: "先逐篇结构化摘录，再跨文章生成洞察。", why: "中间产物可检查、可持久化，也让最终建议能够关联回来源 noteId，降低空泛和不可追溯。" },
    { question: "为什么同时使用 SQLite 和飞书？", choice: "SQLite 做事实源，飞书做研究协作界面。", why: "系统需要稳定去重、查询与状态关联；研究人员又需要熟悉的卡片、附件和协作体验。" },
    { question: "为什么先做本地工作台？", choice: "用 Next.js 单体、SQLite 和本地 CLI 快速验证单用户闭环。", why: "阶段目标是先跑通采集、沉淀、分析和复用；权限、多租户、队列与云部署留到产品化阶段。" },
  ],
  challenges: [
    { title: "异构平台 → 统一内容模型", problem: "不同平台的标题、正文、封面、多图、互动量与发布时间字段和层级不同。", solution: "为平台建立适配器，统一转换为 CollectedNoteRecord，并保留 rawJson 便于接口变化后回溯。", result: "小红书、抖音、公众号、Twitter/X 与 YouTube 内容可进入同一 SQLite、页面和分析链路。" },
    { title: "飞书附件 → 幂等同步", problem: "记录写入和附件上传是分离操作，图片可能需要 Referer，重复执行也可能创建重复记录。", solution: "先 upsert 飞书记录，再下载并上传附件；本地保存 recordId 与同步状态，失败可手动重试。", result: "现有数据库保留 8 条本地内容和 8 条飞书同步映射；附件级失败不会回滚已采集内容。" },
    { title: "模型报告 → 可追溯选题", problem: "单轮模型同时阅读、归纳和创意容易字段缺失、来源不清或输出过少。", solution: "拆成文章摘录与选题洞察两阶段，按 noteId 对齐来源，并清洗字段、限制分数、补齐数量下限。", result: "当前本地库保留 2 次报告运行、6 条文章摘录和 10 条选题洞察；质量仍需人工评估。" },
    { title: "外部失败 → 主流程可恢复", problem: "平台 Token、网页访问、模型响应和飞书附件都可能独立失败。", solution: "分别记录采集运行、业务历史、报告运行和同步状态；优先保留已经成功采集的本地数据。", result: "当前库保留 11 次采集运行与 8 条历史记录，但尚无后台重试队列、告警和调用监控。" },
  ],
  results: [
    "形成可在 Windows 本地运行的 Next.js 内容研究工作台，包含内容、选题分析与报告、监控设置、历史库四个主入口",
    "建立 9 张业务表的 SQLite 数据层，支持自动初始化、WAL、兼容迁移、唯一键与 upsert",
    "实现关键词采集、单链接采集、历史记录、飞书同步、AI 报告及日报检查等内部 API",
    "深度接入小红书、抖音、公众号、Twitter/X、YouTube 等 TikHub 能力，并为其他链接提供网页元信息回退",
    "实现逐篇结构化摘录与跨文章选题洞察两阶段 AI 流程，并用程序保证至少 5 条结构化输出",
    "当前本地库可核对到 8 条内容、8 条飞书同步记录、11 次采集运行、2 次 AI 报告、6 条摘录和 10 条洞察",
    "代码已做私有归档并排除本地密钥和数据库；真实使用人数、效率收益与内容增长结果没有可验证数据",
  ],
  limitations: [
    "当前页面混合静态演示内容和 SQLite 真实数据，日期、数量与内容口径可能不一致",
    "新建分类、对标账号、部分筛选器和平台开关没有完整持久化或真实业务逻辑",
    "关键词采集重点支持小红书和 Twitter/X；页面列出的平台不等于全部完成深度关键词接入",
    "日报依赖页面每分钟轮询，浏览器关闭后不会运行，不能表述为无人值守定时系统",
    "当前没有 Agent、RAG 或 MCP 运行时，也没有认证、权限、多用户、任务队列、监控告警和自动化测试",
    "SQLite、lark-cli 与本地环境适合个人原型，不适合直接作为多实例生产架构",
    "当前模型、开发周期、实际采集成功率、成本、用户规模、洞察采纳与合规结论均待本人确认",
  ],
}; 
