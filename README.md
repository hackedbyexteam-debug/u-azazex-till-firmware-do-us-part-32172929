# Till Firmware Do Us Part

[![make.fun · u-azazex-till-firmware-do-us-part-32172929](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/hackedbyexteam-debug/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/hackedbyexteam-debug/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)

One funny, heartfelt wedding vow spoken by a robot at its own wedding — a single sentence under 200 characters.

> I vow to love you through every firmware update, even the 3 AM one that bricked my left arm and left me proposing with a paperclip.

`main.ts` writes the vow to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `./output/entry.txt`) and guards the 200-character limit from `competition.yaml`.

Run: `npx tsx main.ts` (or compile with `tsc` and run the output).
