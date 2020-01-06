/**
 * 全局
 */
export class Global {
    /**
     * 是否已登录
     */
    static isLogged(): boolean {
        return false;
    }
    /**
     * 设置 title
     * @param title title
     */
    static setTitle(title: string) {
        document.title = title;
    }
    /**
     * 设置 description
     * @param desc description
     */
    static setDescription(desc: string) {
        const META_ID = '__meta_description__';
        this.setMeta(META_ID, 'description', desc);
    }
    /**
     * 设置 keywords
     * @param keywords keywords
     */
    static setKeywords(keywords: string) {
        const META_ID = '__meta_keyqords__';
        this.setMeta(META_ID, 'keywords', keywords);
    }
    /**
     * 设置元数据
     * @param id ID
     * @param name meta 的 name
     * @param content meta 的 content
     */
    private static setMeta(id: string, name: string, content: string) {
        let meta = document.getElementById(id);
        if (meta) {
            meta.setAttribute('content', content);
        } else {
            meta = document.createElement('meta');
            meta.setAttribute('name', name);
            meta.setAttribute('content', content);
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
    }
}
