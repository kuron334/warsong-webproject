var topMenuButton = new Vue({
	el: '#menu-button',
	data: {
		toggle: true,
	}
})
//--------------------------------------------------------------------------
const menuData = {
	data: {
		lists: [
			{
				items: '最新情報',
				childLists:[
					{ 	
						childItems: '最新情報',
						child2Lists:[] 
					},
					{ 	
						childItems: '過去のイベント詳細',
						child2Lists:[]
					}
				]
			},
			{
				items: 'ヒーロー',
				childLists: [
					{ 	
						childItems: 'タンク',
						child2Lists:[
							{ child2Items: 'ホートン' },
							{ child2Items: 'バートランド' },
							{ child2Items: 'メッツガー' },
							{ child2Items: 'アリプランド' },
							{ child2Items: 'ヴィッキー' },
							{ child2Items: 'サズム' }
						]
					},
					{ 	
						childItems: 'ファイター',
						child2Lists:[
							{ child2Items: 'ヘラ' },
							{ child2Items: 'アグナル' },
							{ child2Items: 'ガトリング' },
							{ child2Items: 'バンガル' },
							{ child2Items: '悟空' },
							{ child2Items: '八神庵' }
						]
					},
					{
						childItems: 'アサシン',
						child2Lists:[
							{ child2Items: '千里' },
							{ child2Items: 'ラッセ' },
							{ child2Items: 'フローリアン' }
						]
					},
					{
						childItems: 'メイジ',
						child2Lists:[
							{ child2Items: 'スカディア' },
							{ child2Items: 'ロティエル' },
							{ child2Items: 'ドーラ' },
							{ child2Items: 'シーナ' },
							{ child2Items: 'イヴァン' }
						]
					},
					{
						childItems: 'マークスマン',
						child2Lists:[
							{ child2Items: 'バーサ' },
							{ child2Items: 'アルヴィラ' },
							{ child2Items: 'イド' },
							{ child2Items: 'クリント' }
						]
					},
					{
						childItems: 'サポート',
						child2Lists:[
							{ child2Items: 'マーモン'}
						]
					}
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
}

var drowerMenuList = new Vue({
	el: '#drower-menu-list',
	mixins: [menuData]
})

var navbarList = new Vue({
	el: '.navbar-list',
	mixins: [menuData]
})

//---------------------------------------------------------------------------------
var siteTopTitle = Vue.extend({
	template: '<h3 id="site-top-title">Warsong攻略サイト</h3>'
})

var siteTopSub = Vue.extend({
	template: '<span id="site-top-sub">Warsongの最新アプデ情報、攻略、遊び方、その他色々を掲載しています。</span>'
})

var siteTopMain = Vue.extend({
	template: '<div id="site-top-main"><site-top-title></site-top-title><site-top-sub></site-top-sub></div>',
	components: {
		'site-top-title': siteTopTitle,
		'site-top-sub': siteTopSub
	}
})

var siteTop = new Vue({
	el: '#site-top',
	components: {
		'site-top-main': siteTopMain
	}
})