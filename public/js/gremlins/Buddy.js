define(['gremlinjs'], function (gremlinjs) {
    var Buddy = gremlinjs.create("Buddy", {
        elements:{
            "div.content":"content"
        },
        interests:["OUCH"],
        initialize:function () {
            this.content.html("<h1>I'm watching you!</h1>");
        },
        inform:function (interest, notificationData) {
            switch (interest) {
                case "OUCH":
                    this.content.html("poor boy");
                    break;
                default:
                    break;
            }
        }
    });
    return Buddy;
});