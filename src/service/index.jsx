import axios from 'axios'

let lists = [
    {id:0,name:'哈哈哈',num:2},
    {id:1,name:'嘎嘎嘎',num:2},
    {id:2,name:'哇哇哇',num:4},
    {id:3,name:'嘿嘿嘿',num:24},
    {id:4,name:'呵呵呵',num:2}
]

export const getList =() => ( new Promise(function(resolve,reject){
        
        setTimeout(function(){
            resolve(lists)
        },1000)
    })
)