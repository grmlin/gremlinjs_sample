define(['gremlinjs'], function (gremlinjs) {
    var HelloWorld = gremlinjs.create("HelloWorld", {
        elements : {
            "content" : "div.content"
        },
        events : {
            "handleClick" : "click div.content h1"
        },
        initialize : function () {
            this.content.html("<h1>Hi Lenny, can you hear me? (click me)</h1>");
        },
        handleClick : function () {
            this.content.html("<p>ouch, that hurts!</p><p>Scroll up to Lenny, you'll notice, that he received Carl's notification.</p>");
            this.chatter("OUCH");
        }
    });
    return HelloWorld;
});