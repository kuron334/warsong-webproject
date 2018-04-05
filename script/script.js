var topMenuButton = new Vue({
	el: '#menu-button',
	data: {
		toggle: true,
	}
})

var drowerMenuChildItems = new Vue({
	el: '#drower-menu-list',
	data: {
		lists: [
			{
				items: '最新情報',
				childLists:[]
			},
			{
				items: 'ヒーロー',
				childLists: [
					{ childItems: 'タンク' },
					{ childItems: 'ファイター' },
					{ childItems: 'アサシン' },
					{ childItems: 'メイジ' },
					{ childItems: 'マークスマン' },
					{ childItems: 'サポート' }
				]
			},
			{
				items: 'おすすめ装備',
				childLists: [
					{ childItems: 'タンク' },
					{ childItems: 'ファイター' },
					{ childItems: 'アサシン' },
					{ childItems: 'メイジ' },
					{ childItems: 'マークスマン' },
					{ childItems: 'サポート' }
				]	
			},
			{
				items: '遊び方',
				childLists: [
					{ childItems: '常識編' },
					{ childItems: '基本編' },
					{ childItems: '応用編' }
				]
			},
			{
				items: 'アイテム・スキル',
				childLists: [
					{ childItems: '各種アイテム' },
					{ childItems: '汎用スキル' }
				]	
			},
			{
				items: '歴代環境',
				childLists: [
					{ childItems: '第4回バランス調整' },
					{ childItems: '第3回バランス調整' },
					{ childItems: '第2回バランス調整' },
					{ childItems: '第1回バランス調整' },
					{ childItems: 'リリース開始' }
				]
			}

		]
	}
})


/*
var drowerMenuChildItems = new Vue({
	el: '.drower-menu-child-list',
	data: {
		items1: [
			{ childItems: 'タンク' },
			{ childItems: 'ファイター' },
			{ childItems: 'アサシン' },
			{ childItems: 'メイジ' },
			{ childItems: 'マークスマン' },
			{ childItems: 'サポート' }
		],
		items2: [
			{ childItems: 'タンク' },
			{ childItems: 'ファイター' },
			{ childItems: 'アサシン' },
			{ childItems: 'メイジ' },
			{ childItems: 'マークスマン' },
			{ childItems: 'サポート' }
		]
	}
})
*/