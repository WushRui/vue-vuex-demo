export default {
    buyVip({commit},item){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('setMemberInfo',{
                    userStatus: item.userStatus,
                    vipLevel: item.vipLevel
                });
                resolve('buy success')
            },1000)
        })
    },
    getFreeVip({ commit, state }){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(state.userStatus===0){
                    commit("setMemberInfo", {
                        userStatus: 1,
                        vipLevel: 0
                    });
                    resolve("分享成功，您已获得一个月的高级vip会员");
                }else {
                    resolve("分享成功");
                }
        },1000);
        })
    }
}