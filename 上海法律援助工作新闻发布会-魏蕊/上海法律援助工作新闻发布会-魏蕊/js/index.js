$(function () {
  // 中间左侧轮播图相关
  var imgCount = 5;
  var index = 0;
  var lastIndex = 0;
  var intervalId = null;
  var buttonSpan = $('.main-buttons span');

  // 鼠标移入
  $('.main-contain').mouseenter(function () {
    console.log('hah');
    clearInterval(intervalId);
  })

  // 鼠标移出
  $('.main-contain').mouseleave(function () {
    autoNextPage();
  });
  // 小圆点事件
  // clickButtons();
  buttonSpan.on('click', function () {
    let idx = $(this).index();
    console.log(idx);
    index = idx;
    if (lastIndex === 0 && idx === buttonSpan.length - 1) {
      $('.main-photo').stop().css({
        left: buttonSpan.length * -625 + 'px'
      }).animate({
        left:  -625 * index + 'px'
      });
    }
    //  else if (lastIndex === buttonSpan.length - 1 && idx ===0) {
    //   $('.main-photo').stop().css({
    //     left: '625px'
    //   }).animate({
    //     left:  0
    //   });
    // }
     else {
      $('.main-photo').stop().animate({
        left: -625 * index + 'px'
      });
    }
    buttonSpan.eq(index).addClass('on').siblings().removeClass('on');
    lastIndex = index;
  });
  autoNextPage();
  function autoNextPage() {
    intervalId = setInterval(function () {
      nextPage(true);
    }, 3000);
  };

  function nextPage(next) {
    var targetLeft = 0;
    // 当前的圆点去掉on样式
    if (next) {
      if (index >= 5) {
        targetLeft = 0;
        index = 0;
        $('.main-photo').css({
          left: 0
        });
      }
      index++;
      targetLeft = -625 * index;
      $('.main-photo').stop().animate({
        left: targetLeft + 'px'
      });
      if (index >= 5) {
        buttonSpan.eq(0).addClass('on').siblings().removeClass('on');
      } else {
        buttonSpan.eq(index).addClass('on').siblings().removeClass('on');
      }
    }
  };

  // main右边切换
  $('.br-details').eq(0).show();
  $('.br-tab-item').each(function (i) {
    $(this).click(function () {
      $(this).addClass('br-tab-item-active').siblings('.br-tab-item').removeClass('br-tab-item-active');
      $('.br-details').eq(i).show().siblings('.br-details').hide();
    })
  })

  $('.direct-seeing').eq(0).show();

  $('.tab-item').each(function (i) {
    $(this).click(function () {
      $(this).addClass('tab-item-active').siblings('.tab-item').removeClass('tab-item-active')
      $('.direct-seeing').eq(i).show().siblings('.direct-seeing').hide()
    })
  })

  // 刷新点击
  $('.operation').click(function () {
    $(this).addClass('automatic').siblings().removeClass('automatic')
  });


  // 关闭弹框
  $('.preview-close').click(function () {
    $('.mark-shadow').removeClass('show');
  });
});
//（function结束）

// 图片预览显示
let countOn = 0;
$('.pic-info .pic-item').click(function () {
  $('.mark-shadow').addClass('show');
  let num = $(this).index();
  countOn = num;
  $('.onthe-box').find('.pic-order .photo-card-item').eq(countOn).fadeIn().siblings().hide();
  $('.under-box').find('.under-box-content .select-img').eq(countOn).addClass('active').siblings().removeClass('active');
  if (countOn > 3) {
    console.log(-(countOn - 3) * 150)
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: -(countOn - 3) * 150 + 'px'
    });
  }
});
// 左按钮 
$('.leftbtn').click(function() {
  if (countOn === 0) {
    return false;
  }
  console.log(countOn)
  countOn--;
  $('.onthe-box').find('.pic-order .photo-card-item').eq(countOn).fadeIn().siblings().hide();
  $('.under-box').find('.under-box-content .select-img').eq(countOn).addClass('active').siblings().removeClass('active');
  if (countOn > 3) {
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: -(countOn - 3) * 150 + 'px'
    });
  }
  else {
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: 0 + 'px'
    });
  }
});

// 右按钮 
$('.rightbtn').click(function() {
  if (countOn === 10) {
    return false;
  }
  countOn++;
  $('.onthe-box').find('.pic-order .photo-card-item').eq(countOn).fadeIn().siblings().hide();
  $('.under-box').find('.under-box-content .select-img').eq(countOn).addClass('active').siblings().removeClass('active');
  if (countOn > 3) {
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: -(countOn - 3) * 150 + 'px'
    });
  }
  else {
    $('.under-box').find('ul').stop().animate({
      marginLeft: 0 + 'px'
    });
  }
});

// 图片 
$ ('.select-img').click(function(){
  countOn = $(this).attr('num');
  $('.onthe-box').find('.pic-order .photo-card-item').eq(countOn).fadeIn().siblings().hide();
  $('.under-box').find('.under-box-content .select-img').eq(countOn).addClass('active').siblings().removeClass('active');
  if (countOn > 3) {
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: -(countOn - 3) * 150 + 'px'
    });
  }
  else {
    $('.under-box').find('.under-box-content').stop().animate({
      marginLeft: 0 + 'px'
    });
  }
});