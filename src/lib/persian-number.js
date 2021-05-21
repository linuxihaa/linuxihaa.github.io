
const faNum = (value) => {
    if (value == undefined) return "";
    var str = value.toString().trim();
    if (str === "") return "";
    str = str.replace(/0/g, "۰");
    str = str.replace(/1/g, "۱");
    str = str.replace(/2/g, "۲");
    str = str.replace(/3/g, "۳");
    str = str.replace(/4/g, "۴");
    str = str.replace(/5/g, "۵");
    str = str.replace(/6/g, "۶");
    str = str.replace(/7/g, "۷");
    str = str.replace(/8/g, "۸");
    str = str.replace(/9/g, "۹");
    return str;
}

const getTimeDifferenceCaption = (date) => {
    
    let dif = 2;
    let difText = "ساعت";

    let difInTime = new Date().getTime() - new Date(date).getTime();
    let hours = Math.floor(difInTime / (1000 * 3600));
    let days = Math.floor(difInTime / (1000 * 3600 * 24));
    let month = Math.floor(difInTime / (1000 * 3600 * 24 * 30));
    let years = Math.floor(difInTime / (1000 * 3600 * 24 * 360));

    if(years >= 1){
      difText = "سال";
      dif = years;
    }else if(month >= 1){
      difText = "ماه";
      dif = month;
    }else if(days >= 1){
      difText = "روز";
      dif = days;
    }else if(hours >= 1) {
      difText = "ساعت"; 
      dif = hours;
    }else {
      return `کمتر از یک ساعت قبل`;
    }

    let asked = `${dif} ${difText} قبل`;

    return asked;
  }

  export {faNum, getTimeDifferenceCaption};