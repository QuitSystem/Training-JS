function callObjects() {
    var me = {
        name: "RIGA",
        Age: 2004,
        favcolor: "black",
        height: 180,
    }
    me.height = 181;

    console.log(me)
    console.log(me.height)
}

callObjects()