import type { FeedGroup } from '~/types/feed'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	{
		name: '官方网站',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '小源工作室',
				sitenick: '官网',
				desc: '小源工作室官方网站',
				link: 'https://www.xiaoyuanstd.org',
				icon: getFavicon('www.xiaoyuanstd.org'),
				avatar: getFavicon('www.xiaoyuanstd.org'),
				archs: ['Next.js', 'Cloudflare'],
				date: '2020-01-01',
				comment: '欢迎来到小源工作室官方网站！',
			},
			{
				author: '小源人工智能',
				sitenick: '官网',
				desc: '小源人工智能官方网站',
				link: 'https://ai.xiaoyuan151.com',
				icon: getFavicon('ai.xiaoyuan151.com'),
				avatar: getFavicon('ai.xiaoyuan151.com'),
				archs: ['VitePress', 'Cloudflare'],
				date: '2025-08-15',
				comment: '欢迎来到小源人工智能官方网站！',
			},
		],
	},
	{
		name: '我的朋友',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'wyf9 的博客',
				desc: 'SiiWay 团队创始人之一 (?)，兼核心成员',
				link: 'https://wyf9.top',
				icon: getFavicon('wyf9.top'),
				avatar: getFavicon('wyf9.top'),
				archs: ['Astro', 'Cloudflare'],
				date: '2020-01-01',
			},
			{
				author: 'zackzheng 的小基地',
				desc: '第55屆全國技能競賽分區賽J09商務軟體設計選手',
				link: 'https://zackzheng1121.github.io',
				icon: getFavicon('zackzheng1121.github.io'),
				avatar: getFavicon('zackzheng1121.github.io'),
				archs: ['Hexo', 'GitHub Pages'],
				date: '2020-01-01',
			},
		],
	},
] satisfies FeedGroup[]
