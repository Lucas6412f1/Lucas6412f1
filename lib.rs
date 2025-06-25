// lib.rs - Rust bot logic
#[no_mangle]
pub extern "C" fn rust_bot_reply(input: *const std::os::raw::c_char) -> *const std::os::raw::c_char {
    use std::ffi::{CStr, CString};
    let c_str = unsafe { CStr::from_ptr(input) };
    let input_str = c_str.to_str().unwrap_or("");
    let reply = format!("[Rust bot] You said: {}", input_str);
    CString::new(reply).unwrap().into_raw()
}
