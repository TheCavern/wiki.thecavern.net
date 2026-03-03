---
title: Quests
slug: /plugins/mofood/quests
---

# Quest
Quests are time-limited tasks designed to add short, repeatable goals and variety to gameplay. Quests reset every 6 hours. When quest reset happens player will be reintroduced to 5 new diffrent quests. 

:::info
Quest can be unlocked after reaching Cooking Mastery Lvl 20
:::


## Objectives
Each quest belongs to one of four objective types. A quest may include between 1-3 objectives, but every objective in the same quest will be of the same type (a single quest cannot mix objective types). For each objective the required amount is chosen randomly between the objective's defined minimum and maximum values, and that randomized value is then multiplied by the quest's difficulty multiplier to produce the final requirement.


### Crop
This objective requires the player to farm planted crops. The exact required amount is randomized between the Min and Max values and scaled by difficulty.

|Min|Max|      
|-|-|
|50|125|


### Consumable
This objective requires the player to craft or cook consumable food items in the Kitchen. The required amount is randomized between the Min and Max values and scaled by difficulty.

|Min|Max|      
|-|-|
|25|75|


### Tree
This objective requires players to harvest bonsai. The required count is randomized between the Min and Max values and scaled by difficulty.

|Min|Max|      
|-|-|
|3|10|


### Brewing
This objective requires the player to brew beverages. In addition to a randomized quantity (between Min and Max, scaled by difficulty), brewing objectives also impose a required minimum brew quality, it will only accepts brewed items whose quality falls within the minimum quality.

|Min|Max|Min Quality|Max Quality|
|-|-|-|-|
|1|3|3|15|


## Difficulties
Quests have selectable difficulties. Difficulty affects the amount required for objectives (via the requirement multiplier), the reward amounts (via the reward multiplier), and for some higher difficulties, it also imposes a time limit within which the quest have to be completed.

**Base Reweards**
|Base Reweards|Amount|
|-|-|
|Money|1000|
|Exp|200|
|Mastery Exp|50|
|Quest Point|1|

:::info
When Quest Point is multiplied, and the end value is not a round number, it will round up to the nearest round number.
:::

|Difficulty|Requirement Multiplier|Reward Multiplier|Time Limit|
|-|-|-|-|
|Easy|1.0|1.0|-|
|Medium|1.5|1.5|-|
|Hard|2.5|3.0|24h|
|Expert|3.0|4.0|12h|

:::info
Once you accept a quest you will hold onto that quest even after timer resets. But if there is a time limit, then you have to finish it before the deadline.
:::


## Quest Points
Quest Points are a secondary currency earned from completing quests. Quest Points are spent in the Quest Shop to purchase unique items. One other use of quest point is that certain farming-tool enchantments or upgrades require Quest Points as part of their purchase cost.


### Quest Shop

|Wares|Cost(Quest Point)|Level Requirement|Limit|
|-|-|-|-|
|Blueprint|100|Lvl 25 Gardening|-|
|Seed Remover|20|Lvl 25 Gardening|-|
|Auto Milking Bucket|100|Lvl 25 Cooking|1|
<!-- |Hoe Augmenter|100|Lvl 25 Gardening|-| -->

## Quest Milestone
Quest Milestones are cumulative progress thresholds for quest completions. Reaching specified milestones grants milestone rewards.

:::warning
Feature aint done
:::


## Quest Rush
Quest Rush is an optional gameplay mechanic that temporarily increases the rewards for completing quests. Activating Quest Rush costs 200,000 Noms and applies the rush reward bonus to eligible quests for a limited duration. Each objective type has its own Rush time window (the duration during which completing that type benefits from the rush). Use Quest Rush when you want to maximize return on time invested in a particular objective type.

|Objective Type|Time|
|-|-|
|Crop|1 hour|
|Consumable|1 hour|
|Tree|2 hour|
|Brewing|1.5 hour|

:::warning
Feature aint done
:::