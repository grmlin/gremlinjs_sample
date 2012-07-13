define(['gremlinjs'], function (gremlinjs) {
    var HelloWorld = gremlinjs.create("HelloWorld", {
        elements : {
            "div.content" : "content"
        },
        events : {
            "click div.content h1" : "handleClick"
        },
        initialize : function () {
            this.content.html("<h1>Hello World! (click me)</h1>");
        },
        handleClick : function () {
            this.content.html("ouch");
            this.chatter("OUCH");
        }
    });
    return HelloWorld;
});