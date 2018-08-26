const App = getApp();
import PublicFun from '../../utils/publicFun.js';
Page({
  data: {
    SystemInfo:null,
    Tab:['关于我们','新闻中心','产品解决方案','经典工程'],
    CityArray: ['苏州', '杭州', '上海', '重庆','成都'],
    CityIndex:0,
    ActiveId:0,
    searchValue:'',
    News:[
      {
        id:1,
        title:'又一城！济南公共交通大单花落康力电梯！',
        time:'2018-08-13',
        img1:'https://www.cketrip.com/Canny/news/first/a.jpg',
        img2:'https://www.cketrip.com/Canny/news/first/b.jpg',
        detaila:'  市场是检验企业综合实力的试金石。日前，康力电梯公共交通业绩榜上再添新单，成功中标济南高铁东站交通枢纽工程72台电扶梯，2018年国内外市场累计已中标各类公共交通项目近10个。',
        detailb: ' 济南高铁东站总规模17.48万平米，其站房屋盖结构完成后，将以408米的长度以及180米的跨度，成为中国跨度最大的大拱结构建筑物之一。该站设计最大亮点是采取站城一体化的设计理念，打造以交通枢纽工程为先导，以发展现代服务业为主导，文化生活丰富、设施配套完善的城市新中心，成为站城融合的新模板。',
        detailc:'发展公共交通作为改善城市交通环境的最重要手段，已成为各地基础建设投资的重点。自2006年首次进入公共交通市场以来，康力电梯在产品设计、生产供应、销售支持、工程安装、售后服务等全流程积累丰富的实战经验，产品及工程服务方案日臻完备，是该领域最具竞争力和影响力的中国品牌！'
      }, {
        id: 2,
        title: '电梯卫士大比拼 康力电梯占鳌头',
        time: '2018-08-13',
        img1: 'https://www.cketrip.com/Canny/news/two/a.png',
        img2: 'https://www.cketrip.com/Canny/news/two/b.jpg',
        detaila: ' 8月5日下午，由苏州市质监局、苏州市人社局、苏州市总工会、共青团苏州市委、苏州市职业大学联合主办的“e电梯”杯2018年苏州市电梯安装维修工职业技能竞赛暨苏州市大中专院校电梯相关专业实训比赛落下战幕。这场为期两天的比赛，吸引全市37支专业队同场竞技，其中既有众多知名电梯企业的安装维修专业团队，也有苏州市职业大学电梯学院和江苏省吴江中等专业学校的专业学生队伍。为了让技能操作更“接地气”，所有参赛队除参加以国家职业标准三级（高级工）为基础的考核外，主办方还邀请行业专家围绕近年来电梯运行的常见问题，增加对参赛者新知识、新技术掌握程度的考核。',
        detailb: ' 经过多轮激烈角逐，康力电梯参赛队摘得技能竞赛个人优胜一等奖、个人优胜二等奖及团体优胜奖。其中个人优胜一等奖得主获得市人社局授予的“苏州技能大奖”荣誉称号，并成为市总工会申报“苏州市五一劳动奖章”人选。',
        detailc: ' 作为全球电梯制造商TOP10、中国民族电梯业领头羊，康力电梯重视各类人才的培养和选拔，已建立起高素质员工团队。在2017年中国技能大赛--“鲁班杯”全国首届电梯安装维修工职业技能竞赛上，康力电梯参赛选手凭借过硬的理论知识和实战经验，从来自全国18个省区市的2500多名选手中脱颖而出，最终摘得16项团队及个人奖项。'
      }, {
        id: 3,
        title: '康力电梯董事长王友林出席2018南非金砖国家工商论坛',
        time: '2018-07-29',
        img1: 'https://www.cketrip.com/Canny/news/three/a.jpg',
        img2: 'https://www.cketrip.com/Canny/news/three/b.jpg',
        detaila: '7月25-27日，中国国际商会副会长、康力电梯董事长王友林、康力电梯副总裁兼市场传媒及国际业务中心执行总裁朱瑞华等一行应邀随团出访南非第一大城市-约翰内斯堡，共同参加2018南非金砖国家工商论坛。这是董事长王友林继2017年厦门金砖国家工商论坛后再次应邀出席该峰会，并现场聆听中国国家主席习近平重要主题演讲。',
        detailb: ' 2018年是金砖合作第二个“金色十年”开局之年，具有承上启下、继往开来的重大意义。本次论坛以“金砖国家在非洲：在第四次工业革命中共谋包容增长和共同繁荣”为主题，围绕“国际热点问题，国际和平与安全，全球化管理，国际贸易问题”进行讨论。',
        detailc: '中国国家主席习近平发表题为《顺应时代潮流 实现共同发展》的重要讲话。面对复杂多变的世界，习主席从三方面深刻指出世界发展的潮流和大势：未来十年，将是世界经济新旧动能转换的关键十年，是国际格局和力量对比加速演变的十年，是全球治理体系深刻重塑的十年。金砖国家要顺应时代潮流，从约翰内斯堡再出发，继续携手同行，把握发展机遇，合力克服挑战，为构建新型国际关系、构建人类命运共同体发挥建设性作用。'
      }
    ],
    Solution:[
      {
        id:1,
        img:'https://www.cketrip.com/Canny/solution/a.jpg',
        name:'苏州知音温德姆酒店',
        intro:''
      }, {
        id: 2,
        img: 'https://www.cketrip.com/Canny/solution/b.jpg',
        name: '江津富侨国际大酒店',
        intro: ''
      }, {
        id: 3,
        img: 'https://www.cketrip.com/Canny/solution/c.jpg',
        name: '长沙世纪金源大饭店',
        intro: ''
      }, {
        id: 4,
        img: 'https://www.cketrip.com/Canny/solution/d.jpg',
        name: '福州世纪金源大饭店',
        intro: ''
      }, {
        id: 5,
        img: 'https://www.cketrip.com/Canny/solution/e.jpg',
        name: '六盘水凉都锦江温泉国际大酒店',
        intro: ''
      }, {
        id: 6,
        img: 'https://www.cketrip.com/Canny/solution/f.jpg',
        name: ' 田林·金辰郡',
        intro: ''
      }, {
        id: 7,
        img: 'https://www.cketrip.com/Canny/solution/g.jpg',
        name: '海亮·天城',
        intro: ''
      }, {
        id: 8,
        img: 'https://www.cketrip.com/Canny/solution/h.png',
        name: '永春碧桂园',
        intro: ''
      }, {
        id: 9,
        img: 'https://www.cketrip.com/Canny/solution/i.jpg',
        name: '合肥滨湖世纪城',
        intro: ''
      }, {
        id: 10,
        img: 'https://www.cketrip.com/Canny/solution/j.jpg',
        name: '重庆中迪广场',
        intro: ''
      }
    ],
    Classic: [
      {
        id: 1,
        img:'https://www.cketrip.com/Canny/classic/a.jpg',
        name: '成都龙之梦',
        backdrop:'龙之梦·成都新城位于成都东客站核心区域，由A、B、C、D地块四部分构成，由上海长峰集团投资100亿元开发建设。项目占地面积为247.56亩，总建筑面积163万平方米，旨在城际商旅城核心区打造包括购物中心、精品百货、星级酒店群、高端写字楼、影剧院、室内外主题公园等商业形态。',
        light: '新一代城市综合体，成都时尚生活新坐标。',
        product: ''
      }, {
        id: 2,
        img: 'https://www.cketrip.com/Canny/classic/b.jpg',
        name: '贵阳世纪城',
        backdrop: '贵阳世纪城由世纪金源集团投资兴建的超大复合型地产项目。项目设计强调与自然和谐共存，充分利用地块自然条件，创造气势恢弘的内部园林景观：数百亩原生林地、多座山体公园、绵延数公里的龙形滨河公园、200多米高“西部明珠塔”、多处广场景观与上百种雕塑小品，形成多层次、互渗型的复合景观空间，创造金阳独具魅力的绿色之城。',
        light: '贵阳市最大规模的高尚综合社区，开创贵阳城市生活的新时代。',
        product: '康力电梯为该项目提供各类电扶梯1350台。'
      }, {
        id: 3,
        img: 'https://www.cketrip.com/Canny/classic/c.jpg',
        name: '深圳地铁3、5、9号线',
        backdrop: '深圳地铁始建于1998年，是国内第四大城市轨道交通系统，作为中国最发达的城市之一，深圳地铁建设始终高速推进。',
        light: '自主品牌首度进入国内一线城市轨道交通主线。',
        product: '康力电梯为该项目提供167台电扶梯。'
      }, {
        id: 4,
        img: 'https://www.cketrip.com/Canny/classic/d.jpg',
        name: '苏州轨道交通一号线/二号线/三号线/四号线',
        backdrop: '1、2008年全线中标苏州轨道交通一号线，创民族品牌先河；2、2012年全线中标苏州轨道交通二号线，是当时国内公共交通电扶梯招标单次中标台数最多的工程项目；3、2014年全线中标苏州轨道交通四号线，总金额高达约2.7亿元。',
        light: '苏州轨道项目是苏州历史上投资规模最大的城市建设工程，开创了中等城市在全国建设轨道项目的先河。',
        product: ' 康力电梯为苏州轨道交通一号线提供199台重载公交型自动扶梯；为苏州轨道交通控制中心大楼提供6台应用目的层呼梯系统的3.5m/s高速电梯；为苏州轨道交通二号线提供315台重载公交型自动扶梯；为苏州轨道交通三号线提供45台电梯，175台重载公交型自动扶梯；为苏州轨道交通四号线提供352台重载公交型自动扶梯。'
      }, {
        id: 5,
        img: 'https://www.cketrip.com/Canny/classic/e.png',
        name: '太湖龙之梦',
        backdrop: ' 太湖龙之梦总投资200亿，规划总占地面积11600亩，是集13大业态于一体的“巨无霸”旅游综合体，整个园区室外游览动线长度合计约60公里，总规模达上海迪士尼的4倍。',
        light: '全球最大的旅游综合体。',
        product: '康力电梯为该项目提供各类电扶梯500台。'
      }, {
        id: 6,
        img: 'https://www.cketrip.com/Canny/classic/f.png',
        name: '重庆中迪广场',
        backdrop: '重庆中迪广场项目总建筑面积约80万方，位于重庆杨家坪正街核心商圈，是集合欧洲城时尚购物中心、258米城市双塔写字楼、国际五星级酒店、高端精品公寓、时尚休闲商业街于一体的商业新世界，荣膺“2016~2017中国综合体新地标”，树立重庆区域性高端商务典范。',
        light: '百强房企中迪禾邦携手康力电梯打造的重庆商业新地标。',
        product:'康力电梯为该项目提供263台电扶梯，其中6m/s超高速电梯、4m/s高速电梯近60台。'
      }
    ]
  },
  onLoad(options){
    let that = this;
    that._getSystemInfo();
    
  },
  handleTab(e) {//导航点击切换
    this.setData({
      ActiveId: e.currentTarget.dataset.id
    })
    PublicFun.SetTitle(`${this.data.Tab[e.currentTarget.dataset.id]}`)
  },
  switchTab(e){//导航滑动切换
    this.setData({
      ActiveId: e.detail.current
    })
    PublicFun.SetTitle(`${this.data.Tab[e.detail.current]}`)
  },
  handleViewNewsDetail(e){//跳转新闻详情页
  let that = this,
      News = that.data.News,
      _id = e.currentTarget.dataset.id;
  let newsList = News.filter(list => list.id === _id);
  let newsListStr = JSON.stringify(newsList[0]);
    wx.navigateTo({
      url: `newsDetail/newsDetail?detail=${newsListStr}`,
    })
  },
  viewClassic(e){//跳转经典工程页
    let that = this,
      Classic = that.data.Classic,
      _id = e.currentTarget.dataset.id;
    let classic = Classic.filter(list=> list.id === _id )
    let classicStr = JSON.stringify(classic[0]);
    wx.navigateTo({
      url: `classic/classic?detail=${classicStr}`,
    })
  },
  _getSystemInfo() {
    let that = this,
      SystemInfo = App.globalData.SystemInfo;
    SystemInfo.Width = wx.getSystemInfoSync().windowWidth;
    SystemInfo.Height = wx.getSystemInfoSync().windowHeight;
    SystemInfo.screenHeight = wx.getSystemInfoSync().screenHeight;
    App.globalData.SystemInfo = SystemInfo
    that.setData({
      SystemInfo: SystemInfo
    })
  },
  clearInput(){
    this.setData({
      searchValue:''
    })
  },
  searchInput(e){
    this.setData({
      searchValue: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      CityIndex: e.detail.value
    })
  },
})