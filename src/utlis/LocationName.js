export   const FindSubLocality = (Data) => {
    console.log("Data=======---->", Data);
    if (Data?.length == 0) return "No Data Found";
    let sublocality = '';
    let locality = '';
    let city = '';
    Data.forEach((item) => {
        if (item.types.includes('sublocality_level_1')) {
          console.log("sublocality_level_1")
            sublocality = item.long_name;
        }
        else if(item.types.includes('sublocality_level_3')){
          sublocality = item.long_name;
        }
        if (item.types.includes('administrative_area_level_1')  ) {
            city = item.short_name;
        }
        if (item.types.includes('locality')) {
            locality = item.long_name;
        }
    });
    return `${sublocality},${locality},${city}`
  //  console.log("sachin------------------1" ,sublocality ,  locality ,  city)
} 