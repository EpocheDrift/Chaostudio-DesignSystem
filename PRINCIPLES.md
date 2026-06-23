# Chaostudio · 视觉原则 / Visual Principles

> Token 管"用什么值",这份文档管"为什么"。两人对审美有分歧时,以此为准。
> Tokens say *what*; this doc says *why*. When taste disagrees, this is the tiebreaker.

---

## 1. 核心隐喻:档案终端,不是网站 · Archive terminal, not a website

界面是一台**仪器**,不是一张海报。信息以"信号(signal)"的形式进入,经过"路由(routing)",沉淀为"档案记录(record)"。所有视觉决策都服务于这种"被精密编目的"质感,而不是"被装饰过的"观感。

- 暗场为底,米白为墨,像一块被点亮的取景器。
- 一切元素都像被测量、编号、归档过的。

## 2. 近单色,克制用色 · Near-monochrome, restrained

整套界面几乎只有两种颜色:**ground(暗)** 与 **ink(米白)**。

- **琥珀 amber (`--cs-accent`)** 是唯一的暖色,只用于**动作和"在线/激活"状态**(按钮、当前项)。一屏出现超过 2–3 处琥珀,它就失效了。
- **青灰 cyan (`--cs-signal`)** 是冷色信号点,用于次级高亮、数据、链接态。
- 层级靠**米白的透明度阶梯**(ink → muted → faint)拉开,不靠新颜色。

## 3. 字体:小字宽间距,是签名 · Wide-tracked small caps are the signature

- 主力字体是 **IBM Plex Sans Condensed**——技术、紧凑、目录感。
- **小字(标签/导航/元信息)一律重 tracking**(`--cs-track-wide` = 0.16em),通常大写或小型大写。这是 Chaostudio 最易识别的特征。
- **大标题反过来:tracking 归零(`--cs-track-tight`)**,字距收紧、字号放大(fluid clamp)。大小标题的"松紧对比"是张力来源。
- UI 文字活在 **9–18px** 这个窄带里。想强调,先动**字重/字距/大小写**,而不是字号或颜色。

## 4. 直角与发丝线 · Sharp corners & hairlines

- **默认圆角为 0。** 直角是品牌特征,不是疏忽。唯二例外:`2px` 发丝圆角、`999px` 琥珀胶囊按钮。
- 用 **1px 发丝线(`--cs-border`)** 划分区域,**绝不用阴影**。没有投影、没有卡片浮起。结构靠线,不靠光。

## 5. 一条缓动,内容"路由进场" · One easing, content routes in

- 所有动效共用一条缓动 `--cs-ease`(`cubic-bezier(0.2,0.72,0.18,1)`)。不要引入第二条曲线。
- 时长按"内容重量"取阶梯:微交互快(`--cs-dur-1`),面板/路由切换慢(`--cs-dur-5/6`)。
- 进场动作的语感是"被路由/被检索出来",而不是"弹跳/淡入"。

## 6. 双语对等 · Bilingual parity

EN 与 中文 是一等公民,不是翻译附属。中文用 `--cs-font-cjk`。排版时为两种语言都预留呼吸空间,任一语言都不应让布局破相。

---

## Do / Don't 速查

| ✅ Do | ❌ Don't |
|---|---|
| 小字 + 宽 tracking + 大写 | 用更大字号来"喊话" |
| 用发丝线划分结构 | 用阴影/卡片浮起 |
| 琥珀只给动作和激活态 | 把琥珀当装饰色铺开 |
| 直角 | 随手加圆角 |
| 透明度拉层级 | 引入新颜色拉层级 |
| 复用 `--cs-ease` | 每个动画各调一条曲线 |
| 把新视觉值先加进 token | 在组件里硬编码数值 |

---

## 演进规则 · How this evolves

任何新的视觉决策,**先进 `tokens.css`(并同步 `tokens.ts`),再进组件**。
`styleguide.html` 会自动反映 token 的变化——它就是我俩的"对表"页面。
See [`README.md`](./README.md) for the shared workflow.
