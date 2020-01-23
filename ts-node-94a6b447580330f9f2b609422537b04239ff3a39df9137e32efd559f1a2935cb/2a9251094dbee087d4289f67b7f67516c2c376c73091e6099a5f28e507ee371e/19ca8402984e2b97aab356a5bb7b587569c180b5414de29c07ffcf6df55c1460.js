"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
exports.post = {
    createDraft: function (parent, _a, ctx, info) {
        var title = _a.title, content = _a.content;
        return __awaiter(this, void 0, void 0, function () {
            var userId;
            return __generator(this, function (_b) {
                userId = utils_1.getUserId(ctx);
                return [2 /*return*/, ctx.prisma.createPost({
                        title: title,
                        content: content,
                        author: {
                            connect: { id: userId },
                        },
                    })];
            });
        });
    },
    publish: function (parent, _a, ctx, info) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var userId, postExists;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = utils_1.getUserId(ctx);
                        return [4 /*yield*/, ctx.prisma.$exists.post({
                                id: id,
                                author: { id: userId },
                            })];
                    case 1:
                        postExists = _b.sent();
                        if (!postExists) {
                            throw new Error("Post not found or you're not the author");
                        }
                        return [2 /*return*/, ctx.prisma.updatePost({
                                where: { id: id },
                                data: { published: true },
                            })];
                }
            });
        });
    },
    deletePost: function (parent, _a, ctx, info) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var userId, postExists;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = utils_1.getUserId(ctx);
                        return [4 /*yield*/, ctx.prisma.$exists.post({
                                id: id,
                                author: { id: userId },
                            })];
                    case 1:
                        postExists = _b.sent();
                        if (!postExists) {
                            throw new Error("Post not found or you're not the author");
                        }
                        return [2 /*return*/, ctx.prisma.deletePost({ id: id })];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL011dGF0aW9uL3Bvc3QudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL3Jlc29sdmVycy9NdXRhdGlvbi9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0Q7QUFFbkMsUUFBQSxJQUFJLEdBQUc7SUFDWixXQUFXLFlBQUMsTUFBTSxFQUFFLEVBQWtCLEVBQUUsR0FBWSxFQUFFLElBQUk7WUFBcEMsZ0JBQUssRUFBRSxvQkFBTzs7OztnQkFDbEMsTUFBTSxHQUFHLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzdCLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO3dCQUMzQixLQUFLLE9BQUE7d0JBQ0wsT0FBTyxTQUFBO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO3lCQUN4QjtxQkFDRixDQUFDLEVBQUE7OztLQUNIO0lBRUssT0FBTyxZQUFDLE1BQU0sRUFBRSxFQUFNLEVBQUUsR0FBWSxFQUFFLElBQUk7WUFBeEIsVUFBRTs7Ozs7O3dCQUNsQixNQUFNLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDVixxQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0NBQy9DLEVBQUUsSUFBQTtnQ0FDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFOzZCQUN2QixDQUFDLEVBQUE7O3dCQUhJLFVBQVUsR0FBRyxTQUdqQjt3QkFDRixJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTt5QkFDM0Q7d0JBRUQsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0NBQzNCLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFO2dDQUNiLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7NkJBQzFCLENBQUMsRUFBQTs7OztLQUNIO0lBRUssVUFBVSxZQUFDLE1BQU0sRUFBRSxFQUFNLEVBQUUsR0FBWSxFQUFFLElBQUk7WUFBeEIsVUFBRTs7Ozs7O3dCQUNyQixNQUFNLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDVixxQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0NBQy9DLEVBQUUsSUFBQTtnQ0FDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFOzZCQUN2QixDQUFDLEVBQUE7O3dCQUhJLFVBQVUsR0FBRyxTQUdqQjt3QkFDRixJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTt5QkFDM0Q7d0JBRUQsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLEVBQUE7Ozs7S0FDckM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXNlcklkLCBDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBwb3N0ID0ge1xuICBhc3luYyBjcmVhdGVEcmFmdChwYXJlbnQsIHsgdGl0bGUsIGNvbnRlbnQgfSwgY3R4OiBDb250ZXh0LCBpbmZvKSB7XG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKGN0eClcbiAgICByZXR1cm4gY3R4LnByaXNtYS5jcmVhdGVQb3N0KHtcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudCxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBjb25uZWN0OiB7IGlkOiB1c2VySWQgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcblxuICBhc3luYyBwdWJsaXNoKHBhcmVudCwgeyBpZCB9LCBjdHg6IENvbnRleHQsIGluZm8pIHtcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQoY3R4KVxuICAgIGNvbnN0IHBvc3RFeGlzdHMgPSBhd2FpdCBjdHgucHJpc21hLiRleGlzdHMucG9zdCh7XG4gICAgICBpZCxcbiAgICAgIGF1dGhvcjogeyBpZDogdXNlcklkIH0sXG4gICAgfSlcbiAgICBpZiAoIXBvc3RFeGlzdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUG9zdCBub3QgZm91bmQgb3IgeW91J3JlIG5vdCB0aGUgYXV0aG9yYClcbiAgICB9XG5cbiAgICByZXR1cm4gY3R4LnByaXNtYS51cGRhdGVQb3N0KHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7IHB1Ymxpc2hlZDogdHJ1ZSB9LFxuICAgIH0pXG4gIH0sXG5cbiAgYXN5bmMgZGVsZXRlUG9zdChwYXJlbnQsIHsgaWQgfSwgY3R4OiBDb250ZXh0LCBpbmZvKSB7XG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKGN0eClcbiAgICBjb25zdCBwb3N0RXhpc3RzID0gYXdhaXQgY3R4LnByaXNtYS4kZXhpc3RzLnBvc3Qoe1xuICAgICAgaWQsXG4gICAgICBhdXRob3I6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIH0pXG4gICAgaWYgKCFwb3N0RXhpc3RzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBvc3Qgbm90IGZvdW5kIG9yIHlvdSdyZSBub3QgdGhlIGF1dGhvcmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGN0eC5wcmlzbWEuZGVsZXRlUG9zdCh7IGlkIH0pXG4gIH0sXG59XG4iXX0=