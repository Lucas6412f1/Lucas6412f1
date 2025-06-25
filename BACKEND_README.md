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
    rustc main.rs --extern rust_bot=target/release/librust_bot.rlib
    ./main

## Ruby bot
Run:
    ruby ruby_bot.rb

---

Combine these components in a backend of your choice (e.g. Go, Python, or Node.js) by calling them as subprocesses or via FFI.
