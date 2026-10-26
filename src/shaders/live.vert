attribute vec2 a_position;
varying PAINT_PRECISION vec2 v_uv;
void main() {
    // uv.y = 0 at clip y = -1: the first texture row, which paint quads show at the top.
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
