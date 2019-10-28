import Mock from 'mockjs'

let jsondata = Mock.mock({
    "classfiy|7": [
        {
            "id|+1": 1,
            "title": "@ctitle(2,3)",
            "list|8": [
                {
                    "title": "@ctitle(2,3)",
                    // "imgurl|1":[""]
                    "imgurl": "@image('50x50','red','bian~')"
                   
                }
            ]
        }
    ]
})
export default jsondata