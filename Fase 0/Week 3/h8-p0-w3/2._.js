//     var totalNumberofRows = 5;
//     var output="";
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output+=j + " ";
//         }
//         console.log(output);
//         output="";
//     }
//     var num = "";
// var size = 10;
// for(var i=10; i<=size; i++)
// {
//   num = num + i
//   console.log(num);
// }

    var n = 9;
    var output="";
    for (var i = 0; i <=n; i++) {
        var myspace = "";   
        for(let s = 1; s <=(n-i); s++) {
        myspace += s;
    }
        // for (var j = 1; j <= 2*i + 1; j++) {
        //     output+="*";

        // }
        console.log(myspace);
        myspace="";
    }
    for (var i = 0; i <=n; i++) {
        var myspace = "";   
        for(let s = 1; s <=i; s++) {
        myspace += s;
    }
        // for (var j = 1; j <= 2*i + 1; j++) {
        //     output+="*";

        // }
        console.log(myspace);
        myspace="";
    }

    // piramid
    // function pyramid() {
    //     var n = 5;
    //     var output="";
    //     for (var i = 0; i <n; i++) {
    //     var myspace = "";   
    //     for(let s = 0; s <(n-i-1); s++) {
    //         myspace += " ";
    //     }
    //         for (var j = 1; j <= 2*i + 1; j++) {
    //             output+="*";
    
    //         }
    //         console.log(myspace+output);
    //         output="";
    //     }
    // }