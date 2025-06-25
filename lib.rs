// lib.rs - Rust bot logic with simple human-like reasoning
#[no_mangle]
pub extern "C" fn rust_bot_reply(input: *const std::os::raw::c_char) -> *const std::os::raw::c_char {
    use std::ffi::{CStr, CString};
    let c_str = unsafe { CStr::from_ptr(input) };
    let input_str = c_str.to_str().unwrap_or("").to_lowercase();
    let reply = if input_str.contains("hello") || input_str.contains("hi") {
        "Hello! How can I help you today?".to_string()
    } else if input_str.contains("weather") {
        "I'm not sure, but it looks nice outside!".to_string()
    } else if input_str.contains("name") {
        "My name is Chatterly, your AI assistant.".to_string()
    } else if input_str.contains("joke") {
        "Why did the computer go to the doctor? Because it had a virus!".to_string()
    } else if input_str.contains("bye") {
        "Goodbye! Have a great day!".to_string()
    } else if input_str.trim().is_empty() {
        "Please say something!".to_string()
    } else {
        format!("That's interesting! Tell me more about '{}'.", input_str)
    };
    CString::new(reply).unwrap().into_raw()
}
