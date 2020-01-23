"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
function getUserId(ctx) {
    var Authorization = ctx.request.get('Authorization');
    if (Authorization) {
        var token = Authorization.replace('Bearer ', '');
        var userId = jwt.verify(token, process.env.APP_SECRET).userId;
        return userId;
    }
    throw new AuthError();
}
exports.getUserId = getUserId;
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError() {
        return _super.call(this, 'Not authorized') || this;
    }
    return AuthError;
}(Error));
exports.AuthError = AuthError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvdXRpbHMudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFtQztBQVFuQyxTQUFnQixTQUFTLENBQUMsR0FBWTtJQUNwQyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUN0RCxJQUFJLGFBQWEsRUFBRTtRQUNqQixJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxQyxJQUFBLHlEQUFNLENBQW9FO1FBQ2xGLE9BQU8sTUFBTSxDQUFBO0tBQ2Q7SUFFRCxNQUFNLElBQUksU0FBUyxFQUFFLENBQUE7QUFDdkIsQ0FBQztBQVRELDhCQVNDO0FBRUQ7SUFBK0IsNkJBQUs7SUFDbEM7ZUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBK0IsS0FBSyxHQUluQztBQUpZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IFByaXNtYSB9IGZyb20gJy4vZ2VuZXJhdGVkL3ByaXNtYS1jbGllbnQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dCB7XG4gIHByaXNtYTogUHJpc21hXG4gIHJlcXVlc3Q6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKGN0eDogQ29udGV4dCkge1xuICBjb25zdCBBdXRob3JpemF0aW9uID0gY3R4LnJlcXVlc3QuZ2V0KCdBdXRob3JpemF0aW9uJylcbiAgaWYgKEF1dGhvcml6YXRpb24pIHtcbiAgICBjb25zdCB0b2tlbiA9IEF1dGhvcml6YXRpb24ucmVwbGFjZSgnQmVhcmVyICcsICcnKVxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BUFBfU0VDUkVUKSBhcyB7IHVzZXJJZDogc3RyaW5nIH1cbiAgICByZXR1cm4gdXNlcklkXG4gIH1cblxuICB0aHJvdyBuZXcgQXV0aEVycm9yKClcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ05vdCBhdXRob3JpemVkJylcbiAgfVxufVxuIl19