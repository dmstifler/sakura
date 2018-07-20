$(function() {
	// 点击 亲，请登录
	$(".top-left>.login-click").click(function(event) {
		$('.popup').css("display", "block");
		$('.popup-middle').css("display", "block");
		$('.popup-middle-in>.register').css("display", "none");
		$('.popup-middle-in>.login').css("display", "block");
		$('.popup-middle-in>.choose-close a:nth-child(2)').css("color", "#000");
		$('.popup-middle-in>.choose-close a:nth-child(2)>hr').css("backgroundColor", "#fff");
		$('.popup-middle-in>.choose-close a:nth-child(1)').css("color", "#f00");
		$('.popup-middle-in>.choose-close a:nth-child(1)>hr').css("backgroundColor", "#f00");
		fnClose();
		fnChooseLogin();
		fnChooseRegister();

	});

	// 点击 免费注册
	$(".top-left>.register-click").click(function(event) {
		$('.popup').css("display", "block");
		$('.popup-middle').css("display", "block");
		$('.popup-middle-in>.login').css("display", "none");
		$('.popup-middle-in>.register').css("display", "block");
		$('.popup-middle-in>.choose-close a:nth-child(1)').css("color", "#000");
		$('.popup-middle-in>.choose-close a:nth-child(1)>hr').css("backgroundColor", "#fff");
		$('.popup-middle-in>.choose-close a:nth-child(2)').css("color", "#f00");
		$('.popup-middle-in>.choose-close a:nth-child(2)>hr').css("backgroundColor", "#f00");
		fnClose();
		fnChooseLogin();
		fnChooseRegister();
	});

	// 关闭按钮重置登陆注册交替的界面的方法
	function fnClose() {
		$('.popup-middle-in>.choose-close>.close').click(function(event) {
			$('.popup').css("display", "none");
			$('.popup-middle').css("display", "none");
			$('.popup-middle-in>.login').css("display", "none");
			$('.popup-middle-in>.register').css("display", "none");
			$('.popup-middle-in>.choose-close a').css("color", "#000");
			$('.popup-middle-in>.choose-close a>hr').css("backgroundColor", "#fff");
		});
	}

	// 选中登录/注册部分的登录的方法
	function fnChooseLogin() {
		$('.popup-middle-in>.choose-close a:nth-child(1)').click(function(event) {
			$('.popup').css("display", "block");
			$('.popup-middle').css("display", "block");
			$('.popup-middle-in>.register').css("display", "none");
			$('.popup-middle-in>.login').css("display", "block");
			$('.popup-middle-in>.choose-close a:nth-child(2)').css("color", "#000");
			$('.popup-middle-in>.choose-close a:nth-child(2)>hr').css("backgroundColor", "#fff");
			$('.popup-middle-in>.choose-close a:nth-child(1)').css("color", "#f00");
			$('.popup-middle-in>.choose-close a:nth-child(1)>hr').css("backgroundColor", "#f00");
		});
	}

	// 选中登录/注册部分的注册的方法
	function fnChooseRegister() {
		$('.popup-middle-in>.choose-close a:nth-child(2)').click(function(event) {
			$('.popup').css("display", "block");
			$('.popup-middle').css("display", "block");
			$('.popup-middle-in>.login').css("display", "none");
			$('.popup-middle-in>.register').css("display", "block");
			$('.popup-middle-in>.choose-close a:nth-child(1)').css("color", "#000");
			$('.popup-middle-in>.choose-close a:nth-child(1)>hr').css("backgroundColor", "#fff");
			$('.popup-middle-in>.choose-close a:nth-child(2)').css("color", "#f00");
			$('.popup-middle-in>.choose-close a:nth-child(2)>hr').css("backgroundColor", "#f00");
		});
	}

	// 检验登录框输入信息是否符合规则
	function loginUser() {

	}
	loginUser();


	// 检验注册框输入信息是否符合规则



	// 顶部右侧导航栏动态事件
	$('.top-right>.ulli').hover(function() {
		$(this).find('.ulinli').css({
			"display": 'block'
		});
		$(this).css({
			"background-color": '#fff',
			"border": '#eee 2px solid',
			"border-top": 'none'
		});
	}, function() {
		$(this).find('.ulinli').css({
			"display": 'none'
		});
		$(this).css({
			"background-color": '#f3f5f7',
			"border": '#f3f5f7 2px solid',
			"border-top": 'none',
			"border-bottom": 'none'
		});
	});

	// 鼠标滑至购物车处显示购物框
	$('.cart').hover(function(event) {
		$(this).css({
			"background-color": "#fff",
			"color": "#f00",
			"box-shadow": "0 0 5px #bbb"
		});
		$('.cart span span').css({
			"color": "#acacac"
		});
		$('.cartdown').css({
			"display": 'block'
		}).hover(function(event) {
			$(this).css({
				"display": 'block'
			});
			$('.cart').css({
				"background-color": "#fff",
				"color": "#f00",
				"box-shadow": "0 0 5px #bbb"
			});
			$('.cart span span').css({
				"color": "#acacac"
			});
		}, function(event) {
			$(this).css({
				"display": 'none'
			});
			$('.cart').css({
				"background-color": "#f00",
				"color": "#fff",
				"box-shadow": "none"
			});
			$('.cart span span').css({
				"color": "#fff"
			});
		});
	}, function(event) {
		$(this).css({
			"background-color": "#f00",
			"color": "#fff",
			"box-shadow": "none"
		});
		$('.cart span span').css({
			"color": "#fff"
		});
		$('.cartdown').css({
			"display": 'none'
		})
	});

	// 删除购物车中商品
	function remove_good(){
		$('.goodsincart-good .remove-good').on('click',function(){
			$(this).parent().next('hr.hrgoods').remove();
			$(this).parent().remove();
		});
	}
	remove_good();


	// banner图自动轮播
	var pic_index = 0;

	function slide_pic() {
		if (pic_index < 4) {
			pic_index = pic_index + 1;
		} else {
			pic_index = 0;
		}
		change_pic();
	}

	// 自动轮播及暂停轮播
	function auto_slide() {
		// 设置间歇调用
		var slide_index = setInterval(slide_pic, 2000);
		// 鼠标移动到banner上暂停轮播
		$(".banner .slide").hover(function() {
			clearInterval(slide_index);
		}, function() {
			slide_index = setInterval(slide_pic, 2000);
		});
	}
	auto_slide();

	// 点击左箭头切换前一张图片
	function left_slide() {
		$(".leftarrow").on('click', function(event) {
			if (pic_index > 0) {
				pic_index = pic_index - 1;
			} else {
				pic_index = 4;
			}
			change_pic();
		});
	}
	left_slide();

	// 点击右箭头切换后一张图片
	function right_slide() {
		$(".rightarrow").on('click', function(event) {
			if (pic_index < 4) {
				pic_index = pic_index + 1;
			} else {
				pic_index = 0;
			}
			change_pic();
		});
	}
	right_slide();

	// 点击小圆点切换图片
	function point_slide() {
		$(".r-slide li").on('click', function(event) {
			pic_index = parseInt($(this).index());
			change_pic();
		});

	}
	point_slide();

	// 切换图片需要改变的（图片和圆点）
	function change_pic() {
		// 改变图片选中状态
		$(".banner .slide li").eq(pic_index).show().siblings("li").hide();
		// 恢复五个圆点为默认
		$(".banner .r-slide li").css({
			"border": "#e7ecf0 1px solid",
			"background-color": "#000",
			"opacity": 0.4
		});
		// 改变圆点选中状态
		$(".banner .r-slide li").eq(pic_index).css({
			"border": "#aaabaf 1px solid",
			"background-color": "#fff",
			"opacity": 1
		});
	}

	// 鼠标滑到具体分类显示相应右拉栏
	var jtfl_index = 0;

	function jtfl_hover() {
		$(".jtfl li").hover(function() {
			jtfl_index = parseInt($(this).index());
			$(this).css({
				"background-color": "#fff",
				"color": "#f01414",
				"font-weight": "bold"
			});
			$(".jtfl-on").css("display", "block").hover(function() {
				$(".jtfl-on").css("display", "block");
				$(".jtfl li").eq(jtfl_index).css({
					"background-color": "#fff",
					"color": "#f01414",
					"font-weight": "bold"
				});
			}, function() {
				$(".jtfl-on").css("display", "none");
				$(".jtfl li").eq(jtfl_index).css({
					"background-color": "#f01414",
					"color": "#fff",
					"font-weight": "normal"
				});
			});
			$(".jtfl-on div").css("display", "none");
			$(".jtfl-on div").eq(jtfl_index).css("display", "block");
		}, function() {
			$(".jtfl-on").css("display", "none");
			$(this).css({
				"background-color": "#f01414",
				"color": "#fff",
				"font-weight": "normal"
			});
		});
	}
	jtfl_hover();

	// 鼠标滑动选择查看具体类别下的商品
	var floor_index = 0;
	var goods_index = 0;

	function show_goods() {
		$('.floor-in').on('mouseover', function() {
			floor_index = parseInt($(this).index());
			$('.choosethree div').on("mouseover", function() {
				goods_index = parseInt($(this).index());
				$('.floor-in').eq(floor_index).find('.choosethree div').css("color", "#555");
				$('.floor-in').eq(floor_index).find('.choosethree div img').css("display", "none");
				$('.floor-in').eq(floor_index).find('.choosethree div').eq(goods_index).css("color", "#f00");
				$('.floor-in').eq(floor_index).find('.choosethree div img').eq(goods_index).css("display", "block");
				$('.floor-in').eq(floor_index).find('.floor-content').css("display", "none").eq(goods_index).css("display", "block");
			});
		});
	}
	show_goods();

	// 右边栏滑到块内显示提示信息
	var rightblock_index = 0;

	function show_rightblock() {
		$('.right-fixed a').hover(function() {
			rightblock_index = parseInt($(this).index());
			$(this).css("background-color", "#71777d");
			$('.right-fixed-lan div span').eq(rightblock_index).css("display", "block");
		}, function() {
			// rightblock_index=parseInt($(this).index());
			$(this).css("background-color", "#b7bbbf");
			$('.right-fixed-lan div span').eq(rightblock_index).css("display", "none");
		});
	}
	show_rightblock();

	// 左侧栏

	function scroll_show() {
		var off_set1 = parseInt($('#floor1').offset().top) - 400;
		var off_set2 = parseInt($('#floor2').offset().top) - 400;
		var off_set3 = parseInt($('#floor3').offset().top) - 400;
		var off_set4 = parseInt($('#floor4').offset().top) - 400;
		var off_set5 = parseInt($('#floor5').offset().top) - 400;
		$(window).scroll(function() {
			if ($(document).scrollTop() >= off_set1 && $(document).scrollTop() < off_set2) {
				recovery_floor_style();
				$('.left-fixed a').eq(0).css({
					"color": '#f00',
					"font-weight": 'bold'
				});
				recovery_floor_innnerhtml();
				document.getElementById("floor11").innerHTML = "衣装";
			} else if ($(document).scrollTop() >= off_set2 && $(document).scrollTop() < off_set3) {
				recovery_floor_style();
				$('.left-fixed a').eq(1).css({
					"color": '#f00',
					"font-weight": 'bold'
				});
				recovery_floor_innnerhtml();
				document.getElementById("floor22").innerHTML = "美妆";
			} else if ($(document).scrollTop() >= off_set3 && $(document).scrollTop() < off_set4) {
				recovery_floor_style();
				$('.left-fixed a').eq(2).css({
					"color": '#f00',
					"font-weight": 'bold'
				});
				recovery_floor_innnerhtml();
				document.getElementById("floor33").innerHTML = "移动";
			} else if ($(document).scrollTop() >= off_set4 && $(document).scrollTop() < off_set5) {
				recovery_floor_style();
				$('.left-fixed a').eq(3).css({
					"color": '#f00',
					"font-weight": 'bold'
				});
				recovery_floor_innnerhtml();
				document.getElementById("floor44").innerHTML = "电器";
			} else if ($(document).scrollTop() >= off_set5) {
				recovery_floor_style();
				$('.left-fixed a').eq(4).css({
					"color": '#f00',
					"font-weight": 'bold'
				});
				recovery_floor_innnerhtml();
				document.getElementById("floor55").innerHTML = "电脑";
			} else {
				$('.left-fixed').css("display", "none");
			}
		});
	}
	scroll_show();

	function recovery_floor_style() {
		$('.left-fixed').css("display", "block");
		$('.left-fixed a').css({
			"color": '#888',
			"font-weight": 'normal'
		});
	}

	function recovery_floor_innnerhtml() {
		document.getElementById("floor11").innerHTML = "1F";
		document.getElementById("floor22").innerHTML = "2F";
		document.getElementById("floor33").innerHTML = "3F";
		document.getElementById("floor44").innerHTML = "4F";
		document.getElementById("floor55").innerHTML = "5F";
	}

	// 左侧栏点击改变文字和颜色
	function click_floor_num() {
		$('.left-fixed a').on('click', function() {
			$('.left-fixed a').css({
				"color": '#888',
				"font-weight": 'normal'
			});
			$(this).css({
				"color": '#f00',
				"font-weight": 'bold'
			});
		});
	}
	click_floor_num();
});