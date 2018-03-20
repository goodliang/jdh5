var express = require('express');
var router = express.Router();


/* 定义模拟接口 */
router.get('/url', function(req, res, next) {
    res.json({
        errorno: 0,
        msg: "请求成功",
        data: [1, 2, 3, 4]
    });

});
module.exports = router;
