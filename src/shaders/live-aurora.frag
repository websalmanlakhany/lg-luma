// A curtain of light: a wavy band, sharp below and fading upwards, broken into vertical rays.
float curtain(vec2 uv, float centre, float rays) {
    float d = uv.y - centre;
    return exp(-d * d * (d > 0.0 ? 900.0 : 110.0)) * rays;
}
vec3 art(vec2 uv) {
    float x = uv.x;
    vec3 color = mix(vec3(0.05, 0.10, 0.17), vec3(0.02, 0.03, 0.06), uv.y);
    float rays = 0.75 + 0.25 * sin(x * 26.0 + 3.0 * sin(x * 5.0 + u_phase.z));
    float green = 0.24 + 0.06 * sin(x * 3.0 + u_phase.x) + 0.03 * sin(x * 7.0 - u_phase.y);
    float teal = 0.31 + 0.05 * sin(x * 2.3 - u_phase.w) + 0.02 * sin(x * 9.0 + u_phase.x);
    float violet = 0.15 + 0.04 * sin(x * 4.1 + u_phase.y);
    color += vec3(0.25, 0.95, 0.60) * 0.55 * curtain(uv, green, rays);
    color += vec3(0.15, 0.70, 0.90) * 0.40 * curtain(uv, teal, 1.3 - rays * 0.5);
    color += vec3(0.55, 0.35, 0.90) * 0.25 * curtain(uv, violet, 1.0);
    return color;
}
