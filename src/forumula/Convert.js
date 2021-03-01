
  export const converterForumula = (data) => {
    const newData = ((data - 273.15) * 9) / 5 + 32;
    return Math.trunc(newData ) 
    
    // return data − 273.15) × 9/5 + 32
  };



  export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year ;
    return time;
  }