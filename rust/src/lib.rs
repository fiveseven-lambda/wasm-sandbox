use wasm_bindgen::prelude::*;
use web_sys::AudioBuffer;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn hello() {
    alert("Hello!");
}

#[wasm_bindgen]
pub fn write_sin(dest: &AudioBuffer) {
    let sample_rate = dest.sample_rate();
    let length = dest.length() as usize;
    let mut buffer = vec![0.; length];
    for i in 0..length {
        let t = i as f32 / sample_rate as f32;
        buffer[i] = (std::f32::consts::TAU * 440. * t).sin();
    }
    for i in 0..dest.number_of_channels() {
        dest.copy_to_channel(&buffer, i as i32).unwrap();
    }
}