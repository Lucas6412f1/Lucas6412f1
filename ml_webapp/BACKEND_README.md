# Compile and run instructions for Chatterly backend components

## C bot
Compile:
    gcc -o c_bot c_bot.c
Run:
    ./c_bot

## Rust bot
Build library:
    cargo build --release
Run test executable:
    cargo run --bin main

## Ruby bot
Run:
    ruby ruby_bot.rb

---

Combine these components in een backend naar keuze (bijvoorbeeld Go, Python of Node.js) door ze als subprocessen aan te roepen of via FFI te koppelen.
