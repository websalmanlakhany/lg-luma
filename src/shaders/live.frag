// Four phases in [0, 2π), each turning on its own period; sines of them stay precise at mediump.
uniform vec4 u_phase;
varying PAINT_PRECISION vec2 v_uv;
vec3 art(vec2 uv);
// The shading tools/assets.mjs bakes into photo wallpapers, so the interface reads the same on a
// live one: a base under 92% of the picture, a left fade and a vertical gradient.
vec3 shade(vec3 color, vec2 uv) {
    color = mix(vec3(0.090, 0.098, 0.110), color, 0.92);
    color = mix(color, vec3(0.067, 0.078, 0.090), 0.42 * max(1.0 - uv.x / 0.75, 0.0));
    float y = uv.y;
    vec4 s0 = vec4(0.051, 0.063, 0.075, 0.24);
    vec4 s1 = vec4(0.055, 0.067, 0.082, 0.08);
    vec4 s2 = vec4(0.059, 0.067, 0.078, 0.35);
    vec4 s3 = vec4(0.067, 0.075, 0.090, 0.86);
    vec4 s4 = vec4(0.090, 0.098, 0.114, 0.92157);
    vec4 s5 = vec4(0.090, 0.098, 0.114, 0.96078);
    vec4 v = y < 0.19 ? mix(s0, s1, y / 0.19)
        : y < 0.35 ? mix(s1, s2, (y - 0.19) / 0.16)
        : y < 0.63 ? mix(s2, s3, (y - 0.35) / 0.28)
        : y < 0.85 ? mix(s3, s4, (y - 0.63) / 0.22)
        : mix(s4, s5, (y - 0.85) / 0.15);
    return mix(color, v.rgb, v.a);
}
void main() {
    gl_FragColor = vec4(shade(art(v_uv), v_uv), 1.0);
}
