export class IntroInfoItem {
    title: string = "";
    description: string = "";
    image: string = "";
}

export const GetIntroList = async (): Promise<IntroInfoItem[]> => {
    return new Promise((resolve) => {
        resolve([
            {
                title: `“像素南雍”复原工程`,
                description: `南大仙林、鼓楼、苏州校区复原工作，在方块的世界构筑云端的校园。社团常态化项目，建筑服务器创造建筑，2024暑期社会实践校重点项目。`,
                image: '/background/links-background.png'
            },{
                title: `NMO长期原版生存服`,
                description: `原版生存，长期发展，不限玩法。高校Minecraft圈最活跃的服务器。生存、建筑、城建、铁道、生电、节日活动、小游戏……由多个地图拼成的长期服务器，期待你的加入！\n该服务器无周目制，不回档，定期更新版本或增加新地图。`,
                image: '/background/list-background.png'
            },{
                title: `NFCC与小游戏活动`,
                description: `NFCC是NMO定期举办的竞技活动，由多个精彩刺激的小游戏项目组成。通过NMO还可定期参与MUA举办的各种小游戏赛事，与来自其他学校的同学们一起组队切磋！`,
                image: '/background/main-background.png'
            },{
                title: `社刊`,
                description: `分享快乐，记录生活，NMO出品，必属精品。社团大事、服务器新闻、自由创作甚至AIGC，都欢迎投稿，让你的精彩被更多人发现～前往社刊页面即可投稿！（什么，这功能还没做出来？呃啊😭）`,
                image: '/background/links-background.png'
            },{
                title: `动画组`,
                description: `让Minecraft的世界“生”“动”起来！NMO动画组是MUA各高校最大的Minecraft动画交流组织。精美场景渲染、超酷动画制作、相关软件教学。还有定期的“你画我猜”与贺图互换活动哦。详479223524。`,
                image: '/background/list-background.png'
            },{
                title: `线下活动`,
                description: `Minecraft社团不只有线上，线下社团活动才是注入灵魂。社团文化夜、百团大战、星光集市等社管主办的活动，2-50人规模不等的约饭，春游，学术讲座……来这里一起交友，充实你的社团生活吧！`,
                image: '/background/main-background.png'
            }
        ])
    })
}