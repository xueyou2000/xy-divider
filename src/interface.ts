export interface DividerProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否虚线
     */
    dashed?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 水品还是垂直类型
     */
    type?: "horizontal" | "vertical";
    /**
     * 分割线标题的位置
     */
    orientation?: "left" | "right" | "center";
}
