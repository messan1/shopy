"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = {
    posts: function (_a, args, ctx) {
        var id = _a.id;
        return ctx.prisma.user({ id: id }).posts();
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvcmVzb2x2ZXJzL1VzZXIudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL3Jlc29sdmVycy9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRWEsUUFBQSxJQUFJLEdBQUc7SUFDbEIsS0FBSyxFQUFFLFVBQUMsRUFBTSxFQUFFLElBQUksRUFBRSxHQUFZO1lBQXhCLFVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3hDLENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgVXNlciA9IHtcbiAgcG9zdHM6ICh7IGlkIH0sIGFyZ3MsIGN0eDogQ29udGV4dCkgPT4ge1xuICAgIHJldHVybiBjdHgucHJpc21hLnVzZXIoeyBpZCB9KS5wb3N0cygpXG4gIH0sXG59XG4iXX0=