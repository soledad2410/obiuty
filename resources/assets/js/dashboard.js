var Dasboard = function () {
    var initstockChart = function() {
        var chart = AmCharts.makeChart("stock_chart", {
            "type": "pie",
            "theme": "light",
            "fontFamily": 'Open Sans',
            "color":    '#888',
            "legend": {
                "markerType": "square",
                "position": "right",
                "marginRight": 30,
                "autoMargins": false,
                //valueWidth: 70,
            },
            "dataProvider": [{
                "product": "SP trong tình trạng cảnh báo",
                "qty": 50
            },{
                "product": "Sản phẩm khác",
                "qty": 1453
            }],
            "colors": ["rgb(255, 89, 89)", "rgb(132, 140, 132)"],
            "valueField": "qty",
            "titleField": "product",
            "labelsEnabled": false,
            // "autoMargins": false,
        });
        var chart = AmCharts.makeChart("ship_chart", {
            "type": "pie",
            "theme": "light",
            "fontFamily": 'Open Sans',
            "color":    '#888',
            "legend": {
                "markerType": "square",
                "position": "right",
                "marginRight": 30,
                "autoMargins": false,
                //valueWidth: 70,
            },
            "dataProvider": [{
                "status": "Đang chuyển",
                "qty": 830
            },{
                "status": "Đã chuyển",
                "qty": 4644
            }],
            "colors": ["rgb(244, 255, 0)", "rgb(66, 206, 120)"],
            "valueField": "qty",
            "titleField": "status",
            "labelsEnabled": false,
            // "autoMargins": false,
        });
    }

    return {
        //main function to initiate the module
        init: function() {
            initstockChart();
        }
    };
}();

$(document).ready(function () {
    Common.init();
    Layout.init();
    Dasboard.init();
});