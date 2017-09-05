export default {
    getDeltaTimeDisplay(second){
            var date = new Date( );
            var deltaSecond =  Math.floor(date.getTime( ) / 1000) - second;
            if(deltaSecond < 3600){
                //少于1小时，都算刚刚
                return "刚刚";
            }else if(deltaSecond < 3600 * 24){
                //少于24小时
                return Math.floor(deltaSecond / 3600) + "小时前";
            }else if(deltaSecond < 3600 * 24 * 7) {
                //少于7天
                return Math.floor(deltaSecond / (3600 * 24)) + "天前";
            }else{
                var date = new Date(second * 1000);
                return (date.getMonth() + 1)  + "月" +  date.getDate() + "日";
            }
    }
}