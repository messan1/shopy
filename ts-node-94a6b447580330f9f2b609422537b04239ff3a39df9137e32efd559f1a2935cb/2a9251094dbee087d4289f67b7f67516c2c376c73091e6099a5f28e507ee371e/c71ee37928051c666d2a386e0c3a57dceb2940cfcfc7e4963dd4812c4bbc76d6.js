"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Query_1 = require("./Query");
var Subscription_1 = require("./Subscription");
var auth_1 = require("./Mutation/auth");
var post_1 = require("./Mutation/post");
var User_1 = require("./User");
var Post_1 = require("./Post");
exports.default = {
    Query: Query_1.Query,
    Mutation: __assign({}, auth_1.auth, post_1.post),
    Subscription: Subscription_1.Subscription,
    User: User_1.User,
    Post: Post_1.Post,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL2luZGV4LnRzIiwic291cmNlcyI6WyIvcm9vdC9wcmlzbWEyL3Nob3B5L3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQiwrQ0FBNkM7QUFDN0Msd0NBQXNDO0FBQ3RDLHdDQUFzQztBQUN0QywrQkFBNkI7QUFDN0IsK0JBQTZCO0FBRTdCLGtCQUFlO0lBQ2IsS0FBSyxlQUFBO0lBQ0wsUUFBUSxlQUNILFdBQUksRUFDSixXQUFJLENBQ1I7SUFDRCxZQUFZLDZCQUFBO0lBQ1osSUFBSSxhQUFBO0lBQ0osSUFBSSxhQUFBO0NBQ0wsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnLi9RdWVyeSdcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vTXV0YXRpb24vYXV0aCdcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuL011dGF0aW9uL3Bvc3QnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJ1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4vUG9zdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBRdWVyeSxcbiAgTXV0YXRpb246IHtcbiAgICAuLi5hdXRoLFxuICAgIC4uLnBvc3QsXG4gIH0sXG4gIFN1YnNjcmlwdGlvbixcbiAgVXNlcixcbiAgUG9zdCxcbn1cbiJdfQ==