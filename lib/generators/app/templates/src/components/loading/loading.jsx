import React from 'react';
import style from './styles/loading.less';
/**
 * 加载中
 * @description 加载中
 */
function Loading(){
    return (
        <div className={style.loading}>
            <img src={require("./images/loading.png")} />
        </div>
    );
}
        

export default Loading;