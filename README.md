# reverse-modulus

A quick program I wrote to find the "inverse modulus" specifically for use with inserter clocking in Factorio.

```#Markdown
where
 A % B = C

find A, B for some value of C
```

In game you use 'A' as the constant combinator, and 'B' for the arithmetic combinator in modulus mode to make a clock. Its recommended to also use a decider combinator to output when signal < 'A' and pass that output to all inserters on the same clock.

## Details

To find 'C', we essentially need to find how many ticks per swing of a stack inserter to grab 12 items each swing.

```#Markdown
ticks_per_swing = 12 / ((((crafting_speed * prod) / recipe_time) * item_yield) / 60);
```

This is great, but it usually gives us a float value, and we can't swing on a half-tick! So we need to multiply this value by some integer that results in another integer.