define(['gremlinjs'], function (gremlinjs) {
    var Buddy = gremlinjs.create("Buddy", {
        elements:{
            "div.content":"content"
        },
        interests:["OUCH"],
        initialize:function () {
            this.content.html("<h1>I'm watching you Carl!</h1><p>scroll down and watch how <code>Carl.js</code> is loaded when the gremlin enters the viewport.</p>");
        },
        inform:function (interest, notificationData) {
            switch (interest) {
                case "OUCH":
                    this.content.append("<p><strong>poor carl :(</strong></p>");
                    break;
                default:
                    break;
            }
        }
    });
    return Buddy;
});