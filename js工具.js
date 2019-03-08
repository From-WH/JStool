var wh = (function () {

  var _ajax = function (o) {
    if (!o) {
      alerta('请传入参数!');
      return false;
    }
    $.ajax({
      url: o.url || '',
      data: o.data || {},
      type: o.type || "GET",
      dataType: o.dataType || "JSON",
      contentType: 'application/json;charset=utf-8',
      success: function (res) {
        o.done && o.done(res);
      },
      error: function (err) {
        o.err && o.err(err);
      }
    })
  }
  var getH = function (select) {
    var h = select.height();
    return h
  }
  return {
    _ajax: _ajax,
    getH: getH
  }
})()