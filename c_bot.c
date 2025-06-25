// c_bot.c - Simple C bot implementation
#include "c_bot.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

const char* c_bot_reply(const char* message) {
    static char buffer[256];
    snprintf(buffer, sizeof(buffer), "[C bot] You said: %s", message);
    return buffer;
}

#ifdef TEST_MAIN
int main() {
    char input[128];
    printf("Type a message: ");
    fgets(input, sizeof(input), stdin);
    input[strcspn(input, "\n")] = 0;
    printf("%s\n", c_bot_reply(input));
    return 0;
}
#endif
