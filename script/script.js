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
				url: 'info/index.html',
				childLists:[
					{ 	
						childItems: '最新情報',
						url: 'info/info/index.html',
						child2Lists:[] 
					},
					{ 	
						childItems: '過去のイベント詳細',
						url: 'info/events/index.html',
						child2Lists:[]
					}
				]
			},
			{
				items: 'ヒーロー',
				url: 'hero/index.html',
				childLists: [
					{ 	
						childItems: 'タンク',
						url: 'hero/tank/index.html',
						child2Lists:[
							{	
								child2Items: 'ホートン',
								url: 'hero/tank/houghton/index.html'
							},
							{	
								child2Items: 'バートランド',
								url: 'hero/tank/bertrand/index.html'
							},
							{	
								child2Items: 'メッツガー',
								url: 'hero/tank/metzger/index.html'
							},
							{	
								child2Items: 'アリプランド',
								url: 'hero/tank/aripurando/index.html'
							},
							{	
								child2Items: 'ヴィッキー',
								url: 'hero/tank/vicky/index.html'
							},
							{	
								child2Items: 'サズム',
								url: 'hero/tank/sathm/index.html'
							}
						]
					},
					{ 	
						childItems: 'ファイター',
						url: 'hero/fighter/index.html',
						child2Lists:[
							{	
								child2Items: 'ヘラ',
								url: 'hero/fighter/hera/index.html'
							},
							{	
								child2Items: 'アグナル',
								url: 'hero/fighter/agunaru/index.html'
							},
							{	
								child2Items: 'ガトリング',
								url: 'hero/fighter/gatling/index.html'
							},
							{	
								child2Items: 'バンガル',
								url: 'hero/fighter/bangaru/index.html'
							},
							{ 	
								child2Items: '悟空',
								url: 'hero/fighter/goku/index.html'
							},
							{ 	
								child2Items: '八神庵',
								url: 'hero/fighter/yagami/index.html'
							}
						]
					},
					//2018-4-8ここまで
					{
						childItems: 'アサシン',
						url: 'hero/assassin/index.html',
						child2Lists:[
							{ child2Items: '千里' },
							{ child2Items: 'ラッセ' },
							{ child2Items: 'フローリアン' }
						]
					},
					{
						childItems: 'メイジ',
						url: 'hero/mage/index.html',
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
						url: 'hero/marksman/index.html',
						child2Lists:[
							{ child2Items: 'バーサ' },
							{ child2Items: 'アルヴィラ' },
							{ child2Items: 'イド' },
							{ child2Items: 'クリント' }
						]
					},
					{
						childItems: 'サポート',
						url: 'hero/support/index.html',
						child2Lists:[
							{ child2Items: 'マーモン'}
						]
					}
				]
			},
			{
				items: 'おすすめ装備',
				url: 'build/index.html',
				childLists: [
					{ 	
						childItems: 'タンク',
						url: 'build/tank/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: 'ファイター',
						url: 'build/fighter/index.html',
						child2Lists:[]
					},{ 	
						childItems: 'アサシン',
						url: 'build/assassin/index.html',
						child2Lists:[]
					},{ 	
						childItems: 'メイジ',
						url: 'build/mage/index.html',
						child2Lists:[]
					},{ 	
						childItems: 'マークスマン',
						url: 'build/marksman/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: 'サポート',
						url: 'build/support/index.html',
						child2Lists:[]
					}
				]	
			},
			{
				items: '遊び方',
				url: 'howtoplay/index.html',
				childLists: [
					{ 	
						childItems: '常識編',
						url: 'howtoplay/chinpan/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: '基本編',
						url: 'howtoplay/basic/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: '応用編',
						url: 'howtoplay/application/index.html',
						child2Lists:[]
					}
				]
			},
			{
				items: 'アイテム・スキル',
				url: 'other/index.html',
				childLists: [
					{	
						childItems: '各種アイテム',
						url: 'other/items/index.html',
						child2Lists:[]
					},
					{	
						childItems: '汎用スキル',
						url: 'other/skill/index.html',
						child2Lists:[]
					}
				]	
			},
			{
				items: '歴代環境',
				url: 'history/index.html',
				childLists: [
					{ 	
						childItems: '第4回バランス調整',
						url: 'history/4/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: '第3回バランス調整',
						url: 'history/3/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: '第2回バランス調整',
						url: 'history/2/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: '第1回バランス調整',
						url: 'history/1/index.html',
						child2Lists:[]
					},
					{ 	
						childItems: 'リリース開始',
						url: 'history/0/index.html',
						child2Lists:[]
					}
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