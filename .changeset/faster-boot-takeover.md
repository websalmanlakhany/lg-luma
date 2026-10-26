---
"lg-luma": patch
---

Apply the Home takeover sooner after a cold boot: the boot hook is now `10-luma-home`, ahead of other homebrew hooks, starts as soon as SAM answers instead of after a fixed 5 s, polls for the manifest every 250 ms and logs each step with the uptime in `boot.log`.
