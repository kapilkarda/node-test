var moment   = require('moment');
var myDate   = new Date();
var fs       = require('fs');
var date     = moment().format('LTS');

module.exports.solution = (req, res) => {

    try{
        const date = req.body.D;
        const d1 = Object.keys(date)
        const length = d1.length
        const start = d1[0];
        const end = d1[length-1];


        var startDate = new Date(start); //YYYY-MM-DD
        var endDate = new Date(end); //YYYY-MM-DD
        var arr = new Array();
        var dt = new Date(startDate);


        while (dt <= endDate) {
            arr.push(new Date(dt));
            // arr.push(new Date(year, month, ++day));
            dt.setDate(dt.getDate()+1);
        }
        res.send(arr)

    }catch(error){
        res.send(error)
    }
}