var _i;
$(function () {
  _i = layer.open({type: 2});
  $.ajax({
    url: '/get',
    type: 'get',
    dataType: 'json',
    success: function (res) {
      if (res != null)
        layer.close(_i);
      new Vue({
        el: '.main',
        data: {items: res.params}
      });
    }
  })
})