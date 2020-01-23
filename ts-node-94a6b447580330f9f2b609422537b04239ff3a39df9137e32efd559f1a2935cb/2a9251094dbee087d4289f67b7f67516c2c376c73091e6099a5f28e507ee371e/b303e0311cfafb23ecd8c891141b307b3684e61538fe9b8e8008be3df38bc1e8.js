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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = {
    feedSubscription: {
        subscribe: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ctx.prisma.$subscribe
                        .post({
                        mutation_in: ['CREATED', 'UPDATED'],
                    })
                        .node()];
            });
        }); },
        resolve: function (payload) {
            return payload;
        },
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL1N1YnNjcmlwdGlvbi50cyIsInNvdXJjZXMiOlsiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL1N1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFnQkE7O0FBZGEsUUFBQSxZQUFZLEdBQUc7SUFDMUIsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFVBQU8sTUFBTSxFQUFFLElBQUksRUFBRSxHQUFZOztnQkFDMUMsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVO3lCQUN6QixJQUFJLENBQUM7d0JBQ0osV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztxQkFDcEMsQ0FBQzt5QkFDRCxJQUFJLEVBQUUsRUFBQTs7YUFDVjtRQUNELE9BQU8sRUFBRSxVQUFBLE9BQU87WUFDZCxPQUFPLE9BQU8sQ0FBQTtRQUNoQixDQUFDO0tBQ0Y7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgU3Vic2NyaXB0aW9uID0ge1xuICBmZWVkU3Vic2NyaXB0aW9uOiB7XG4gICAgc3Vic2NyaWJlOiBhc3luYyAocGFyZW50LCBhcmdzLCBjdHg6IENvbnRleHQpID0+IHtcbiAgICAgIHJldHVybiBjdHgucHJpc21hLiRzdWJzY3JpYmVcbiAgICAgICAgLnBvc3Qoe1xuICAgICAgICAgIG11dGF0aW9uX2luOiBbJ0NSRUFURUQnLCAnVVBEQVRFRCddLFxuICAgICAgICB9KVxuICAgICAgICAubm9kZSgpXG4gICAgfSxcbiAgICByZXNvbHZlOiBwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgfSxcbiAgfSxcbn1cbiJdfQ==