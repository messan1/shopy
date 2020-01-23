"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = {
    author: function (_a, args, ctx) {
        var id = _a.id;
        return ctx.prisma.post({ id: id }).author();
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL1Bvc3QudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL3Jlc29sdmVycy9Qb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxJQUFJLEdBQUc7SUFDbEIsTUFBTSxFQUFFLFVBQUMsRUFBTSxFQUFFLElBQUksRUFBRSxHQUFZO1lBQXhCLFVBQUU7UUFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3pDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgUG9zdCA9IHtcbiAgYXV0aG9yOiAoeyBpZCB9LCBhcmdzLCBjdHg6IENvbnRleHQpID0+IHtcbiAgICByZXR1cm4gY3R4LnByaXNtYS5wb3N0KHsgaWQgfSkuYXV0aG9yKClcbiAgfSxcbn1cbiJdfQ==