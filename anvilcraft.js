ServerEvents.recipes(e => {
    const MODID = 'ac'
    const anvilcraft = e.recipes.anvilcraft

    /*
    充电器/放电器去合成物品(输入物品, 需要或产生多少电, 输出物品的数量, 输出物品, 时间(tick))
    这个铁砧工艺没写支持 只能e.custom了
    */
    let anvilcraft_charger_charging = (
        ingredient,
        power,
        count,
        result,
        time) => {
        return e.custom({
            'type': 'anvilcraft:charger_charging',
            'ingredient': {
                'item': ingredient
            },
            'power': power,
            'result': {
                'count': count,
                'id': result
            },
            'time': time
        })
    }

    /*
    物品粉碎(原料, 输出物品) 产生的物品需要用ChanceItemStack 后面能跟.of(物品) .withAmount(数量) .withChance(概率)
    */
    let anvilcraft_item_cursh = (ingredient, results) => {
        return anvilcraft.item_crush(ingredient, results)
    }

    /*
    膨发(输入物品, 输出物品, 需要的炼药锅, 产生流体(boolean), 消耗流体(boolean), 水(boolean))
    */
    let anvilcraft_bulging = (ingredients, results, cauldron, produce_fluid, consume_fluid, from_water) => {
        return anvilcraft.bulging(ingredients, results, cauldron, produce_fluid, consume_fluid, from_water)
    }

    /*
    方块压缩(输入方块1, 输入方块2, 输出方块)
    当然你也可以自行多加更多方块 比如3方块去压缩成1个方块 这在实际上是可行的 但是jei显示的时候会出问题
    */
    let anvilcraft_block_compress = (block1, block2, result) => {
        return anvilcraft.block_compress([block1, block2], result)
    }
    /*
    boiling和物品粉碎一个写法
    不做额外演示
    */
    let anvilcraft_boiling = (ingredient, results) => {
        return anvilcraft.boiling(ingredient, results)
    }

    /*
    过筛(输入物品, 输出物品, 输出物品的数量) 概率我是单独在每个配方后面写的 不是写在return后面的 可以在底下看到
     */
    let anvilcraft_mesh = (ingredient, results, result_amount) => {
        return anvilcraft.mesh(ingredient, results, result_amount)
    }

    /*
    super_heating 加热器加热(输入物品, 输出物品, 输出方块)
    不清楚怎么把需要什么类型的炼药锅放进输入物品里面 比如你合成需要一个装满水的锅 这个暂时没法实现
    看了看就给了ingredients, results, block_result这三个能填的
    然后呢 这三个是必填的 不填会报错... 所以会出一些难受但是没啥影响的问题 比如:
    如果你想results是'minecraft:raw_iron' 但是不需要block_result 但是必须都填 这时候你可以把block_result填成'minecraft:cauldron'
    如果你想block_result是'headtap:resin_fluid_cauldron' 但是不需要results 这时候你可以把results填成ChanceItemStack.of('minecraft:air')
    如果你俩个都想要呢 你就正常写吧
    这3个如果都有一个共同的问题 jei显示里面会出问题 你会看到一些奇怪的现象
    作者暂时不知道如何解决这个 如果你有更好的方案可以提(e.custom就免了 这个作者会的 这里尽量不用custom就不用)
    */
    let anvilcraft_super_heating = (ingredients, results, block_result) => {
        return anvilcraft.super_heating(ingredients, results, block_result)
    }

    /*
    珠宝加工台(输入物品, 输出物品)
    ingredients(输入物品)作者想不出怎么去让他加数量Item.of(item, integer)好像不行 但是能堆
    */
    let anvilcraft_jewel_crafting = (ingredients, result) => {
        return anvilcraft.jewel_crafting(ingredients, result)
    }

    /*
    你就把这个看成珠宝台吧
    */
    let anvilcraft_item_compress = (ingredient, result) => {
        return anvilcraft.item_compress(ingredient, result)
    }

    /*
    WARING: 有大问题 最明显的问题是写完配方会显示但是如果ingredients和exactIngredients不一样会合成不了(恼)
    和膨发差不多
    */
    let anvilcraft_time_warp = (ingredients, exactIngredients, results, cauldron, produce_fluid, consume_fluid, from_water, requiredFluidLevel) => {
        return anvilcraft.time_warp(ingredients, exactIngredients, results, cauldron, produce_fluid, consume_fluid, from_water, requiredFluidLevel)
    }

    /*
    方块压榨 懂得都懂 直接上链接
    */
    let anvilcraft_squeezing = (input_block, result_block, cauldron) => {
        return anvilcraft.squeezing(input_block, result_block, cauldron)
    }

    /*
    烹饪 你把这个看成物品粉碎吧 就那样子写的
    */
    let anvilcraft_cooking = (ingredients, results) => {
        return anvilcraft.cooking(ingredients, results)
    }

    /*
    你就当他是物品粉碎吧
    */
    let anvilcraft_unpack = (ingredients, results) => {
        return anvilcraft.unpack(ingredients, results)
    }

    /*
    物品注入
    */
    let anvilcraft_item_inject = (ingredients, input_block, result_block) => {
        return anvilcraft.item_inject(ingredients, input_block, result_block)
    }

    /*
    方块粉碎
    */
    let anvilcraft_block_crush = (input, result) => {
        return anvilcraft.block_crush(input, result)
    }

    /*
    你也可以当这个是物品粉碎
    */
    let anvilcraft_stamping = (ingredients, results) => {
        return anvilcraft.stamping(ingredients, results)
    }

    /*
    矿物涌泉(概率与非概率)
    非概率不一定百分百出对应的
    概率的也不一定出
    我也说不清楚 例子给你 自己去试
    */
    let anvilcraft_mineral_fountain = (need_block, from_block, to_block) => {
        return anvilcraft.mineral_fountain(need_block, from_block, to_block)
    }
    let anvilcraft_mineral_fountain_chance = (dimension, from_block, to_block, chance) => {
        return anvilcraft.mineral_fountain_chance(dimension, from_block, to_block, chance)
    }

    anvilcraft_charger_charging('ae2:certus_quartz_crystal', -4, 1, 'ae2:charged_certus_quartz_crystal', 80)

    anvilcraft_item_cursh('minecraft:ender_pearl', ChanceItemStack.of('ae2:ender_dust').withAmount(1))
    anvilcraft_item_cursh('minecraft:chorus_fruit', ChanceItemStack.of('ae2:ender_dust').withAmount(1))
    anvilcraft_item_cursh('ae2:sky_stone_block', ChanceItemStack.of('ae2:sky_dust').withAmount(1))
    anvilcraft_item_cursh('ae2:fluix_crystal', ChanceItemStack.of('ae2:fluix_dust').withAmount(1))
    anvilcraft_item_cursh('ae2:certus_quartz_crystal', ChanceItemStack.of('ae2:certus_quartz_dust').withAmount(1))
    anvilcraft_item_cursh('ae2:charged_certus_quartz_crystal', ChanceItemStack.of('ae2:certus_quartz_dust').withAmount(1))
    anvilcraft_item_cursh('minecraft:raw_gold', ChanceItemStack.of('create:crushed_raw_gold').withAmount(1))
    anvilcraft_item_cursh('minecraft:raw_iron', ChanceItemStack.of('create:crushed_raw_iron').withAmount(1))
    anvilcraft_item_cursh('minecraft:raw_copper', ChanceItemStack.of('create:crushed_raw_copper').withAmount(1))
    anvilcraft_item_cursh('anvilcraft:raw_zinc', ChanceItemStack.of('create:crushed_raw_zinc').withAmount(1))
    anvilcraft_item_cursh('create:raw_zinc', ChanceItemStack.of('create:crushed_raw_zinc').withAmount(1))

    anvilcraft_block_compress('minecraft:deepslate', 'minecraft:deepslate', 'anvilcraft:sturdy_deepslate')

    anvilcraft_bulging(['ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz'], ChanceItemStack.of('ae2:fluix_crystal').withAmount(2), 'minecraft:water_cauldron', false, false, false)

    anvilcraft_mesh('minecraft:raw_copper', 'create:crushed_raw_copper', 1).chanceOutput(0.5) //过筛的概率是.chanceOutput()

    anvilcraft_super_heating('anvilcraft:resin_block', ChanceItemStack.of('minecraft:air'), 'headtap:resin_fluid_cauldron')

    anvilcraft_jewel_crafting(['minecraft:emerald', 'createaddition:electrum_ingot'], 'createaddition:electrum_amulet')
    
    anvilcraft_time_warp('minecraft:clock', 'minecraft:clock', ChanceItemStack.of('minecraft:diamond'), 'minecraft:cauldron', false, false, false, 0)

    anvilcraft_squeezing('minecraft:honey_block', 'minecraft:honeycomb_block', 'anvilcraft:honey_cauldron')

    anvilcraft_item_inject('minecraft:diamond_block', 'minecraft:deepslate', 'minecraft:deepslate_diamond_ore')

    anvilcraft_block_crush('minecraft:deepslate', 'minecraft:cobbled_deepslate')

    anvilcraft_mineral_fountain('minecraft:diamond_block', 'minecraft:deepslate', 'minecraft:deepslate_diamond_ore')
    anvilcraft_mineral_fountain_chance('overworld', 'minecraft:deepslate', 'anvilcraft:cursed_gold_block', 0.2)
})