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
var graphql_yoga_1 = require("graphql-yoga");
var prisma_client_1 = require("./generated/prisma-client");
var resolvers_1 = require("./resolvers");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers_1.default,
    context: function (request) { return (__assign({}, request, { prisma: prisma_client_1.prisma })); },
});
server.start(function () { return console.log("Server is running on http://localhost:4000"); });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jvb3QvcHJpc21hMi9zaG9weS9zcmMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9yb290L3ByaXNtYTIvc2hvcHkvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsMkRBQWtEO0FBQ2xELHlDQUFtQztBQUVuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLDRCQUFhLENBQUM7SUFDL0IsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQyxTQUFTLHFCQUFBO0lBQ1QsT0FBTyxFQUFFLFVBQUEsT0FBTyxJQUFJLE9BQUEsY0FDZixPQUFPLElBQ1YsTUFBTSx3QkFBQSxJQUNOLEVBSGtCLENBR2xCO0NBQ0gsQ0FBQyxDQUFBO0FBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2VydmVyIH0gZnJvbSAnZ3JhcGhxbC15b2dhJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCdcbmltcG9ydCByZXNvbHZlcnMgZnJvbSAnLi9yZXNvbHZlcnMnXG5cbmNvbnN0IHNlcnZlciA9IG5ldyBHcmFwaFFMU2VydmVyKHtcbiAgdHlwZURlZnM6ICcuL3NyYy9zY2hlbWEuZ3JhcGhxbCcsXG4gIHJlc29sdmVycyxcbiAgY29udGV4dDogcmVxdWVzdCA9PiAoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgcHJpc21hLFxuICB9KSxcbn0pXG5zZXJ2ZXIuc3RhcnQoKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMGApKVxuIl19