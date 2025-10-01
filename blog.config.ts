import type { FeedEntry } from './app/types/feed'

export { zhCN as dateLocale } from 'date-fns/locale/zh-CN'

const basicConfig = {
	title: '博客',
	subtitle: '欢迎来到小源151官方博客！',
	// 长 description 利好于 SEO
	description: '欢迎来到小源151官方博客！在这里，您可以找到关于编程、生活、杂谈等方面的文章。我们致力于分享我们的经验和见解，与您共同成长。欢迎订阅我们的博客，与我们一起探索知识的海洋！',
	author: {
		name: '小源151',
		avatar: 'https://www.gravatar.com/avatar/418e1da2b29ef51b1f86d6b2e041981d703c748aa0bd29831bac02fa9747faa7',
		email: 'contact@xiaoyuan151.com',
		homepage: 'https://www.xiaoyuan151.com',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名—非商业性使用—相同方式共享 4.0 协议国际版',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: '/favicon.png',
	language: 'zh-CN',
	timeEstablished: '2024-03-19',
	timezone: 'Asia/Shanghai',
	url: 'https://blog.xiaoyuan151.com',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			人工智能: { icon: 'hugeicons:neural-network', color: '#3af' },
			网络: { icon: 'ph:globe-bold', color: '#3ba' },
			生活: { icon: 'ph:shooting-star-bold', color: '#f77' },
			代码: { icon: 'ph:code-bold', color: '#77f' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己部署的 Umami 统计服务
		{ 'src': 'https://cloud.umami.is/script.js', 'data-website-id': 'b5fd4df7-560d-4a2d-acfd-f48df8ca035a', 'defer': true },
		// 自己网站的 Cloudflare Insights 统计服务
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "5a4e497e710542be9df8e73c9059355a"}', 'defer': true },
		// Twikoo 评论系统
		{ src: 'https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js', defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: 'https://twikoo.xiaoyuan151.net/.netlify/functions/twikoo',
		preload: 'https://twikoo.xiaoyuan151.net/.netlify/functions/twikoo',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: '博客',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Vercel'],
	date: blogConfig.timeEstablished,
}

export default blogConfig
