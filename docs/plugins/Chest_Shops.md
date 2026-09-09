---
title: Chest Shops
slug: /plugins/chest_shops
description: Learn how to create and use Chest Shops
keywords:
  - shop
  - selling
  - buying
  - money
---

# Chest Shops

Chest shops are a way players can sell stuff to other players, without needing to be online. Shops can **only** be created on chests. The amount you can make depends on your current rank.

## Creating a Selling Shop
To create a chest shop, you first need to have the **Merchant Rank**. This can be obtained by doing `/rankup` twice, for a total of **$55,000**.

Once you are at Merchant rank, do the following:

1. Hit a chest with the item you wish to sell
2. Type the price in chat. 

Additionally, you can use `/qs create [price]` while holding the item you wish to sell.

## Creating a Buying Shop
To create a buying shop, use the steps above to create a sell shop, then right click the shop sign and click **Change** next to "Shop Mode". For **Bedrock Players**, you will need to use `/qs buy`.

## Removing a shop

1. Right click the shop sign
2. Click **Remove Shop**. 
3. For **Bedrock Players**, you will need to use `/qs remove` while looking at the shop sign.

## Max Chest Shops Per Rank

| Rank  | Max Shops |
| ------------- |:-------------:|
| Newcomer   | 0 |
| Citizen    | 0 |
| Merchant   | 12 |
| Clerk      | 12 |
| Novice     | 12 |
| Apprentice | 14 |
| Squire     | 18 |
| Viscount/Viscountess*   | 45 |
| Duke/Duchess* | 50 |
| King/Queen* | 60 |
**Requires [store](https://thecavern.net/store) purchase*

:::note
You can buy an additional **60** chestshops from `/adminshop` for $350,000 each.

:::

## Purchasing Items from a Shop
To purchase something from a shop, do the following:

1. Hit the shop sign 
2. Enter in the chat how much of that item you would like to purchase. 

If you wish to purchase everything from the shop, you can simply type **"All"** when inputing the amount.

## Selling Items to a Shop
If a player has a **Buy Shop**, other players can sell the specified item to the shop. 
To do this, do the following:

1. Hit the shop sign
2. Enter how much you would like to sell. 

If the shop owner doesn't have enough money, you will only be allowed to sell so much.

## Adding/Removing Shop Staff
If you would like other players to keep your shops stocked, you can add them as a shop staff. This lets them open the shop like a normal chest.

1. Run `/qs staff add [username]` while looking at the shop sign.
2. Enter the username of the player you wish to add.
3. You now have a shop staff member.

**Important:** Shop staff will **not** receive any money from sales. All money earned goes into the original show owners account.

To remove a shop staff, do the following:

1. Run `/qs staff del [username]` while looking at the shop sign.
2. Enter the username of the player you wish to remove.
3. You have now removed a shop staff member.

------

## Comands Overview
| Command | Description | 
| ------------- |:-------------:|
| /qs create [price] | Create a new chest shop |
| /qs remove | Remove an existing shop |
| /qs buy | Change the shop to a buy shop |
| /qs staff add [username] | Add a player as shop staff |
| /qs staff del [username] | Remove a player as shop staff |
