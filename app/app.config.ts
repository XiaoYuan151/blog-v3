import type { Nav, NavItem } from '~/types/nav'
import blogConfig from '~~/blog.config'
import { version } from '~~/package.json'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

// @keep-sorted
export default defineAppConfig({
	// 将 blog.config 中的配置项复制到 appConfig，方便调用
	...blogConfig,

	component: {
		alert: {
			/** 默认使用卡片风格还是扁平风格 */
			defaultStyle: 'card' as 'card' | 'flat',
		},

		codeblock: {
			/** 代码块触发折叠的行数 */
			triggerRows: 32,
			/** 代码块折叠后的行数 */
			collapsedRows: 16,
		},

		/** 文章开头摘要 */
		excerpt: {
			animation: true,
			caret: '_',
		},

		stats: {
			/** 归档页面每年标题对应的年龄 */
			birthYear: 2009,
			/** blog-stats widget 的预置文本 */
			wordCount: '约 10 万',
		},
	},

	// @keep-sorted
	footer: {
		/** 页脚版权信息，支持 <br> 换行等 HTML 标签 */
		copyright: `© 版权所有 2024–${new Date().getFullYear()} ${blogConfig.author.name} | 保留所有权利`,
		/** 侧边栏底部图标导航 */
		iconNav: [
			{ icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
			{ icon: 'ph:linktree-logo-bold', text: 'Linktree', url: 'https://linktr.ee/xiaoyuan151' },
			{ icon: 'ph:rss-simple-bold', text: 'Atom 订阅', url: '/atom.xml' },
		] satisfies NavItem[],
		/** 页脚站点地图 */
		nav: [
			{
				title: '探索',
				items: [
					{ icon: 'ph:rss-simple-bold', text: 'Atom 订阅', url: '/atom.xml' },
				],
			},
			{
				title: '社交',
				items: [
					{ icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
					{ icon: 'ph:linktree-logo-bold', text: 'Linktree', url: 'https://linktr.ee/xiaoyuan151' },
				],
			},
			{
				title: '信息',
				items: [
					{ icon: 'simple-icons:nuxtdotjs', text: `主题: Clarity ${version}`, url: 'https://github.com/L33Z22L11/blog-v3' },
					{ icon: 'ph:certificate-bold', text: '萌ICP备20250319号', url: 'https://icp.gov.moe/?keyword=20250319' },
				],
			},
		] satisfies Nav,
	},

	/** 左侧栏顶部 Logo */
	header: {
		logo: 'https://www.gravatar.com/avatar/418e1da2b29ef51b1f86d6b2e041981d703c748aa0bd29831bac02fa9747faa7',
		/** 展示标题文本，否则展示纯 Logo */
		showTitle: true,
		subtitle: blogConfig.subtitle,
		emojiTail: ['😎', '🤓', '💀', '🤓', '😎'],
	},

	/** 左侧栏导航 */
	nav: [
		{
			title: '',
			items: [
				{ icon: 'ph:files-bold', text: '文章', url: '/' },
				{ icon: 'ph:link-bold', text: '链接', url: '/link' },
				{ icon: 'ph:archive-bold', text: '归档', url: '/archive' },
			],
		},
	] satisfies Nav,

	pagination: {
		perPage: 10,
		/** 默认排序方式，需要是 this.article.order 中的键名 */
		sortOrder: 'date' as const,
		/** 允许（普通/预览/归档）文章列表正序，开启后排序方式左侧图标可切换顺序 */
		allowAscending: false,
	},

	themes: {
		light: {
			icon: 'ph:sun-bold',
			tip: '浅色模式',
		},
		system: {
			icon: 'ph:monitor-bold',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ph:moon-bold',
			tip: '深色模式',
		},
	},
})
