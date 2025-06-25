// main.rs - Rust bot as executable (calls the library)
use std::ffi::{CString, CStr};
use std::os::raw::c_char;
extern "C" {
    fn rust_bot_reply(input: *const c_char) -> *const c_char;
}

fn main() {
    use std::io::{self, Write};
    print!("Type a message: ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let input = input.trim();
    let c_input = CString::new(input).unwrap();
    unsafe {
        let reply_ptr = rust_bot_reply(c_input.as_ptr());
        let reply = CStr::from_ptr(reply_ptr).to_string_lossy();
        println!("{}", reply);
    }
}
