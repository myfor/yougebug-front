import { Global } from './global';
/**
 * 启加载动类
 */
export class Startup {
    /**
     * 加载需要的东西
     */
    run() {
        const DEFAULE = '有个bug，程序员问答社区';
        Global.setTitle(DEFAULE);
        Global.setDescription(DEFAULE);
        Global.setKeywords(DEFAULE);
    }
}
