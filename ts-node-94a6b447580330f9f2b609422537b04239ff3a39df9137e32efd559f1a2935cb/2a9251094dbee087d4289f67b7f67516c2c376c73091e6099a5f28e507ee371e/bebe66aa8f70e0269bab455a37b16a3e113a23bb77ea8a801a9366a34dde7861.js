"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.Query = {
    feed: function (parent, args, ctx) {
        return ctx.prisma.posts({ where: { published: true } });
    },
    drafts: function (parent, args, ctx) {
        var id = utils_1.getUserId(ctx);
        var where = {
            published: false,
            author: {
                id: id,
            },
        };
        return ctx.prisma.posts({ where: where });
    },
    post: function (parent, _a, ctx) {
        var id = _a.id;
        return ctx.prisma.post({ id: id });
    },
    me: function (parent, args, ctx) {
        var id = utils_1.getUserId(ctx);
        return ctx.prisma.user({ id: id });
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL1F1ZXJ5LnRzIiwic291cmNlcyI6WyIvcm9vdC9wcmlzbWEyL3Nob3B5L3NyYy9yZXNvbHZlcnMvUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBNkM7QUFFaEMsUUFBQSxLQUFLLEdBQUc7SUFDbkIsSUFBSSxZQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBWTtRQUM3QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsTUFBTSxZQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBWTtRQUMvQixJQUFNLEVBQUUsR0FBRyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXpCLElBQU0sS0FBSyxHQUFHO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLEVBQUUsSUFBQTthQUNIO1NBQ0YsQ0FBQTtRQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELElBQUksWUFBQyxNQUFNLEVBQUUsRUFBTSxFQUFFLEdBQVk7WUFBbEIsVUFBRTtRQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELEVBQUUsWUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVk7UUFDM0IsSUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXNlcklkLCBDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IHtcbiAgZmVlZChwYXJlbnQsIGFyZ3MsIGN0eDogQ29udGV4dCkge1xuICAgIHJldHVybiBjdHgucHJpc21hLnBvc3RzKHsgd2hlcmU6IHsgcHVibGlzaGVkOiB0cnVlIH0gfSlcbiAgfSxcblxuICBkcmFmdHMocGFyZW50LCBhcmdzLCBjdHg6IENvbnRleHQpIHtcbiAgICBjb25zdCBpZCA9IGdldFVzZXJJZChjdHgpXG5cbiAgICBjb25zdCB3aGVyZSA9IHtcbiAgICAgIHB1Ymxpc2hlZDogZmFsc2UsXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiBjdHgucHJpc21hLnBvc3RzKHsgd2hlcmUgfSlcbiAgfSxcblxuICBwb3N0KHBhcmVudCwgeyBpZCB9LCBjdHg6IENvbnRleHQpIHtcbiAgICByZXR1cm4gY3R4LnByaXNtYS5wb3N0KHsgaWQgfSlcbiAgfSxcblxuICBtZShwYXJlbnQsIGFyZ3MsIGN0eDogQ29udGV4dCkge1xuICAgIGNvbnN0IGlkID0gZ2V0VXNlcklkKGN0eClcbiAgICByZXR1cm4gY3R4LnByaXNtYS51c2VyKHsgaWQgfSlcbiAgfSxcbn1cbiJdfQ==