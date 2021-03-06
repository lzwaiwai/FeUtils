var preventViewScroll = function preventViewScroll(classes) {
  var prevent = function prevent(ele) {
    ele.addEventListener('touchstart', function () {
      var o = ele.scrollTop;
      var i = ele.scrollHeight;
      var t = o + ele.offsetHeight;
      if (o === 0) {
        ele.scrollTop = 1;
      } else if (t === i) {
        ele.scrollTop = o - 1;
      }
    });

    ele.addEventListener('touchmove', function (e) {
      ele.offsetHeight < ele.scrollHeight && (e._isScroller = !0);
    });
  };

  if (typeof classes === 'string') {
    classes = [classes];
  }

  classes.forEach(function (item) {
    if (item) {
      var dom = document.querySelector(item);
      dom && prevent(dom);
    }
  });

  document.body.addEventListener('touchmove', function (e) {
    var target = e.target || e.currentTarget;
    if (target.className.indexOf('prevent-view-scroll') !== -1) {
      return;
    }
    e._isScroller || e.preventDefault();
  });
};

export default preventViewScroll;
