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
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
exports.auth = {
    signup: function (parent, args, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var password, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(args.password, 10)];
                    case 1:
                        password = _a.sent();
                        return [4 /*yield*/, ctx.prisma.createUser(__assign({}, args, { password: password }))];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, {
                                token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
                                user: user,
                            }];
                }
            });
        });
    },
    login: function (parent, _a, ctx) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var user, valid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new Error("No such user found for email: " + email);
                        }
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        valid = _b.sent();
                        if (!valid) {
                            throw new Error('Invalid password');
                        }
                        return [2 /*return*/, {
                                token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
                                user: user,
                            }];
                }
            });
        });
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL011dGF0aW9uL2F1dGgudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL3Jlc29sdmVycy9NdXRhdGlvbi9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFrQztBQUNsQyxrQ0FBbUM7QUFHdEIsUUFBQSxJQUFJLEdBQUc7SUFDWixNQUFNLFlBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFZOzs7Ozs0QkFDcEIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBL0MsUUFBUSxHQUFHLFNBQW9DO3dCQUN4QyxxQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsY0FBTSxJQUFJLElBQUUsUUFBUSxVQUFBLElBQUcsRUFBQTs7d0JBQXpELElBQUksR0FBRyxTQUFrRDt3QkFFL0Qsc0JBQU87Z0NBQ0wsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dDQUM1RCxJQUFJLE1BQUE7NkJBQ0wsRUFBQTs7OztLQUNGO0lBRUssS0FBSyxZQUFDLE1BQU0sRUFBRSxFQUFtQixFQUFFLEdBQVk7WUFBL0IsZ0JBQUssRUFBRSxzQkFBUTs7Ozs7NEJBQ3RCLHFCQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLFNBQWdDO3dCQUM3QyxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQWlDLEtBQU8sQ0FBQyxDQUFBO3lCQUMxRDt3QkFFYSxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFyRCxLQUFLLEdBQUcsU0FBNkM7d0JBQzNELElBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO3lCQUNwQzt3QkFFRCxzQkFBTztnQ0FDTCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0NBQzVELElBQUksTUFBQTs2QkFDTCxFQUFBOzs7O0tBQ0Y7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XG4gIGFzeW5jIHNpZ251cChwYXJlbnQsIGFyZ3MsIGN0eDogQ29udGV4dCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goYXJncy5wYXNzd29yZCwgMTApXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGN0eC5wcmlzbWEuY3JlYXRlVXNlcih7IC4uLmFyZ3MsIHBhc3N3b3JkIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGp3dC5zaWduKHsgdXNlcklkOiB1c2VyLmlkIH0sIHByb2Nlc3MuZW52LkFQUF9TRUNSRVQpLFxuICAgICAgdXNlcixcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgbG9naW4ocGFyZW50LCB7IGVtYWlsLCBwYXNzd29yZCB9LCBjdHg6IENvbnRleHQpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgY3R4LnByaXNtYS51c2VyKHsgZW1haWwgfSlcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc3VjaCB1c2VyIGZvdW5kIGZvciBlbWFpbDogJHtlbWFpbH1gKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhc3N3b3JkJylcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IGp3dC5zaWduKHsgdXNlcklkOiB1c2VyLmlkIH0sIHByb2Nlc3MuZW52LkFQUF9TRUNSRVQpLFxuICAgICAgdXNlcixcbiAgICB9XG4gIH0sXG59XG4iXX0=