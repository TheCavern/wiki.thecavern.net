---
title: MoFood
slug: /plugins/mofood/ingredients
---


# MoFood
Augment is another addition to pyrofishing that makes fishing a lot more fun. Augment is like an enchant for your rod. But unlike regular enchants, you dont use anvils and enchantment table to create or transfer them.

There is a lot of augments out there and each of them can do diffrent things. Just like enchants, each of them can have multiple levels and there are max levels for each of them. To see list of augments, do `/fish augments`.

## Crafting Augment
Before crafting an augment, make sure you meet the level requirement to make the augment in `/fish augments`. While you're there, note the exact amount of item needed for the augmeent (we will explore why soon). If you meet the requirements here is the steps you need to do:
- Find a couldron full of water
- Drop the **EXACT** amount of ingredient, if it doesnt match it wont work
- While holding a fishing rod, punch the cauldron
- If you see particle and sound effects comming from the cauldron that meaens it works successfully

> TODO: add gif crafting augment

## Applying Augment
To apply an augment to a fishing rod, first we need to open `/fish augment`. In there you will see two empty slot on the left, and two stained glass paane namede `Confirm Augment` and `Cancel Augment`. Here is the step you need to do to apply an augment to the rod

- Open `/fish augment`
- Place your fishing rod on the left empty slot where above it there is a book <McTexture item="item/book" width="16px" /> named `Fishing Rod`
- Place the augment you want to apply(you can put stacked augment to put multiple level at once) on the right empty slot where above it there is a book <McTexture item="item/book" width="16px" /> named `Augment`
- Click the lime stained glass pane <McTexture item="block/lime_stained_glass" width="16px" /> named `Confirm Augment`.

## Removing/Transfering Augment
If  you want to transfer an augment to another rod or to sell, you have to remove it first. You cant remove a single augment from the rod, you can only remove all of it. The only penalty for removing augments is that it cost you 50k [entropy](/plugins/pyrofishing/entropy). To remove an augment, follow this steps:

- Make sure your inventory can hold all the augments once its removed
- Open `/fish augment`
- Place your fishing rod on the left empty slot where above it there is a book <McTexture item="item/book" width="16px" /> named `Fishing Rod`
- In the bottom, click the tnt <McTexture item="block/tnt_side" width="16px" /> named `Remove Augment`

:::warning
There is no "**Are you sure?**" button when removing an augment.
:::

<div style={{ display: 'flex', justifyContent: 'center' }}>
  |Command|Description|
  |-|-|
  |`/fish augment`|Opens the augmenter menu|
  |`/fish augments`|Opens the fishing augment list menu|en
</div>
