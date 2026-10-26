// Soft warm glows drifting on slow, unrelated orbits.
float glow(vec2 uv, vec2 centre) {
    vec2 q = (uv - centre) * vec2(1.78, 1.0);
    return exp(-dot(q, q) * 9.0);
}
vec3 art(vec2 uv) {
    vec3 color = mix(vec3(0.10, 0.04, 0.05), vec3(0.03, 0.02, 0.03), uv.y);
    vec2 a = vec2(0.25 + 0.16 * sin(u_phase.x), 0.25 + 0.12 * cos(u_phase.y));
    vec2 b = vec2(0.74 + 0.14 * cos(u_phase.z), 0.30 + 0.14 * sin(u_phase.x + 1.7));
    vec2 c = vec2(0.50 + 0.30 * sin(u_phase.w + 0.6), 0.18 + 0.10 * sin(u_phase.z + 2.4));
    color += vec3(1.00, 0.42, 0.22) * 0.45 * glow(uv, a);
    color += vec3(0.85, 0.18, 0.42) * 0.42 * glow(uv, b);
    color += vec3(1.00, 0.70, 0.30) * 0.32 * glow(uv, c);
    return color;
}
