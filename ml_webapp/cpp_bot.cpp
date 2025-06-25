// Simple C++ backend for Chatterly (echo bot)
// Compile: g++ -o cpp_bot cpp_bot.cpp -lcpp-httplib
// Run: ./cpp_bot
// Requires cpp-httplib (https://github.com/yhirose/cpp-httplib)
#include "httplib.h"
#include <string>

int main() {
    httplib::Server svr;
    svr.Post("/chat", [](const httplib::Request& req, httplib::Response& res) {
        std::string userMsg = req.body;
        std::string reply = "{\"reply\": \"[C++ bot] You said: " + userMsg + "\"}";
        res.set_content(reply, "application/json");
    });
    printf("C++ bot running on :5003\n");
    svr.listen("0.0.0.0", 5003);
}
