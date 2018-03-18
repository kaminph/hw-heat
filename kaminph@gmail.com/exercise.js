var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------

    return data.length; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------

    //column 19 = district

    var filtered = data.filter(function(value){
        var comparison = value[19] == district;
        return comparison;
    });

    return filtered.length; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------

    //column 13 = primary type

    var filtered = data.filter(function(value){
        var comparison = value[13] == primaryType;
        return comparison;
    });

    return filtered.length; 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    //column 15 = location type

    var filtered = data.filter(function(value){
        var comparison = value[15] == location;
        return comparison;
    });

    return filtered.length; 
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------    

    //column 26 = latitude
    //column 28 = longitude

    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];

    return point;
};




