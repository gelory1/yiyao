const DataOption = {
    departs: [
        {
            id: 'erke',
            theme: '',
            conversation: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
            name: '儿科',
            bgm: '',
            url: '../../image/erkeBJ.png'
        },
        {
            id: 'fuke',
            theme: '',
            conversation: '',
            name: '妇科',
            bgm: '',
            url: '../../image/erkeBJ.png'
        },
        {
            id: 'pifuke',
            theme: '',
            conversation: '',
            name: '皮肤科',
            bgm: '',
            url: '../../image/erkeBJ.png'
        }
    ],
    floorTwoData: {
        converStart: ['进去要排号，你挂的什么科？什么号？', '我是来找儿科强主任的。', '挂号了吗？', '还没挂号。', '看你的样子是某个公司的医药代表吧，我们这里不让医药代表进的！'],
        qAnd1: {
            planA: ["",'这个我们知道，我叫华佩芳，是华润三九制药的，我们公司很学术的！所以请放我进去吧。', '不行！你没看专家们正忙着看病吗？！要不你就在外面等吧，等强主任看完病出来我会，现在要进去，不行！', '（代表始终进不去专家诊室，只能在外面，时不时也问问护士，但护士就是说医生没空）我现在能进去了吧？', '不行！专家现在没空！', '那强主任何时有空啊？', '你就在外面等吧，他有空我再告诉你吧！请不要在这里挡着病人进出！'],
            planB: ["",'护士您好啊（笑脸）！请问您贵姓啊？', '我姓严。', '严老师，您好！我是华润三九的，今天我确实找强主任有事，您看能否通融通融，谢谢啊！', '这个不行，我们医院有规定的，医药代表不许入内！', '严老师，这个我知道，我也不想打扰你们工作，但我们确实找强主任有急事，而且我们事先也和他越过了，您看就当帮帮我们忙！我这里有一个小礼物，谢谢了（满脸堆笑）！', '你们确实和强主任约好了？', '是的，约过的，他说今天上午是他的专家门诊。', '那你进去的时候不能打扰他看病，也不能打扰其他病人！', '好的，这个您放心，再次感谢您！']
        },
        rightAnswer:['planB']
    }

};



export default DataOption;