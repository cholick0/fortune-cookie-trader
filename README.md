# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/cholick0/fortune-cookie-trader/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/cholick0/fortune-cookie-trader/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

A [make.fun](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) bounty entry: one fortune-cookie line for a crypto trader who just got liquidated.

## The entry

> You will soon meet a tall, dark stranger: your margin call, dressed for dinner, holding your keys.

98 characters, 17 words, one line — inside the gate (1–160 characters) and the task cap (at most 20 words).

The fortune opens with the classic cookie trope, then the punchline breaks the oracular voice: the stranger is the trader's margin call. Loss and trader both in it, rueful and warm.

## How it works

`main.ts` (Node 22) writes the fortune to `/output/entry.txt`, then reads it back and verifies it byte-for-byte, and runs a self-check gate: 1–160 characters, one line, not only white space, at most 20 words.

```sh
node main.ts
cat /output/entry.txt
```
